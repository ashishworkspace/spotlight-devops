FROM node:18.8.0-buster-slim as build
ENV ENV=REACT_APP_CUSTOMER_2
WORKDIR /app/
COPY ./package.json /app/
RUN npm install --force
COPY . /app/
# RUN npm run build
CMD ["npm", "start"]

# HTTP Server
# FROM nginx
# ENV ENV=PROD
# COPY --from=build /app/build/ /usr/share/nginx/html/
# EXPOSE 80