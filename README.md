# Caminhos da Inclusão — landing page

Landing de vendas da formação da Teia de Saberes com Ana Paula Jorge. React + Vite, só frontend, publicada no Netlify.

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # site estático em dist/
```

## Netlify

O `netlify.toml` já configura tudo: o comando de build é `npm run build` e a pasta publicada é `dist`. Basta conectar o repositório no Netlify, ou arrastar a pasta `dist/` no painel.

Variáveis de ambiente opcionais (Site configuration → Environment variables):

| Variável | Para quê |
|---|---|
| `VITE_CHECKOUT_URL` | Link de compra usado por todos os botões. Sem ela, os botões rolam até o preço. |
| `VITE_META_PIXEL_ID` / `VITE_GTM_ID` | Meta Pixel e Google Tag Manager. Os scripts só carregam se a variável estiver preenchida. |
| `VITE_SITE_URL` | Domínio próprio, sem barra no fim. Sem ela, vale a URL do Netlify. É usada na imagem de compartilhamento do WhatsApp. |

Depois de mudar uma variável, faça um novo deploy (Deploys → Trigger deploy).

Contexto: `PRODUCT.md` · design: `DESIGN.md` · plano: `PLAN.md` · direção visual: `.impeccable/surfaces/src-app-tsx.md`.
