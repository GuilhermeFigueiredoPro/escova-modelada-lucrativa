import { useEffect, useRef, useState } from "react";
import { Volume2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

type Player = {
  playVideo: () => void; mute: () => void; unMute: () => void;
  isMuted: () => boolean; setVolume: (volume: number) => void;
  getCurrentTime: () => number; getPlayerState: () => number; destroy: () => void;
};
type PlayerEvent = { target: Player; data: number };
type YouTubeAPI = { Player: new (element: HTMLElement, options: {
  videoId: string; playerVars: Record<string, string | number>;
  events: { onReady: (event: PlayerEvent) => void; onStateChange: (event: PlayerEvent) => void; onAutoplayBlocked: () => void; onError: () => void };
}) => Player };
declare global {
  interface Window { YT?: YouTubeAPI; onYouTubeIframeAPIReady?: () => void }
}
let apiPromise: Promise<YouTubeAPI> | undefined;
function loadYouTube() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      if (window.YT?.Player) resolve(window.YT);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.onerror = () => { apiPromise = undefined; script.remove(); reject(new Error("YouTube unavailable")); };
    document.head.appendChild(script);
  });
  return apiPromise;
}

export function YouTubePresentation({ videoId }: {
  videoId: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const player = useRef<Player | null>(null);
  const [needsSound, setNeedsSound] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let disposed = false;
    let mutedFallback = false;
    const mount = document.createElement("div");
    container.replaceChildren(mount);
    loadYouTube().then((api) => {
      if (disposed) return;
      player.current = new api.Player(mount, {
        videoId, playerVars: { autoplay: 1, playsinline: 1, controls: 1, rel: 0, origin: window.location.origin },
        events: {
          onReady: ({ target }) => {
            const iframe = container.querySelector("iframe");
            iframe?.setAttribute("title", "Apresentação do curso Escova Modelada Lucrativa");
            iframe?.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture; fullscreen");
            target.setVolume(100); target.unMute(); target.playVideo();
          },
          onStateChange: ({ target, data }) => {
            if (data === 1) setNeedsSound(target.isMuted());
          },
          onAutoplayBlocked: () => {
            setNeedsSound(true);
            if (!mutedFallback) { mutedFallback = true; player.current?.mute(); player.current?.playVideo(); }
          },
          onError: () => { setFailed(true); },
        },
      });
    }).catch(() => { if (!disposed) setFailed(true); });
    return () => { disposed = true; player.current?.destroy(); player.current = null; container.replaceChildren(); };
  }, [videoId, attempt]);
  return <>
    <div className="presentation-player"><div ref={host} className="youtube-host" />
      {failed && <div className="youtube-error"><p>Não foi possível carregar o vídeo.</p><Button variant="course" onClick={() => { setFailed(false); setAttempt((value) => value + 1); }}><RotateCcw /> Tentar novamente</Button></div>}
    </div>
    {!failed && needsSound && <Button className="video-sound-button" variant="course" onClick={() => { player.current?.unMute(); player.current?.setVolume(100); player.current?.playVideo(); setNeedsSound(false); }}><Volume2 /> Reproduzir com som</Button>}
  </>;
}