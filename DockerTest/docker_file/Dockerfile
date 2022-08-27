FROM alpine:latest
ENV myworkdir /var/www/localhost/htdocs/
ARG whoami=Arthur
WORKDIR ${myworkdir}
RUN apk --update add apache2
RUN rm -rf /var/cache/apk/*
ENTRYPOINT ["httpd"]
CMD ["-D", "FOREGROUND"]
