# build stage
FROM node:lts-alpine as build

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app
RUN npm run build

# production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]