// All page copy, in block order (PAG - ANA PAULA.pdf, blocks 01–23).
// The PDF's eyebrows are folded into each heading or `lede` (decision: option a).
// A `lede` is an ordinary sentence set after (or leading into) its heading,
// never a small uppercase label above it.

// ---------- Offer facts: defined once, reused across blocks 02, 03, 18, 22 ----------

export const offer = {
  name: 'Caminhos da Inclusão',
  subtitle: 'Formação para Mediadores',
  org: 'Teia de Saberes',
  hours: 160,
  modules: 5,
  priceFrom: 'R$199,99',
  price: 'R$149,99',
  installments: '12x de R$15,50',
  seats: 60,
  guaranteeDays: 30,
} as const

export const facts = [
  { value: '160h', label: 'de formação', detail: 'Formação completa' },
  { value: '5 módulos', label: 'estruturados', detail: 'Conteúdo estruturado' },
  { value: 'Aulas online', label: '+ aplicativo', detail: 'Estude no seu ritmo' },
  { value: 'Encontros ao vivo', label: 'quinzenais', detail: 'Aprofundamento' },
  { value: 'Certificado', label: 'de conclusão', detail: 'De conclusão' },
] as const

export const trust = ['Inscrição segura', `${offer.guaranteeDays} dias de garantia`, 'Pagamento em ambiente seguro'] as const

// ---------- 01 Header ----------

export const nav = [
  { label: 'Sobre o curso', href: '#formacao' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
] as const

export const headerCta = 'Quero minha vaga'

// ---------- 02 Hero ----------

export const hero = {
  headline: ['Saiba como ', 'agir na prática', ' diante dos desafios reais da Educação Especial.'], // middle = emphasis
  deck: 'Prepare-se para atuar na inclusão escolar com mais segurança, conhecimento e direcionamento no Caminhos da Inclusão, uma formação para mediadores de 160 horas criada por quem vive a Educação Especial na prática.',
  cta: 'Quero me preparar para atuar na Educação Especial',
  secondary: 'Ver conteúdo',
  portraitCaption: { name: 'Ana Paula Jorge', role: 'Mestre e Doutoranda, professora da Rede Municipal' },
} as const

// ---------- 04 Dor ----------

export const pain = {
  heading: 'Conhecer a teoria é diferente de saber o que fazer quando a situação acontece diante de você.',
  lede: 'Se você quer trabalhar com inclusão, talvez já tenha sentido isso.',
  items: [
    { question: 'Como devo agir?', voice: 'Tenho conhecimento, mas ainda me sinto inseguro diante de determinadas situações.' },
    { question: 'Será que estou fazendo certo?', voice: 'Tenho medo de realizar uma mediação inadequada.' },
    { question: 'Como transformar teoria em prática?', voice: 'Estudei Educação Especial, mas sinto falta de orientações aplicáveis à rotina escolar.' },
    { question: 'Estou realmente preparado?', voice: 'Quero atuar na área, mas não quero chegar à escola sem saber como conduzir situações reais.' },
  ],
  closing: ['Você não precisa aprender tudo isso sozinho, ', 'depois que os desafios aparecerem.'],
} as const

// ---------- 05 Big Idea ----------

export const bigIdea = {
  lede: 'Existe uma diferença entre…',
  know: { title: 'Saber sobre inclusão.', text: 'A teoria oferece a base.' },
  act: { title: 'Saber como agir na inclusão.', text: 'A prática transforma conhecimento em decisões, mediação e suporte no cotidiano escolar.' },
  closing: 'É nessa ponte entre conhecimento e atuação que nasce o Caminhos da Inclusão.',
} as const

// ---------- 06 Transformação ----------

export const transformation = {
  heading: 'Da insegurança para uma atuação mais preparada.',
  text: 'Não se trata apenas de concluir mais um curso. Trata-se de construir uma base para estar mais preparado quando alguém depender da sua atuação.',
  before: ['Não sei como agir.', 'Conhecimento fragmentado.', 'Teoria sem aplicação.', 'Insegurança na mediação.', 'Dúvidas sobre o papel profissional.'],
  after: [
    'Entendo melhor como conduzir situações.',
    'Tenho uma formação estruturada.',
    'Consigo aproximar conhecimento e aplicação.',
    'Tenho mais direcionamento para atuar.',
    'Compreendo melhor minhas responsabilidades.',
  ],
} as const

// ---------- 07 Solução ----------

export const solution = {
  heading: offer.name,
  subheading: offer.subtitle,
  text: 'Uma jornada de 160 horas criada para profissionais que desejam compreender os fundamentos da Educação Especial e aproximar esse conhecimento das situações encontradas no cotidiano escolar.',
  method: ['Conhecer', 'Compreender', 'Aplicar', 'Atuar'],
} as const

// ---------- 08 Pilares ----------

export const pillars = {
  heading: 'Os 5 pilares da sua preparação.',
  lede: 'Uma jornada completa, do fundamento à atuação.',
  items: [
    { title: 'Fundamentos', text: 'Entenda os princípios e a legislação que orientam a Educação Especial e Inclusiva.' },
    { title: 'Compreensão', text: 'Conheça aspectos do desenvolvimento humano e diferentes deficiências.' },
    { title: 'Mediação', text: 'Desenvolva conhecimentos relacionados à comunicação, interação e mediação.' },
    { title: 'Adaptação', text: 'Entenda adaptações, estratégias, observação e registros.' },
    { title: 'Apoio', text: 'Prepare-se para aspectos práticos relacionados ao cotidiano e à vida diária.' },
  ],
  cta: 'Ver conteúdo completo da formação',
} as const

// ---------- 09 Benefícios ----------

export const benefits = {
  heading: 'Mais do que conteúdo: o que essa formação busca desenvolver em você.',
  items: [
    { title: 'Segurança', text: 'Mais clareza para lidar com situações da rotina escolar.' },
    { title: 'Compreensão', text: 'Entender necessidades e particularidades dos alunos.' },
    { title: 'Mediação', text: 'Conhecer estratégias relacionadas à interação e inclusão.' },
    { title: 'Prática', text: 'Aproximar conhecimento acadêmico da realidade.' },
    { title: 'Direcionamento', text: 'Compreender melhor o papel do profissional de apoio.' },
    { title: 'Preparação', text: 'Construir uma base mais sólida para atuação profissional.' },
  ],
} as const

// ---------- 10 Para quem é ----------

export const audience = {
  heading: 'Se você faz parte da Educação ou quer entrar nessa área, essa formação pode ser para você.',
  items: [
    'Profissional de apoio',
    'Cuidador escolar',
    'Auxiliar de classe',
    'Educador',
    'Estudante de licenciatura',
    'Profissional interessado em Educação Especial',
  ],
  highlight: 'Principalmente para quem acredita que inclusão exige mais do que boa intenção: exige preparação.',
} as const

// ---------- 11–12 Autoridade ----------

export const author = {
  heading: 'Ana Paula Jorge',
  subheading: 'Quem vai guiar você nessa jornada une experiência acadêmica e vivência prática na Educação Especial.',
  bio: 'Mestre e Doutoranda, professora da Rede Municipal e atuante na Coordenação Municipal de Educação Especial. Pesquisadora, palestrante e autora de obras na área, une a pesquisa acadêmica à vivência diária da inclusão nas escolas.',
  // UENF (mockup only) stays out until confirmed.
  credentials: [
    'Mestre e Doutoranda',
    'Professora da Rede Municipal',
    'Coordenação Municipal de Educação Especial',
    'Experiência no Ensino Superior',
    'Pesquisadora e palestrante',
    'Autora e organizadora de obras na área',
  ],
  portraitAlt: 'Ana Paula Jorge, professora e coordenadora em Educação Especial',
  // "We" is the formation speaking, so it is signed by the course, not put in Ana Paula's mouth.
  quote: {
    text: 'Não queremos entregar apenas teoria. Queremos ajudar você a estar mais preparado para a realidade da inclusão.',
    by: 'Caminhos da Inclusão',
  },
} as const

// ---------- Vídeo (logo após a primeira dobra) ----------

// Empty `src` keeps the slot as a placeholder; paste a YouTube/Vimeo embed URL to show the video.
export const video = {
  heading: 'Conheça a formação por dentro.',
  src: '',
  title: 'Vídeo de apresentação do Caminhos da Inclusão',
  soon: 'Vídeo em breve',
} as const

// ---------- 13 Depoimentos ----------

// Transcribed from what students sent (WhatsApp / Instagram), lightly corrected for typos.
export const testimonials = {
  heading: 'Conhecimento que começa na formação e chega à prática.',
  lede: 'Alunos do Caminhos da Inclusão contam como foi a formação.',
  items: [
    {
      quote:
        'O curso foi uma experiência muito enriquecedora. Aprendi muito sobre educação especial e compreendi melhor a importância da inclusão, do respeito às diferenças e das estratégias que contribuem para o desenvolvimento de cada criança. Hoje, sinto que estou preparado para ajudar crianças a se desenvolverem, respeitando suas necessidades e potencialidades. Muito obrigado, Ana Paula, por dedicar seu tempo para nos ensinar e inspirar.',
      name: 'Maycon Eliseu Couto',
      source: 'Aluno da formação · via WhatsApp',
    },
    {
      quote:
        'Estou fazendo o curso e falo: aproveitem, porque é muito bom, nada cansativo, super dinâmico. Não vou falar mais pra todos ficarem curiosos e fazerem a sua matrícula.',
      name: '@monique3173',
      source: 'Aluna da formação · via Instagram',
    },
  ],
}

// ---------- 14 Experiência de estudo ----------

export const study = {
  heading: 'Estude do seu jeito: uma formação completa que acompanha sua rotina.',
  items: [
    { title: 'Aulas gravadas', text: 'Assista de acordo com sua disponibilidade.' },
    { title: 'Aplicativo', text: 'Leve sua formação com você.' },
    { title: 'Encontros ao vivo', text: 'Encontros quinzenais para aprofundamento.' },
    { title: '160 horas', text: 'Uma formação completa e estruturada.' },
    { title: 'Certificado', text: 'Certificação conforme os requisitos da formação.' },
  ],
} as const

// ---------- 15 Conteúdo programático ----------

export const curriculum = {
  heading: 'Uma formação estruturada do fundamento à prática.',
  lede: 'Veja tudo o que você vai aprender.',
  modules: [
    { n: '01', title: 'Fundamentos e Legislação', hours: 30, text: 'História da Educação Especial e Inclusiva, marco legal e legislações apresentadas na formação.' },
    { n: '02', title: 'Desenvolvimento Humano e Deficiências', hours: 40, text: 'Desenvolvimento humano, deficiência intelectual, transtornos de aprendizagem, TEA, níveis de suporte e comportamento.' },
    { n: '03', title: 'Comunicação e Mediação', hours: 30, text: 'Libras, Braille, CAA, mediação de conflitos, socialização e atividades.' },
    { n: '04', title: 'Adaptação Curricular e Prática de Relatório', hours: 30, text: 'Adaptação de materiais, estratégias, vivências, observação e relatório.' },
    { n: '05', title: 'Técnicas de Apoio e Vida Diária', hours: 20, text: 'Higiene, alimentação, locomoção e demais aspectos apresentados no programa.' },
  ],
} as const

// ---------- 16 Portfólio ----------

export const portfolio = {
  heading: 'Construa também seu portfólio profissional.',
  text: 'Durante a formação, você receberá direcionamento relacionado à construção do seu portfólio profissional.',
  // Kept to the PDF's own wording: what the portfolio guidance includes isn't specified.
} as const

// ---------- 18 Oferta ----------

export const offerBlock = {
  heading: 'Sua inscrição no Caminhos da Inclusão inclui:',
  includes: [
    'Formação completa de 160 horas',
    '5 módulos',
    'Aulas gravadas',
    'Acesso pelo aplicativo',
    'Encontros ao vivo quinzenais',
    'Orientação relacionada ao portfólio',
    'Certificado de conclusão',
  ],
  priceLead: 'Hoje por',
  priceOr: 'ou',
  cta: 'Quero garantir minha vaga',
  trust: ['Compra segura', `${offer.guaranteeDays} dias de garantia`, 'Pagamento seguro'],
  seatsLabel: 'Turma limitada',
} as const

// ---------- 19 Garantia ----------

export const guarantee = {
  heading: `Você tem ${offer.guaranteeDays} dias para conhecer a formação.`,
  subheading: 'Sua decisão não precisa ser um salto no escuro.',
  text: 'Faça sua inscrição e conheça o conteúdo. Caso entenda que a formação não atende ao que procura, a garantia seguirá as condições definidas para a oferta.',
} as const

// ---------- 20 Objeções / 21 FAQ ----------

// Answers say only what the copy states. Questions it can't answer
// (access period, recordings, certification requirements, the app) are left out.
export type QA = { q: string; a: string }

// Two objections answered before the offer, where the decision forms;
// the rest after it, merged with the FAQ and de-duplicated (8 at most).
export const objections = {
  heading: 'Ainda está em dúvida?',
  items: [
    { q: 'Nunca trabalhei na área. Posso participar?', a: 'Sim. A formação começa pelos fundamentos da Educação Especial e foi pensada também para quem quer entrar na área e chegar à escola mais preparado.' },
    { q: 'Consigo conciliar com meu trabalho?', a: 'Sim. As aulas são gravadas e podem ser assistidas quando você puder, pelo computador ou pelo aplicativo. Só os encontros ao vivo, quinzenais, têm data marcada.' },
  ] as QA[],
}

export const faq = {
  heading: 'Perguntas frequentes',
  items: [
    { q: 'Já trabalho em escola. Essa formação também serve para mim?', a: 'Sim. Profissionais de apoio, cuidadores, auxiliares e educadores encontram aqui uma base estruturada para aproximar o que já sabem das situações do dia a dia.' },
    { q: 'Já tenho formação na área. Ainda faz sentido?', a: 'A proposta da formação é aproximar a teoria das situações reais do cotidiano escolar, com foco em mediação, adaptação e apoio. Para quem já tem a base teórica, esse é justamente o ponto de aprofundamento.' },
    { q: 'Como funcionam os encontros ao vivo?', a: 'São encontros quinzenais para aprofundamento dos temas da formação.' },
    { q: 'Vou receber certificado?', a: 'Sim. Ao concluir a formação conforme os requisitos definidos, você recebe o certificado de conclusão.' },
    { q: 'A formação aborda TEA?', a: 'Sim. O Módulo 02, Desenvolvimento Humano e Deficiências, aborda TEA e níveis de suporte.' },
    { q: 'Quais são as formas de pagamento?', a: `${offer.price} à vista ou em até ${offer.installments}, no cartão, Pix ou boleto.` },
    { q: 'Como funciona a garantia?', a: `Você tem ${offer.guaranteeDays} dias de garantia, nas condições definidas para a oferta.` },
  ] as QA[],
}

// ---------- 22 Fechamento ----------

export const closing = {
  heading: 'Quando chegar o momento de agir, você quer estar tentando descobrir o que fazer, |ou quer estar mais preparado?',
  text: [
    'A inclusão acontece todos os dias dentro das escolas.',
    'Cada situação pode exigir compreensão, responsabilidade, conhecimento e preparo.',
  ],
  emphasis: 'Você não precisa esperar estar diante do desafio para começar a se preparar.',
  invite: 'Comece agora sua jornada no Caminhos da Inclusão.',
  cta: 'Quero começar minha formação',
  guaranteeNote: `${offer.guaranteeDays} dias de garantia`,
} as const

// ---------- 23 Rodapé ----------

export const footer = {
  social: [{ label: 'Instagram', href: 'https://www.instagram.com/teia.de.saberes/' }],
  copyright: `© ${new Date().getFullYear()} Teia de Saberes. Todos os direitos reservados.`,
}
