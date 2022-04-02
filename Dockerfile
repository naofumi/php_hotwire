# syntax=docker/dockerfile:1
FROM php:7.3-apache
# RUN apk update && apk add alpine-sdk mysql-client mysql-dev tzdata bash less yarn vips vips-poppler
# RUN apt-get update -qq && apt-get install -y nodejs npm default-mysql-client bash
# RUN npm install --global yarn
WORKDIR /var/www/html

RUN docker-php-ext-install pdo_mysql

COPY php/php.ini /usr/local/etc/php
