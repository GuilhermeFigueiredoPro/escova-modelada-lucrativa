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
    videoUrl: "https://youtu.be/IMUEvQPvA4U?is=0XD9APx-mP9uerx3" as string | null,
    youtubeVideoId: "IMUEvQPvA4U",
    revealAfterSeconds: 25,
    subtitle: "Aprenda um acabamento profissional com Márcio Cardozo, mesmo começando do zero.",
  },
  checkoutUrl: "https://pay.hotmart.com/N105599202D",
  price: "R$ 37,90",
  priceNote: "Condições de pagamento e parcelamento apresentadas no checkout oficial.",
  installments: { count: 9, value: "R$ 4,98" },
  countdown: { durationHours: 24, storageKey: "escova-modelada-demo-deadline-v1", label: "Prévia do contador — prazo ilustrativo" },
  payment: "[INSERIR CONDIÇÕES DE PAGAMENTO]",
  guarantee: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, é só entrar em contato que devolvemos 100% do valor investido.",
  access: "[CONFIRMAR BÔNUS E ACESSO]",
  support: "[CONFIRMAR SUPORTE]",
  courseContent: "\n",
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
export const instructorPhoto: CoursePhoto = { src: "/assets/marcio-cardozo.webp", alt: "Márcio Cardozo de camiseta preta, sorrindo de braços cruzados enquanto segura tesoura e pente no estúdio", width: 1200, height: 1600 };
// Example shape only: { src: importedPhotoUrl, alt: "Accurate result description", width: 1200, height: 1500 }.
// No generated or stock images presented as actual course results.
export const resultPhotos: CoursePhoto[] = [
  { src: "/assets/escova-resultado-1.webp", alt: "Cabelo longo com mechas loiras e ondas definidas, visto de costas", width: 1080, height: 1340 },
  { src: "/assets/escova-resultado-2.webp", alt: "Cabelo castanho longo com pontas modeladas e movimento", width: 920, height: 1268 },
  { src: "/assets/escova-resultado-3.webp", alt: "Cabelo preto curto com acabamento liso e pontas curvadas", width: 1080, height: 1280 },
  { src: "/assets/escova-resultado-4.webp", alt: "Montagem de ângulos de cabelo loiro com camadas modeladas", width: 1080, height: 1356 },
  { src: "/assets/escova-resultado-5.webp", alt: "Cabelo loiro em camadas com volume e pontas voltadas para fora", width: 1080, height: 1348 },
  { src: "/assets/escova-resultado-6.webp", alt: "Detalhe frontal de cabelo loiro com volume na raiz", width: 1080, height: 1338 },
  { src: "/assets/escova-resultado-7.webp", alt: "Perfil de cabelo loiro em camadas com movimento nas pontas", width: 1080, height: 1332 },
  { src: "/assets/escova-resultado-8.webp", alt: "Cabelo com mechas claras e camadas modeladas, visto de perfil", width: 1080, height: 1356 },
  { src: "/assets/escova-resultado-9.webp", alt: "Cabelo com mechas loiras e ondas volumosas, visto de costas", width: 1080, height: 1342 },
];

export const faq = [
  { question: "Preciso ter experiência?", answer: "Não. O curso também se dirige a quem está começando do zero e a profissionais da beleza que desejam desenvolver ou aprimorar a escova modelada." },
  { question: "O curso é online?", answer: "Sim, Escova Modelada Lucrativa é um curso online, com Márcio Cardozo HairStylist." },
  { question: "Consigo aprender em sete dias?", answer: "A proposta do produtor é um caminho de aprendizado do básico à execução profissional em até 7 dias. A evolução depende da sua experiência, prática e aplicação; não há garantia de domínio nesse prazo." },
  { question: "Como recebo o acesso?", answer: "Assim que o pagamento for confirmado, você recebe o acesso por e-mail. O curso fica dentro da plataforma da Hotmart, onde você entra com o seu próprio login." },
  { question: "Quais são as formas de pagamento?", answer: "Você pode pagar à vista ou parcelado, em até 9x de R$ 4,98, direto no checkout oficial e seguro da Hotmart." },
  { question: "Existe garantia?", answer: offer.guarantee },
  { question: "Como solicito o reembolso?", answer: "Se não ficar satisfeito, entre em contato dentro dos 7 dias de garantia para solicitar a devolução de 100% do valor investido. O canal oficial de atendimento será informado antes da compra." },
];