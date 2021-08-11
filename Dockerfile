FROM webdevops/php-apache

RUN apt update
RUN apt install -y nodejs

WORKDIR /
COPY app/api/server.js .
COPY nodejs.conf /opt/docker/etc/supervisor.d/

EXPOSE 443
EXPOSE 80

CMD ["supervisord"]