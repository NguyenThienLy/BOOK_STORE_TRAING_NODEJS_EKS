### STAGE 1: Build ###
FROM node:12.7-alpine AS build

COPY ./src /usr/src/book_store_frontend

WORKDIR /usr/src/book_store_frontend

RUN npm install

# COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine

## Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY ./src/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/book_store_frontend/dist/book_store_frontend /usr/share/nginx/html