# Plano de implementação: Landing "Caminhos da Inclusão"

Fonte de verdade do produto: `PRODUCT.md`. Copy: `PAG - ANA PAULA.pdf` (23 blocos). Mockup: direção geral, não especificação.
Escopo: apenas frontend, React + Vite, build estático.

Princípio de construção: o mínimo de dependências. Nada de biblioteca de UI, carrossel ou accordion. Usamos `<details>`, CSS scroll-snap e CSS puro com tokens.
Dependências previstas: `react`, `react-dom`, `vite`, `typescript`, `lucide-react` (ícones). Nada além disso sem motivo nomeado.

---

## Fase 0: Direção visual (antes de escrever código)

1. Rodar o fluxo new-work do impeccable para esta página, no modo **Persuade**:
   - Ponto de partida: marca Teia incompleta (paleta do diarioteia + mockup como direção). Expandir a marca, não substituir.
   - Rodar `concept-seed --scope direction --mode persuade` e escolher a direção na página de decisão.
   - O caminho é **code-led**, porque não há geração de imagem nesta sessão.
2. Gravar o **Direction contract** (THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM, FINISH) no surface brief da página.
3. Decidir tipografia (2 famílias no máximo, self-hosted em `/public/fonts`) e estratégia de cor. Esses tokens viram a base da Fase 1.

Entregável: o direction contract aprovado por você.

> ✅ **Concluída.** Direção escolhida: **Prospecto Institucional** (`civic-bureau-prospectus-late-modern`), seed `925b38e5`, caminho code-led. O direction contract está em `.impeccable/surfaces/src-app-tsx.md`. As referências de qualidade estão em `.impeccable/ref/`.

## Fase 1: Scaffold

1. `npm create vite@latest . -- --template react-ts`. Limpar o boilerplate.
2. Estrutura:
   ```
   src/
     main.tsx
     App.tsx              # monta as seções na ordem dos blocos
     config.ts            # CHECKOUT_URL, IDs de tracking (lidos de import.meta.env)
     content.ts           # TODA a copy + flags de confirmação
     styles/
       tokens.css         # cores, tipo, espaçamento, raios, sombras
       base.css           # reset, tipografia, utilitários mínimos
     components/          # Button, Section, Eyebrow, Placeholder, Icon
     sections/            # um arquivo por bloco (ou por par de blocos)
   public/
     fonts/  img/  og.jpg  favicon
   ```
3. `.env.example` com `VITE_CHECKOUT_URL`, `VITE_META_PIXEL_ID`, `VITE_GTM_ID`.
4. `.gitignore` com node_modules, dist, .env.

> ✅ **Fase 1 concluída.** Fonte Lexend Variable (pesos 400/500), tokens em `src/styles/tokens.css`, contraste AA verificado.

## Fase 2: Camada de conteúdo

1. `content.ts` transcreve os 23 blocos do PDF literalmente (acentuação revisada).
2. Cada item não confirmado leva `confirmed: false`:
   - bônus (bloco 17): **ocultos** até `confirmed: true`;
   - citação da Ana Paula (bloco 12): renderiza só depois da aprovação, ou sem atribuição direta;
   - portfólio (bloco 16): texto mínimo do copy, sem expandir a promessa;
   - FAQ e objeções (blocos 20 e 21): eu escrevo respostas-rascunho conservadoras com base no copy;
   - garantia (bloco 19): texto genérico do copy até os termos da Ticto chegarem;
   - credencial UENF: fora até ser confirmada.
3. Em modo dev, um selo visual "[CONFIRMAR]" aparece nos itens não confirmados. Em produção, eles somem ou ficam ocultos.
4. Preço, parcelamento, vagas e carga horária ficam definidos uma única vez e são reutilizados nos blocos 02, 03, 18 e 22.

> ✅ **Fase 2 concluída.** `src/content.ts` reúne os 23 blocos. Eyebrows foram integrados aos títulos e ledes (opção a). Itens marcados `pending` aparecem só em dev.

## Fase 3: Primitivos

| Componente | Notas |
|---|---|
| `Button` | variantes primária e secundária; sempre `<a href={CHECKOUT_URL}>` com `track('cta', id)` |
| `Section` | `id` para as âncoras do menu, ritmo vertical consistente |
| `Eyebrow` | rótulo pequeno acima dos títulos |
| `Placeholder` | caixa com proporção fixa + legenda "Foto da Ana Paula: substituir"; troca para `<img>` quando o asset existir |
| `Icon` | wrapper fino do lucide-react |

Assets faltando (logo, fotos, prints, depoimentos) usam `Placeholder` com a proporção final, para que o layout não mude quando os arquivos reais entrarem.

## Fase 4: Seções (em 4 lotes, um commit por lote)

**Lote A: topo e dor**

- 01 Header: fixo e discreto. Links âncora: Sobre o curso, Conteúdo, Para quem é, Depoimentos, FAQ. CTA "Quero minha vaga". No mobile, logo + CTA + menu hambúrguer (`<dialog>` ou painel com `aria-expanded`).
- 02 Hero: 50/50 com a copy à esquerda e a foto + 3 mini-cards à direita. Diferenciais, CTA principal e selos de confiança.
- 03 Barra de credibilidade: 5 itens. No mobile vira grid 2×3 (sem carrossel, que é mais simples e mais acessível).
- 04 Dor: foto + 4 cards de pergunta + fechamento.
- 05 Big Idea: fundo azul-marinho, "Saber sobre" ≠ "Saber como agir". É o bloco mais marcante da página.

**Lote B: transformação e solução**

- 06 Antes → Depois: dois cards. Não está no mockup, mas está no copy.
- 07 Solução: mockup notebook + celular (placeholder) e o método CONHECER → COMPREENDER → APLICAR → ATUAR.
- 08 Os 5 pilares: 5 cards + botão secundário que rola até o bloco 15.
- 09 Benefícios: 6 cards.
- 10 Para quem é: 6 públicos + destaque.

**Lote C: autoridade e prova**

- 11 + 12 Ana Paula: foto, bio curta, 6 credenciais em cards e a citação (sob flag).
- 13 Depoimentos: 3 cards em trilho com scroll-snap e botões anterior/próximo. São placeholders claramente marcados, nunca nomes inventados apresentados como reais.
- 14 Experiência de estudo: mockup de celular + 5 cards.
- 15 Conteúdo programático: 5 `<details>` (fechados), com título, horas e ementa.
- 16 Portfólio: texto + visual de pasta (placeholder).

**Lote D: oferta e fechamento**

- 17 Bônus: oculto por flag.
- 18 Oferta: fundo azul-marinho, lista do que inclui + card branco de preço com "De R$199,99 por R$149,99 / 12x R$15,50", selo "Apenas 60 vagas" e CTA.
- 19 Garantia: seção própria com escudo.
- 20 Objeções: accordion com `<details>`.
- 21 FAQ: accordion com `<details>` e JSON-LD `FAQPage` só para as respostas confirmadas.
- 22 Fechamento emocional: foto, resumo, preço e CTA final.
- 23 Rodapé: azul-marinho, com logo, links legais, redes sociais e copyright. Dados jurídicos ficam como placeholder.

## Fase 5: Interações e movimento

- Âncoras com `scroll-behavior: smooth` + `scroll-margin-top` para compensar o header fixo.
- O header ganha sombra e fundo ao rolar (um `IntersectionObserver` num sentinel).
- CTA flutuante no mobile, que aparece depois do hero e some quando a oferta está visível (opcional, a confirmar na Fase 0).
- Reveal de entrada orquestrado uma única vez, só com CSS e IO, com conteúdo visível por padrão e desligado em `prefers-reduced-motion`.
- A interação-assinatura é definida no direction contract (por exemplo, a "ponte" do bloco 05 ou o método do bloco 07).

## Fase 6: Tracking e SEO

- `index.html`: `lang="pt-BR"`, title, meta description, Open Graph e Twitter card (`og.jpg` 1200×630), favicon e theme-color.
- `src/track.ts` com um único ponto de entrada: `track(event, data)` → `fbq` + `dataLayer.push`. Os scripts só são injetados se os IDs existirem no env.
- Eventos: `InitiateCheckout` em todo CTA (com o id do bloco), `ViewContent` ao ver a oferta.
- Hook de consentimento (LGPD): deixar um ponto para plugar o banner. Sem banner agora. Fica registrado como pendência.

## Fase 7: Responsivo, acessibilidade e performance

- Larguras de teste: 360, 390, 768, 1024, 1280, 1440. Mobile-first.
- Contraste AA em todas as combinações de token (magenta sobre branco nos textos pequenos precisa de checagem).
- Teclado: menu, accordions e carrossel. Foco sempre visível.
- Imagens em AVIF/WebP com `width`/`height`, `loading="lazy"` abaixo da dobra e a foto do hero com `fetchpriority="high"`.
- Fontes com `font-display: swap` e preload da principal.
- Meta: Lighthouse mobile ≥ 90 em Performance, Accessibility, Best Practices e SEO.

> ✅ **Fases 3–7 concluídas.** Primitivos em `src/components/`, os 23 blocos em `src/sections/` (Journey, Proof, Close), fio-assinatura em canvas (`Thread.tsx`), reveal único (`useReveal.ts`), tracking via `src/track.ts` (GTM + Meta Pixel, só carrega com ID no `.env`), SEO/OG/JSON-LD em `index.html`. Testado em 1440 e 390px sem scroll horizontal; detector impeccable limpo.
> Notas: carrossel de depoimentos em scroll-snap (setas só se houver mais de 3); links do menu para seções ocultas somem em produção; `canonical` removido até existir domínio (`VITE_SITE_URL`).

## Fase 8: Revisão e finalização (impeccable)

1. Rodar `impeccable detect --json src` e corrigir o que for mecânico.
2. Capturar `desktop.png` (1440) e `mobile.png` (390) em `.impeccable/review/`.
3. Fazer a revisão final contra o direction contract (finish reviewer), em no máximo 2 rodadas de correção.
4. Gerar o `DESIGN.md` a partir do build (documenter).

> ✅ **Fase 8 concluída.** A revisão final terminou com **ship**, depois de 6 rodadas de correção:
> - o fio da teia virou uma faixa de seda que afina até virar o fio da página e se transforma na ponte da Big Idea;
> - o magenta ficou só na ação;
> - o selo de garantia foi gravado em SVG;
> - o ritmo entre as seções foi revisto.
>
> O `DESIGN.md` foi gerado a partir do build. Ficou um detalhe cosmético conhecido: uma marquinha de ~10px numa dobra do fio no desktop.

## Fase 9: Checklist antes de publicar (conteúdo, com você)

- [ ] Logo Teia (SVG, versões colorida e branca)
- [ ] Fotos da Ana Paula: hero, autoridade e, se houver, fechamento
- [ ] Fotos de inclusão/escola (blocos 04 e 22): próprias ou de banco com licença
- [ ] Prints da plataforma e do app Ticto (blocos 07 e 14)
- [ ] 3 depoimentos reais (texto, nome, profissão, foto, autorização)
- [x] Link de checkout Ticto (`src/config.ts`)
- [ ] IDs do Meta Pixel e do GTM/GA4
- [ ] Ana Paula aprovar a citação (bloco 12) e a bio
- [ ] Confirmar o escopo do portfólio (bloco 16)
- [ ] Decidir sobre os bônus: criar e aprovar, ou manter ocultos
- [ ] Revisar as respostas do FAQ e das objeções
- [ ] Termos exatos da garantia na Ticto
- [ ] Preço, parcelamento e vagas ainda vigentes
- [ ] Termos de Uso, Política de Privacidade, contato, CNPJ/razão social
- [ ] Banner de cookies/LGPD, se usar pixel
- [x] Hospedagem: VPS própria
- [ ] Domínio

---

**Ordem de execução:** Fase 0 → 1 → 2 → 3 → lotes A–D → 5 → 6 → 7 → 8. A Fase 9 corre em paralelo, do seu lado.
