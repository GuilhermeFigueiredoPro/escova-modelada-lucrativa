import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, GraduationCap, Image, Info, MonitorPlay, MoveUpRight, Scissors, Sparkles, Users, WandSparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { CheckoutButton } from "@/components/course/checkout-button";
import { ResultGallery } from "@/components/course/result-gallery";
import { OfferCountdown } from "@/components/course/offer-countdown";
import { PresentationOpening } from "@/components/course/presentation-opening";
import { faq, instructorPhoto, offer, type CoursePhoto } from "@/config/offer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: offer.seo.title },
      { name: "description", content: offer.seo.description },
      { property: "og:title", content: offer.seo.title },
      { property: "og:description", content: offer.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: offer.seo.title },
      { name: "twitter:description", content: offer.seo.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function PhotoSpace({ photo, portrait = false }: { photo: CoursePhoto | null; portrait?: boolean }) {
  if (photo) return <img className="course-photo" src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={portrait ? "lazy" : "eager"} fetchPriority={portrait ? "auto" : "high"} />;
  return <div className={`photo-space ${portrait ? "portrait-space" : "hero-photo-space"}`}>
    <div className="photo-corner corner-tl" /><div className="photo-corner corner-br" />
    <Image size={30} strokeWidth={1} />
    <span>{portrait ? "Márcio Cardozo" : "Textura. Movimento. Acabamento."}</span>
    <small>{portrait ? "[INSERIR FOTO AUTÊNTICA DO INSTRUTOR]" : "[INSERIR FOTO DE ESCOVA MODELADA]"}</small>
  </div>;
}

function Index() {
  const [contentVisible, setContentVisible] = useState(false);
  const revealContent = useCallback(() => setContentVisible(true), []);
  useEffect(() => {
    if (!contentVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("section-arrived");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".sales-content section").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [contentVisible]);
  return <>
    <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
    <PresentationOpening onReady={revealContent} />
    <div className="sales-content" hidden={!contentVisible}>
    <main id="conteudo">
      <div className="benefit-strip"><div className="container strip-inner"><span><Sparkles size={17} /> Técnica que valoriza o acabamento</span><span><MonitorPlay size={17} /> Aprendizado online</span><span><Check size={18} /> Também para quem começa do zero</span></div></div>

      <section className="section intro-section">
        <div className="container intro-layout"><div><span className="eyebrow"><Sparkles size={18} strokeWidth={1.6} aria-hidden="true" /> UM NOVO OLHAR PARA A SUA TÉCNICA</span><h2>A escova não precisa <br /> ser a sua <em className="strategic-underline">insegurança.</em></h2></div><div className="intro-body"><p>O acabamento ainda não fica como você gostaria? Troque o improviso por <strong>técnica e clareza</strong> para desenvolver movimento, modelagem e uma finalização mais cuidadosa.</p><a className="text-link" href="#aprendizado">Conheça o que você pode desenvolver <MoveUpRight size={17} /></a></div></div>
      </section>

      <section id="aprendizado" className="section learning-section">
        <div className="container"><div className="section-heading"><div><span className="eyebrow"><Scissors size={18} strokeWidth={1.6} aria-hidden="true" /> O QUE VOCÊ VAI APRENDER</span><h2>Mais técnica. <br /> <em className="strategic-underline">Mais possibilidades.</em></h2></div><p>Um caminho prático para evoluir na técnica e no acabamento.</p></div>
          <div className="learning-grid">{([
            [Scissors, "Escova modelada", "Técnica para criar movimento e um acabamento profissional."],
            [WandSparkles, "Acabamento de alto nível", "Valorize a finalização e o cuidado em cada atendimento."],
            [GraduationCap, "Evolução com clareza", "Um percurso do básico à execução profissional, também para iniciantes."],
          ] as const).map(([ItemIcon, title, text]) => <article className="learning-item" key={String(title)}><span className="item-number"><ItemIcon size={25} strokeWidth={1.5} aria-hidden="true" /></span><ArrowUpRight className="item-arrow" size={23} strokeWidth={1} /><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="learning-note"><Info size={20} strokeWidth={1.6} aria-hidden="true" /><p>Percurso proposto em até <strong>7 dias</strong>. A evolução depende da prática e da experiência; não há garantia de domínio nesse prazo.</p>{offer.courseContent.trim() ? <span className="pending-field">{offer.courseContent}</span> : null}</div>
        </div>
      </section>

      <section className="section results-section"><div className="container"><div className="section-heading"><div><span className="eyebrow"><WandSparkles size={18} strokeWidth={1.6} aria-hidden="true" /> MOVIMENTO QUE FAZ A DIFERENÇA</span><h2>Um acabamento <br /> que <em className="strategic-underline">valoriza o seu trabalho.</em></h2></div><p>A escova modelada pode ampliar o seu repertório de serviços e abrir novas oportunidades no salão.</p></div><ResultGallery /></div></section>

      <section id="para-quem" className="section audience-section"><div className="container audience-layout"><div><span className="eyebrow"><Users size={18} strokeWidth={1.6} aria-hidden="true" /> PARA QUEM É ESTE CURSO</span><h2>O seu próximo passo <br /> pode começar <em>aqui.</em></h2><p className="audience-description">Para quem está começando ou quer aprimorar o acabamento dos atendimentos.</p></div><div><h3 className="audience-subheading">Este curso pode ser para você se...</h3><ul className="audience-list"><li><Check /><span>Está começando do zero e quer aprender escova modelada.</span></li><li><Check /><span>Trabalha com beleza e deseja aprimorar sua execução.</span></li><li><Check /><span>Quer oferecer um acabamento mais cuidadoso às suas clientes.</span></li><li><Check /><span>Busca uma habilidade que pode agregar valor aos seus serviços.</span></li></ul><p className="audience-honesty">Já é avançada ou busca outra especialização? Confira o conteúdo antes de decidir.</p></div></div></section>

      <section id="marcio" className="section instructor-section"><div className="container instructor-layout"><div className="instructor-visual"><PhotoSpace photo={instructorPhoto} portrait /><div className="portrait-stats">{offer.instructorStats.map((stat) => <div className="portrait-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div><div className="instructor-copy"><span className="eyebrow"><Scissors size={18} aria-hidden="true" /> QUEM VAI GUIAR SEU APRENDIZADO</span><h2>Márcio <em>Cardozo.</em></h2><span className="instructor-role">HAIRSTYLIST · CABELEIREIRO MASTER</span><div className="instructor-bio">{offer.instructorBio.map((paragraph) => <p key={paragraph}>{paragraph.split(new RegExp(`(${offer.instructorHighlights.join("|")})`, "g")).map((part, index) => offer.instructorHighlights.includes(part) ? <strong className="bio-emphasis" key={index}>{part}</strong> : part)}</p>)}</div></div></div></section>

      <section id="oferta" className="section offer-section"><div className="container offer-layout"><div className="offer-copy"><span className="eyebrow"><GraduationCap size={18} strokeWidth={1.6} aria-hidden="true" /> INVISTA NO SEU REPERTÓRIO</span><h2>Seu talento merece <br /> <em className="strategic-underline">uma nova possibilidade.</em></h2><p>Técnica e acabamento com Márcio Cardozo, mesmo começando do zero.</p></div><div className="offer-panel"><span className="eyebrow">ESCOVA MODELADA LUCRATIVA</span><p className="price-kicker">à vista</p><p className="offer-price">{offer.price}</p><p className="price-installments"><span>ou</span> <strong>{offer.installments.count}x</strong> <span>de</span> <strong>{offer.installments.value}</strong><sup>*</sup></p><CheckoutButton /><p className="installments-footnote">* Parcelamento no cartão pelo checkout oficial da Hotmart.</p><p className="offer-checkout-note"><ShieldCheck size={16} aria-hidden="true" /> 7 dias de garantia incondicional</p></div></div></section>

      <section id="garantia" className="section guarantee-section"><div className="container guarantee-layout"><div className="guarantee-symbol" aria-hidden="true"><ShieldCheck size={42} strokeWidth={1.4} /><strong>7</strong><span>DIAS DE GARANTIA</span></div><div><span className="eyebrow">SUA DECISÃO COM TRANQUILIDADE</span><h2>Experimente com <em className="strategic-underline">segurança.</em></h2><p>{offer.guarantee}</p></div></div></section>

      <section id="duvidas" className="section faq-section"><div className="container faq-layout"><div><span className="eyebrow"><MessageCircle size={18} strokeWidth={1.6} aria-hidden="true" /> ANTES DO SEU PRÓXIMO PASSO</span><h2>Vamos tirar <br /> suas <em>dúvidas?</em></h2><p>Clareza para você decidir com tranquilidade.</p></div><div className="faq-list">{faq.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}<ChevronDown size={19} /></summary><p className={item.answer.startsWith("[") ? "pending-field" : undefined}>{item.answer}</p></details>)}</div></div></section>

      <section className="final-section"><div className="container"><span className="eyebrow"><Sparkles size={18} strokeWidth={1.6} aria-hidden="true" /> TÉCNICA, CUIDADO E NOVAS POSSIBILIDADES</span><h2>Um belo acabamento. <br /> <em className="strategic-underline">O próximo passo é seu.</em></h2><p className="price-kicker">à vista</p><p className="final-price">{offer.price}</p><p className="price-installments"><span>ou</span> <strong>{offer.installments.count}x</strong> <span>de</span> <strong>{offer.installments.value}</strong><sup>*</sup></p><OfferCountdown /><CheckoutButton /><p>7 dias de garantia incondicional.</p></div></section>
    </main>
    <footer className="site-footer"><div className="container reference-footer"><h2>{offer.name}</h2><p className="footer-copyright">{offer.footer.copyright}</p><p className="footer-credit"><a href={offer.footer.creditUrl} target="_blank" rel="noopener noreferrer">{offer.footer.credit}</a></p><div className="footer-links">{[{ label: "Termos de Uso", url: offer.termsUrl }, { label: "Política de Privacidade", url: offer.privacyUrl }, { label: "Suporte", url: offer.supportUrl }].map(({ label, url }) => url && /^https:\/\//.test(url) ? <a key={label} href={url}>{label}</a> : <span key={label} aria-disabled="true" title="Endereço oficial a confirmar">{label}</span>)}</div><p className="footer-disclaimer">{offer.footer.disclaimer}</p></div></footer>
    </div>
  </>;
}
