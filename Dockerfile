FROM node:14-buster-slim as builder
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install --assume-yes --no-install-recommends \
  build-essential
RUN rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
RUN npm install --global gatsby-cli@2.12.36
COPY . ./
RUN gatsby build

FROM nginx:stable-alpine
COPY --from=builder /app/public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
