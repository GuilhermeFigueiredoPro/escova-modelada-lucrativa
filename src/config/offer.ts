import photo1 from "@/assets/escova-resultado-1.webp.asset.json";
import photo2 from "@/assets/escova-resultado-2.webp.asset.json";
import photo3 from "@/assets/escova-resultado-3.webp.asset.json";
import photo4 from "@/assets/escova-resultado-4.webp.asset.json";
import photo5 from "@/assets/escova-resultado-5.webp.asset.json";
import photo6 from "@/assets/escova-resultado-6.webp.asset.json";
import photo7 from "@/assets/escova-resultado-7.webp.asset.json";
import photo8 from "@/assets/escova-resultado-8.webp.asset.json";
import photo9 from "@/assets/escova-resultado-9.webp.asset.json";
import instructorPhotoAsset from "@/assets/marcio-cardozo.webp.asset.json";

// Replace explicit placeholders with producer-confirmed information before publishing.
// Every purchase button reads this one URL. Keep the placeholder until an official URL is supplied.
export const offer = {
  name: "Escova Modelada Lucrativa",
  instructor: "Márcio Cardozo",
  instructorBio: [
    "Márcio Cardozo é Cabeleireiro Master com mais de 30 anos de carreira, especialista em cortes, colorimetria e visagismo. Foi técnico da L'Oréal Paris e é proprietário do renomado Studio M Loreal em Macaé.",
    "Já ministrou workshops por todo o Brasil e América Latina. Criador do método 'Destravando no Corte', ele transforma décadas de experiência em um caminho claro para que profissionais da beleza entendam o raciocínio do corte e executem cada técnica com mais precisão e confiança.",
    "Márcio também é referência em cursos digitais para profissionais da beleza. Criador de programas como Gestão de Ouro Pro Beleza, Escova Modelada Lucrativa e outros métodos que já formaram milhares de alunos online.",
  ],
  instructorHighlights: ["mais de 30 anos de carreira", "técnico da L'Oréal Paris", "precisão e confiança", "milhares de alunos online"],
  instructorStats: [
    { value: "30+", label: "Anos de carreira" },
    { value: "1000+", label: "Alunos formados" },
    { value: "L'Oréal", label: "Ex-Técnico" },
  ],
  presentation: {
    videoUrl: "https://youtu.be/LwrKqhHQBU0?is=VuEhYzABtWLK2sUa" as string | null,
    youtubeVideoId: "LwrKqhHQBU0",
    revealAfterSeconds: 25,
    subtitle: "Aprenda um acabamento profissional com Márcio Cardozo, mesmo começando do zero.",
  },
  checkoutUrl: "https://pay.hotmart.com/N105599202D",
  price: "R$ 37,90",
  priceNote: "Condições de pagamento e parcelamento apresentadas no checkout oficial.",
  countdown: { durationHours: 24, storageKey: "escova-modelada-demo-deadline-v1", label: "Prévia do contador — prazo ilustrativo" },
  payment: "[INSERIR CONDIÇÕES DE PAGAMENTO]",
  guarantee: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, é só entrar em contato que devolvemos 100% do valor investido.",
  access: "[CONFIRMAR BÔNUS E ACESSO]",
  support: "[CONFIRMAR SUPORTE]",
  courseContent: "[CONFIRMAR CONTEÚDO DO CURSO]",
  termsUrl: "[INSERIR URL OFICIAL DOS TERMOS]",
  privacyUrl: "[INSERIR URL OFICIAL DA POLÍTICA DE PRIVACIDADE]",
  supportUrl: null as string | null,
  footer: {
    copyright: "© 2026 Márcio Cardozo. Todos os direitos reservados.",
    credit: "Desenvolvido por @guilherme.figueiredo",
    creditUrl: "https://www.instagram.com/guilherme.figueiredo/",
    disclaimer: "Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.",
  },
  seo: {
    title: "Escova Modelada Lucrativa | Curso com Márcio Cardozo",
    description: "Aprenda escova modelada e acabamento profissional com Márcio Cardozo, mesmo começando do zero. Desenvolva uma habilidade que pode valorizar seus atendimentos.",
  },
};

export type CoursePhoto = { src: string; alt: string; width: number; height: number };
// Add a licensed authentic photo of the hairstyle; describe texture and finish in alt.
export const heroPhoto: CoursePhoto | null = null;
// Authentic authorized portrait of Márcio, supplied by the producer.
export const instructorPhoto: CoursePhoto = { src: instructorPhotoAsset.url, alt: "Márcio Cardozo de camiseta preta, sorrindo de braços cruzados enquanto segura tesoura e pente no estúdio", width: 1200, height: 1600 };
// Example shape only: { src: importedPhotoUrl, alt: "Accurate result description", width: 1200, height: 1500 }.
// No generated or stock images presented as actual course results.
export const resultPhotos: CoursePhoto[] = [
  { src: photo1.url, alt: "Cabelo longo com mechas loiras e ondas definidas, visto de costas", width: 1080, height: 1340 },
  { src: photo2.url, alt: "Cabelo castanho longo com pontas modeladas e movimento", width: 920, height: 1268 },
  { src: photo3.url, alt: "Cabelo preto curto com acabamento liso e pontas curvadas", width: 1080, height: 1280 },
  { src: photo4.url, alt: "Montagem de ângulos de cabelo loiro com camadas modeladas", width: 1080, height: 1356 },
  { src: photo5.url, alt: "Cabelo loiro em camadas com volume e pontas voltadas para fora", width: 1080, height: 1348 },
  { src: photo6.url, alt: "Detalhe frontal de cabelo loiro com volume na raiz", width: 1080, height: 1338 },
  { src: photo7.url, alt: "Perfil de cabelo loiro em camadas com movimento nas pontas", width: 1080, height: 1332 },
  { src: photo8.url, alt: "Cabelo com mechas claras e camadas modeladas, visto de perfil", width: 1080, height: 1356 },
  { src: photo9.url, alt: "Cabelo com mechas loiras e ondas volumosas, visto de costas", width: 1080, height: 1342 },
];

export const faq = [
  { question: "Preciso ter experiência?", answer: "Não. O curso também se dirige a quem está começando do zero e a profissionais da beleza que desejam desenvolver ou aprimorar a escova modelada." },
  { question: "O curso é online?", answer: "Sim, Escova Modelada Lucrativa é um curso online, com Márcio Cardozo HairStylist." },
  { question: "Consigo aprender em sete dias?", answer: "A proposta do produtor é um caminho de aprendizado do básico à execução profissional em até 7 dias. A evolução depende da sua experiência, prática e aplicação; não há garantia de domínio nesse prazo." },
  { question: "Como recebo o acesso?", answer: "O curso é online. As orientações de entrega e o período de acesso serão informados nas condições oficiais de inscrição, antes da compra." },
  { question: "Quais são as formas de pagamento?", answer: "As formas de pagamento e as condições de parcelamento serão apresentadas no checkout oficial da Hotmart." },
  { question: "Existe garantia?", answer: offer.guarantee },
  { question: "Como solicito o reembolso?", answer: "Se não ficar satisfeito, entre em contato dentro dos 7 dias de garantia para solicitar a devolução de 100% do valor investido. O canal oficial de atendimento será informado antes da compra." },
];