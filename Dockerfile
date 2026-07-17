FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
    apt install apache2 -y && \
    apt clean

COPY html/ /var/www/html/

EXPOSE 80

CMD ["apachectl","-D","FOREGROUND"]