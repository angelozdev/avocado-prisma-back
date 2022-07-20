FROM nginx:1.23
WORKDIR /usr/share/nginx/html
COPY ./dist ./
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/mime.types /etc/nginx/mime.types
EXPOSE 80