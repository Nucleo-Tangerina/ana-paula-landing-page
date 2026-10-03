# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (escolha do usuário). Apenas frontend. Publicação: **Wix**, num site dedicado com plano premium e domínio próprio. A página inteira é entregue como um único Custom Element (`<caminhos-landing>`), em `npm run build:wix`. O passo a passo está em `WIX.md`.

## Users

Pessoas que trabalham ou querem trabalhar com inclusão escolar no Brasil: profissionais de apoio, cuidadores escolares, auxiliares de classe, educadores, estudantes de licenciatura e outros profissionais interessados em Educação Especial. Elas chegam pelo celular, muitas vezes vindas do Instagram ou do WhatsApp, e se perguntam se conseguem agir bem quando uma situação real acontece na escola. Algumas já atuam e se sentem inseguras, outras querem entrar na área, e outras já têm a teoria mas sentem falta de prática.

## Product Purpose

Página de vendas de **Caminhos da Inclusão: Formação para Mediadores**, um curso online de 160 horas da **Teia de Saberes**, criado e conduzido pela professora **Ana Paula Jorge**. A página precisa levar a pessoa visitante a se inscrever. Sucesso é o clique no checkout, que depois vira inscrição.

## Positioning

A ideia central da campanha: existe uma diferença entre *saber sobre inclusão* (teoria) e *saber como agir na inclusão* (prática). O curso se apresenta como a ponte entre as duas, com o método CONHECER → COMPREENDER → APLICAR → ATUAR. Ele é conduzido por alguém que vive a Educação Especial na rede pública, e não só a estuda.

## Operating Context

- O curso é vendido e entregue pela HeroSpark (checkout e área de membros), com aplicativo próprio.
- Formato: aulas gravadas, encontros ao vivo quinzenais, acesso pelo aplicativo e certificado de conclusão.
- Estrutura: 5 módulos.
  - 01 Fundamentos e Legislação (30h)
  - 02 Desenvolvimento Humano e Deficiências (40h)
  - 03 Comunicação e Mediação (30h)
  - 04 Adaptação Curricular e Prática de Relatório (30h)
  - 05 Técnicas de Apoio e Vida Diária (20h)
- Oferta atual: de R$199,99 por R$149,99, ou 12x de R$15,50. Apenas 60 vagas. Garantia de 30 dias.
- Há direcionamento para a construção de um portfólio profissional durante a formação (o escopo exato ainda será confirmado).

## Capabilities and Constraints

- Apenas frontend: não há backend, formulários ou pagamento na página. Todos os CTAs apontam para um único link de checkout, definido no atributo `checkout-url` do elemento na Wix. Ainda não há link; enquanto ele estiver vazio, os botões rolam até a oferta.
- A copy de referência está em `PAG - ANA PAULA.pdf`, com 23 blocos na ordem final.
- O material além das fotos não vai existir (decisão de 03/10/2026). A página foi adaptada a isso:
  - Saíram os depoimentos, os bônus (que eram só sugestões), os links legais, o CNPJ e os mockups da plataforma.
  - A citação "Não queremos entregar apenas teoria…" é assinada pelo curso, não pela Ana Paula.
  - O FAQ e as objeções mostram apenas respostas que o próprio copy sustenta. As perguntas sem resposta foram retiradas: tempo de acesso, gravação dos encontros, requisitos do certificado e funcionamento do aplicativo.
  - O portfólio fica restrito à frase do copy.
  - A garantia mantém o texto genérico do copy.
- Tracking: na Wix, Pixel e GA entram pelas integrações de marketing da própria Wix. O elemento dispara `InitiateCheckout` e `ViewContent` quando elas existem. SEO e Open Graph ficam nas configurações de SEO da página na Wix.
- Compliance: a página fala de preparação e desenvolvimento, nunca de competência ou emprego garantidos.

## Brand Commitments

- Marca da Teia de Saberes. A paleta usada no app irmão (diarioteia-front) é azul royal `#0B3F9C`, magenta `#EC008C`, verde-limão `#7AC143`, roxo `#92278F`, laranja `#F58220` e ciano `#27AAE1`. Arquivos de logo ainda não estão neste repositório.
- O usuário forneceu um mockup gerado por IA (`Imagem do ChatGPT 29 de set. de 2026, 17_28_24.png`) como **direção geral**, não como especificação. Ele mostra um fundo claro e limpo, azul-marinho e magenta como cores principais e blocos de destaque em azul-marinho (Big Idea, Oferta, Rodapé). O próprio copy pede: "evitar excesso de selos, banners e elementos coloridos".
- Voz: português do Brasil, acolhedora, segura, sem exagero; fala diretamente com "você".

## Evidence on Hand

- Copy: `PAG - ANA PAULA.pdf`.
- Credenciais da Ana Paula (segundo a apresentação existente): Mestre e Doutoranda; Professora da Rede Municipal; atua na Coordenação Municipal de Educação Especial; experiência no Ensino Superior; pesquisadora e palestrante; autora/organizadora de obras na área. O detalhe "Pedagoga… Cognição e Linguagem pela UENF" aparece só no mockup e **ainda precisa ser confirmado**.
- **Fotos:** dois retratos reais da Ana Paula.
  - Originais em `assets-src/`.
  - Versões otimizadas: a de blazer magenta em `src/assets/ana-hero.webp`, no hero; o retrato com fundo de tijolos em `src/assets/ana-autora.webp`, no bloco de autoridade.
  - `public/og.jpg` é um recorte da foto do blazer.
- **Não há e não haverá:** logo (a marca aparece como texto "Teia de Saberes"), prints da plataforma ou do app, depoimentos, textos legais e CNPJ. Nada disso pode ser inventado.

## Product Principles

1. Prática acima da teoria: cada seção conecta conhecimento ao que fazer na escola.
2. Honestidade antes da urgência: nada de prova, bônus ou promessa inventados; a escassez se limita às 60 vagas confirmadas.
3. Autoridade com calor humano: a vivência real da Ana Paula na rede pública é a prova principal.
4. Leve no celular: a maioria das visitas vem de redes sociais pelo celular, então a página precisa carregar rápido e ser fácil de tocar.

## Accessibility & Inclusion

O público é de Educação Especial, então a acessibilidade da página faz parte da credibilidade: WCAG 2.1 AA, HTML semântico, navegação completa por teclado nos accordions, no carrossel e no menu, `prefers-reduced-motion` respeitado e texto alternativo descritivo em todas as fotos.
