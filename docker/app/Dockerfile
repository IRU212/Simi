FROM php:8.0-fpm

COPY php.ini /usr/local/etc/php/

RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev \
    vim \
    && docker-php-ext-install zip pdo_mysql opcache 

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN curl -SL https://deb.nodesource.com/setup_15.x | bash
RUN apt-get install -y nodejs

ENV COMPOSER_ALLOW_SUPERUSER 1 
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

RUN composer global require "laravel/installer"

WORKDIR /app