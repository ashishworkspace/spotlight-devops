FROM node:16.16.0-slim
RUN apt update && apt install vim curl -y
ENV ENV=NODE_APP_CUSTOMER_1
WORKDIR /app/
COPY ./package.json /app/
RUN npm install
COPY . /app/
EXPOSE 5000
RUN npm run build
CMD [ "npm",  "start" ]