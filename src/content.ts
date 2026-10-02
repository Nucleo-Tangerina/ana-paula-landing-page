// All page copy, in block order (PAG - ANA PAULA.pdf, blocks 01–23).
// The PDF's eyebrows are folded into each heading or `lede` (decision: option a).
// A `lede` is an ordinary sentence set after (or leading into) its heading,
// never a small uppercase label above it.
//
// `pending` = not confirmed for publication; the string says what's missing.
// Dev shows pending items with a [CONFIRMAR] badge; production hides them,
// and a section with nothing live hides itself.

export type Pending = { pending?: string }

export const live = <T extends Pending>(items: readonly T[]): T[] =>
  import.meta.env.DEV ? [...items] : items.filter((i) => !i.pending)

export const isLive = (item: Pending) => import.meta.env.DEV || !item.pending

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
  bio: {
    text: 'Mestre e Doutoranda, professora da Rede Municipal e atuante na Coordenação Municipal de Educação Especial. Pesquisadora, palestrante e autora de obras na área, une a pesquisa acadêmica à vivência diária da inclusão nas escolas.',
    pending: 'Bio curta redigida a partir das credenciais; Ana Paula precisa aprovar.',
  } as { text: string } & Pending,
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
  quote: {
    text: 'Não queremos entregar apenas teoria. Queremos ajudar você a estar mais preparado para a realidade da inclusão.',
    by: 'Ana Paula Jorge',
    pending: 'Frase atribuída à Ana Paula: precisa da aprovação dela.',
  } as { text: string; by: string } & Pending,
}

// ---------- 13 Depoimentos ----------

export type Testimonial = { quote: string; name: string; role: string; photo?: string } & Pending

export const testimonials = {
  heading: 'Conhecimento que começa na formação e chega à prática.',
  lede: 'Experiências de quem já aprendeu com Ana Paula.',
  items: [
    { quote: 'Depoimento real de quem já atuava e tinha insegurança.', name: 'Nome', role: 'Profissão', pending: 'Placeholder: substituir por depoimento real com autorização.' },
    { quote: 'Depoimento real de quem queria entrar na área.', name: 'Nome', role: 'Profissão', pending: 'Placeholder: substituir por depoimento real com autorização.' },
    { quote: 'Depoimento real de quem tinha teoria, mas precisava de prática.', name: 'Nome', role: 'Profissão', pending: 'Placeholder: substituir por depoimento real com autorização.' },
  ] as Testimonial[],
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
  // Copy kept to the PDF's minimum; do not expand until Ana Paula confirms what is delivered.
} as const

// ---------- 17 Bônus ----------

export const bonuses = {
  heading: 'E para levar a prática ainda mais longe, você também recebe materiais complementares.',
  badge: 'Incluídos na sua inscrição',
  items: [
    { label: 'Bônus 01', title: 'Checklist do Profissional de Apoio', pending: 'Bônus sugerido: não existe na oferta. Criar e aprovar antes de publicar.' },
    { label: 'Bônus 02', title: 'Kit de Registros e Observações', pending: 'Bônus sugerido: não existe na oferta. Criar e aprovar antes de publicar.' },
    { label: 'Bônus 03', title: 'Guia Prático de Adaptações', pending: 'Bônus sugerido: não existe na oferta. Criar e aprovar antes de publicar.' },
  ] as ({ label: string; title: string } & Pending)[],
}

// ---------- 18 Oferta ----------

export const offerBlock = {
  heading: 'Sua inscrição no Caminhos da Inclusão inclui:',
  includes: [
    { text: 'Formação completa de 160 horas' },
    { text: '5 módulos' },
    { text: 'Aulas gravadas' },
    { text: 'Acesso pelo aplicativo' },
    { text: 'Encontros ao vivo quinzenais' },
    { text: 'Orientação relacionada ao portfólio' },
    { text: 'Certificado de conclusão' },
    { text: 'Bônus confirmados', pending: 'Só entra quando houver bônus aprovado (bloco 17).' },
  ] as ({ text: string } & Pending)[],
  priceLead: 'Hoje por',
  priceOr: 'ou',
  cta: 'Quero garantir minha vaga',
  trust: ['Compra segura', `${offer.guaranteeDays} dias de garantia`, 'Pagamento seguro'],
  seatsLabel: 'Turma limitada',
}

// ---------- 19 Garantia ----------

export const guarantee = {
  heading: `Você tem ${offer.guaranteeDays} dias para conhecer a formação.`,
  subheading: 'Sua decisão não precisa ser um salto no escuro.',
  text: 'Faça sua inscrição e conheça o conteúdo. Caso entenda que a formação não atende ao que procura, a garantia seguirá as condições definidas para a oferta.',
  terms: { text: '', pending: 'Inserir os termos exatos da garantia praticados pela Teia/HeroSpark.' } as { text: string } & Pending,
} as const

// ---------- 20 Objeções / 21 FAQ ----------

export type QA = { q: string; a: string } & Pending

const DRAFT = 'Resposta-rascunho: revisar antes de publicar.'
const TODO = 'Informação inexistente no material atual: confirmar com a Teia.'

export const objections = {
  heading: 'Ainda está em dúvida? Talvez uma dessas perguntas esteja passando pela sua cabeça.',
  items: [
    { q: 'Nunca trabalhei na área. Posso participar?', a: 'Sim. A formação começa pelos fundamentos da Educação Especial e foi pensada também para quem quer entrar na área e chegar à escola mais preparado.', pending: DRAFT },
    { q: 'Já trabalho em escola. Essa formação também serve para mim?', a: 'Sim. Profissionais de apoio, cuidadores, auxiliares e educadores encontram aqui uma base estruturada para aproximar o que já sabem das situações do dia a dia.', pending: DRAFT },
    { q: 'Consigo conciliar com meu trabalho?', a: 'As aulas são gravadas e podem ser assistidas de acordo com a sua disponibilidade, pelo computador ou pelo aplicativo. Os encontros ao vivo são quinzenais.', pending: DRAFT },
    { q: 'Já tenho formação na área. Ainda faz sentido?', a: 'A proposta da formação é aproximar a teoria das situações reais do cotidiano escolar, com foco em mediação, adaptação e apoio. Para quem já tem a base teórica, esse é justamente o ponto de aprofundamento.', pending: DRAFT },
    { q: 'Vou receber certificado?', a: 'Sim. A formação oferece certificado de conclusão, conforme os requisitos da formação.', pending: DRAFT },
    { q: 'Preciso assistir às aulas em horários específicos?', a: 'Não para as aulas gravadas, que ficam disponíveis para você assistir quando puder. Apenas os encontros ao vivo acontecem em datas definidas.', pending: DRAFT },
  ] as QA[],
}

export const faq = {
  heading: 'Perguntas frequentes',
  items: [
    { q: 'Quem pode participar?', a: 'Profissionais de apoio, cuidadores escolares, auxiliares de classe, educadores, estudantes de licenciatura e demais profissionais interessados em Educação Especial.', pending: DRAFT },
    { q: 'Qual é a carga horária?', a: '160 horas, distribuídas em 5 módulos.', pending: DRAFT },
    { q: 'Por quanto tempo terei acesso?', a: '', pending: TODO },
    { q: 'Como funcionam as aulas gravadas?', a: 'As aulas ficam disponíveis na plataforma e no aplicativo para você assistir de acordo com a sua disponibilidade.', pending: DRAFT },
    { q: 'Como funcionam os encontros ao vivo?', a: 'São encontros quinzenais para aprofundamento dos temas da formação.', pending: DRAFT },
    { q: 'Os encontros ficam gravados?', a: '', pending: TODO },
    { q: 'Como funciona o certificado?', a: 'Ao concluir a formação conforme os requisitos definidos, você recebe o certificado de conclusão.', pending: DRAFT },
    { q: 'Quais são os requisitos para certificação?', a: '', pending: TODO },
    { q: 'Como funciona o aplicativo?', a: '', pending: TODO },
    { q: 'Quais são as formas de pagamento?', a: `${offer.price} à vista ou em ${offer.installments}. Demais formas: confirmar.`, pending: TODO },
    { q: 'Como funciona a garantia?', a: `Você tem ${offer.guaranteeDays} dias de garantia, nas condições definidas para a oferta.`, pending: DRAFT },
    { q: 'A formação aborda TEA?', a: 'Sim. O Módulo 02, Desenvolvimento Humano e Deficiências, aborda TEA e níveis de suporte.', pending: DRAFT },
  ] as QA[],
}

// ---------- 22 Fechamento ----------

export const closing = {
  heading: 'Quando chegar o momento de agir, você quer estar tentando descobrir o que fazer, ou quer estar mais preparado?',
  text: [
    'A inclusão acontece todos os dias dentro das escolas.',
    'Cada situação pode exigir compreensão, responsabilidade, conhecimento e preparo.',
  ],
  emphasis: 'Você não precisa esperar estar diante do desafio para começar a se preparar.',
  invite: 'Comece agora sua jornada no Caminhos da Inclusão.',
  summary: ['160h', '5 módulos', 'Aulas online', 'Encontros ao vivo', 'Certificado'],
  cta: 'Quero começar minha formação',
  guaranteeNote: `${offer.guaranteeDays} dias de garantia`,
} as const

// ---------- 23 Rodapé ----------

export const footer = {
  legal: [
    { label: 'Termos de Uso', href: '#', pending: 'Link dos Termos de Uso.' },
    { label: 'Política de Privacidade', href: '#', pending: 'Link da Política de Privacidade.' },
    { label: 'Contato', href: '#', pending: 'Contato oficial da Teia.' },
  ] as ({ label: string; href: string } & Pending)[],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/teia.de.saberes/' },
    { label: 'YouTube', href: '#', pending: 'URL do canal no YouTube.' },
  ] as ({ label: string; href: string } & Pending)[],
  company: { text: '', pending: 'Razão social, CNPJ e endereço da Teia de Saberes.' } as { text: string } & Pending,
  copyright: `© ${new Date().getFullYear()} Teia de Saberes. Todos os direitos reservados.`,
}
