# Build the static site, then serve dist/ with nginx (port 80).
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Vite bakes these into the HTML/JS, so they must exist at build time.
ARG VITE_SITE_URL
ARG VITE_CHECKOUT_URL
ARG VITE_META_PIXEL_ID
ARG VITE_GTM_ID
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
