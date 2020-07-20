FROM node:12.2

COPY ./src /usr/src/book_store_service

WORKDIR /usr/src/book_store_service

RUN npm install

RUN npm install -g nodemon

EXPOSE 9001

# CMD npm run dev