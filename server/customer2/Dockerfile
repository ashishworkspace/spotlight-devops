FROM node:16.16.0-slim
ENV ENV=NODE_APP_CUSTOMER_2
WORKDIR /app/
COPY ./package.json /app/
RUN npm install
COPY . /app/
EXPOSE 5000
RUN npm run build
CMD [ "npm",  "start" ]