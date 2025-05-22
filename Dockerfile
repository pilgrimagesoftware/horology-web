FROM node:22 as builder
LABEL maintainer="admin@pilgrimagesoftware.com"

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM nginx:1-alpine
LABEL maintainer="admin@pilgrimagesoftware.com"

COPY --from=builder /app/public /usr/share/nginx/html
