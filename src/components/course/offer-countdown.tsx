import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import { offer } from "@/config/offer";
import { countdownDeadline } from "@/lib/presentation-playback";

export function OfferCountdown() {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    let deadline = Date.now() + offer.countdown.durationHours * 60 * 60 * 1000;
    try {
      const saved = window.localStorage.getItem(offer.countdown.storageKey);
      deadline = countdownDeadline(saved, Date.now(), offer.countdown.durationHours);
      window.localStorage.setItem(offer.countdown.storageKey, String(deadline));
    } catch { /* Storage may be blocked; keep the preview functional. */ }
    const update = () => setRemaining(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const hours = remaining === null ? "--" : String(Math.floor(remaining / 3600)).padStart(2, "0");
  const minutes = remaining === null ? "--" : String(Math.floor(remaining % 3600 / 60)).padStart(2, "0");
  const seconds = remaining === null ? "--" : String(remaining % 60).padStart(2, "0");
  return <div className="offer-countdown"><span className="countdown-label"><Clock3 size={16} aria-hidden="true" />{offer.countdown.label}</span><div className="countdown-digits" role="timer" aria-label="Contagem regressiva ilustrativa">{[[hours, "horas"], [minutes, "minutos"], [seconds, "segundos"]].map(([value, label]) => <span key={label}><strong>{value}</strong><small>{label}</small></span>)}</div>{remaining === 0 && <p>Prévia encerrada — condições oficiais a confirmar.</p>}</div>;
}