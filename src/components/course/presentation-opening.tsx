import { useEffect, useRef, useState } from "react";
import { Play, Sparkles } from "lucide-react";
import { offer } from "@/config/offer";
import { YouTubePresentation } from "@/components/course/youtube-presentation";

export function PresentationOpening({ onReady }: { onReady: () => void }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [progress, setProgress] = useState(0);
  const readyCallback = useRef(onReady);
  readyCallback.current = onReady;
  const hasVideo = Boolean(offer.presentation.videoUrl) && !videoFailed;

  useEffect(() => {
    const startedAt = performance.now();
    const timer = window.setInterval(() => {
      const next = Math.min(100, (performance.now() - startedAt) / (offer.presentation.revealAfterSeconds * 10));
      setProgress(next);
      if (next >= 100) { window.clearInterval(timer); readyCallback.current(); }
    }, 100);
    return () => window.clearInterval(timer);
  }, []);

  return <section id="inicio" className="presentation-opening" aria-labelledby="course-title">
    <div className="container presentation-inner">
      <div className="presentation-mark" aria-hidden="true"><Sparkles size={23} strokeWidth={1.4} /><span /><Sparkles size={15} strokeWidth={1.4} /></div>
      <h1 id="course-title">Escova Modelada <span>Lucrativa.</span></h1>
      <p className="presentation-subtitle">{offer.presentation.subtitle}</p>
      {hasVideo && offer.presentation.youtubeVideoId ? <YouTubePresentation videoId={offer.presentation.youtubeVideoId} /> : <div className="presentation-player">
        {hasVideo && offer.presentation.videoUrl ? <video
          src={offer.presentation.videoUrl}
          autoPlay playsInline controls preload="auto"
          aria-label="Apresentação do curso Escova Modelada Lucrativa"
          onError={() => setVideoFailed(true)}
        /> : <div className="presentation-placeholder" role="img" aria-label="Espaço reservado para o vídeo de apresentação do curso">
          <Play size={36} strokeWidth={1.3} aria-hidden="true" />
          <span>{videoFailed ? "Vídeo indisponível no momento" : "Vídeo de apresentação"}</span>
          <small>{videoFailed ? "" : "[INSERIR VÍDEO OFICIAL DO CURSO]"}</small>
        </div>}
      </div>}
      <div className="presentation-progress"><div className="progress-caption"><span>{progress >= 100 ? "Conteúdo liberado" : "O restante da página será liberado em instantes"}</span><span>{Math.floor(progress)}%</span></div><progress max={100} value={progress} aria-label="Progresso para liberar o restante da página" /></div>
    </div>
  </section>;
}