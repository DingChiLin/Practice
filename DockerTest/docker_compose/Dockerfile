FROM alpine:latest
ENV myworkdir /var/www/localhost/htdocs/
ARG whoami=Arthur
WORKDIR ${myworkdir}
RUN apk --update add apache2
RUN rm -rf /var/cache/apk/*
RUN echo "<h3> I am ${whoami}. Ya!<h3>" >> index.html
RUN echo "<h3> I am ${whoami}. Ya!<h3>" >> index.html
RUN echo "<h3> I am ${whoami}. Ya!<h3>" >> index.html
ENTRYPOINT ["httpd"]
CMD ["-D", "FOREGROUND"]
