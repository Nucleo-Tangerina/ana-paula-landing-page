# Caminhos da Inclusão — landing page

Landing de vendas da formação da Teia de Saberes com Ana Paula Jorge. React + Vite, só frontend, publicada como site estático na VPS.

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # site estático em dist/
```

## Deploy na VPS (Easypanel)

O `Dockerfile` gera o site e serve `dist/` com nginx na porta 80 (config em `nginx.conf`, com cache longo em `/assets`). No Easypanel: app com **Source** = este repositório no GitHub, **Build** = Dockerfile, variáveis na aba **Environment** e domínio apontando para a porta **80**.

| Variável | Para quê |
|---|---|
| `VITE_SITE_URL` | **Obrigatória.** Domínio público, sem barra no fim. Usada no Open Graph (imagem de compartilhamento no WhatsApp). |
| `VITE_CHECKOUT_URL` | Link de compra usado por todos os botões. Sem ela, usa o checkout Ticto padrão. |
| `VITE_META_PIXEL_ID` / `VITE_GTM_ID` | Meta Pixel e Google Tag Manager. Os scripts só carregam se a variável estiver preenchida. |

Depois de mudar uma variável, clique em **Deploy** de novo: elas entram no build.

Contexto: `PRODUCT.md` · design: `DESIGN.md` · plano: `PLAN.md` · direção visual: `.impeccable/surfaces/src-app-tsx.md`.
