# Publicar na Wix

A página inteira vira **um único arquivo JavaScript**. Ele cria o elemento `<caminhos-landing>`, que a Wix chama de *Custom Element*. As fotos, a fonte e o CSS vão dentro do arquivo, então não é preciso subir mais nada.

## Antes de começar

- O site precisa de **plano Premium**, **domínio próprio conectado** e **sem anúncios da Wix**. Essa é uma exigência da Wix para usar Custom Elements.
- Pode ser feito tanto no **Wix Editor** quanto no **Wix Studio**.

## 1. Gerar o arquivo

```bash
npm install
npm run build:wix
```

O resultado é `dist-wix/caminhos-landing.js`, com cerca de 490 KB. Use só esse arquivo e ignore o `.css` que aparece ao lado dele.

## 2. Colocar o arquivo dentro da Wix

1. Ative o modo de código:
   - **Wix Editor:** menu superior **Dev Mode → Turn on Dev Mode**.
   - **Wix Studio:** o painel de código **{ }** já vem disponível.
2. No painel de arquivos, em **Public**, crie a pasta `custom-elements`.
3. Dentro dela, crie o arquivo **`caminhos-landing.js`**.
4. Cole nele todo o conteúdo de `dist-wix/caminhos-landing.js` e salve.

## 3. Adicionar o elemento na página

1. Use uma página em branco.
2. **Esconda ou apague o cabeçalho e o rodapé da Wix**, porque a landing já tem menu e rodapé próprios.
3. **Adicionar elementos → Embed** (no Studio: **Embed & Social**) **→ Custom Element**.
4. Clique no elemento e em **Choose Source → Velo file**. Escolha `caminhos-landing.js`.
5. Em **Tag Name**, digite exatamente: `caminhos-landing`
6. Estique o elemento para **100% da largura**, com margens zero, e encoste-o no topo da página.

## 4. Link de compra

Quando tiver o link do checkout:

1. Selecione o elemento e clique em **Set Attributes**.
2. Adicione o atributo `checkout-url` com o valor igual ao link completo, por exemplo `https://pay.herospark.com/...`.

Todos os botões "Quero minha vaga", "Quero garantir minha vaga" e "Quero começar minha formação" passam a usar esse link, sem precisar gerar o arquivo de novo.

Enquanto o atributo não existir, os botões rolam até o bloco de preço.

## 5. SEO e compartilhamento

Em **Configurações da página → SEO**:

| Campo | Valor |
|---|---|
| Título | `Caminhos da Inclusão: Formação para Mediadores \| Teia de Saberes` |
| Descrição | `Formação de 160 horas para atuar na inclusão escolar com mais segurança. Com Ana Paula Jorge. Aulas online, encontros ao vivo e certificado.` |
| Imagem de compartilhamento | suba `public/og.jpg` (1200×630). É a imagem que aparece no WhatsApp e no Instagram. |

Em **Configurações do site → Idioma**, escolha **Português (Brasil)**.

## 6. Pixel, Google Analytics e cookies

- Use **Marketing & SEO → Marketing Integrations** para ligar o Meta Pixel e o GA4.
- Com essas integrações ligadas, a página envia sozinha os eventos `InitiateCheckout`, no clique de qualquer botão de compra, e `ViewContent`, quando o preço aparece na tela.
- Se ligar o Pixel, ative também o **banner de cookies** da Wix (Configurações → Privacidade e Cookies), por causa da LGPD.

## 7. Conferir

- **Teste no site publicado**, não na pré-visualização do editor. No editor, a Wix mostra Custom Elements dentro de um quadro, então o menu fixo, as âncoras e o fio animado só se comportam de verdade no site publicado.
- Confira no celular e no computador:
  - os links do menu levam às seções;
  - o menu acompanha a rolagem;
  - os botões abrem o checkout.
- **Se o menu não acompanhar a rolagem**, algum contêiner da Wix está cortando o elemento. Coloque o elemento direto na página, sem seção nem faixa em volta.

## Atualizar a página depois

Edite o código e rode `npm run build:wix` de novo. Depois cole o conteúdo novo em `public/custom-elements/caminhos-landing.js` e publique.

O texto da página fica todo em `src/content.ts`; o preço, as vagas e as horas estão no objeto `offer`.

## Alternativa: hospedar o arquivo fora da Wix

Se colar o arquivo no editor da Wix ficar pesado, suba `caminhos-landing.js` em qualquer hospedagem com **HTTPS** (Netlify, Vercel, Cloudflare Pages). Depois, no passo 3, escolha **Choose Source → Server URL** e use a URL do arquivo. O resto continua igual.
