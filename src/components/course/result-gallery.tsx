import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resultPhotos } from "@/config/offer";

export function ResultGallery() {
  const [viewportRef, carousel] = useEmblaCarousel({ loop: resultPhotos.length > 1, align: "start" });
  const [selected, setSelected] = useState(0);
  const onSelect = useCallback(() => setSelected(carousel?.selectedScrollSnap() ?? 0), [carousel]);
  useEffect(() => {
    if (!carousel) return;
    onSelect();
    carousel.on("select", onSelect);
    return () => { carousel.off("select", onSelect); };
  }, [carousel, onSelect]);
  if (resultPhotos.length === 0) return <div className="gallery-placeholder"><Image size={27} strokeWidth={1} /><span>Galeria de resultados</span><small>[INSERIR FOTOS AUTÊNTICAS DE ESCOVA MODELADA]</small></div>;
  return <div className="result-gallery" role="region" aria-roledescription="carrossel" aria-label="Fotos de resultados" tabIndex={0} onKeyDown={(event) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); carousel?.scrollPrev(); }
    if (event.key === "ArrowRight") { event.preventDefault(); carousel?.scrollNext(); }
  }}>
    <div ref={viewportRef} className="gallery-viewport"><div className="gallery-track">{resultPhotos.map((photo, index) => <figure className="gallery-slide" key={photo.src} role="group" aria-label={`${index + 1} de ${resultPhotos.length}`}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" /></figure>)}</div></div>
    <div className="gallery-controls"><Button variant="control" size="icon" onClick={() => carousel?.scrollPrev()} aria-label="Foto anterior"><ArrowLeft /></Button><div className="gallery-dots">{resultPhotos.map((photo, index) => <Button key={photo.src} variant="control" className="gallery-dot" aria-label={`Ir para foto ${index + 1}`} aria-current={selected === index ? "true" : undefined} onClick={() => carousel?.scrollTo(index)} />)}</div><Button variant="control" size="icon" onClick={() => carousel?.scrollNext()} aria-label="Próxima foto"><ArrowRight /></Button></div>
  </div>;
}