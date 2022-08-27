FROM alpine:latest
ARG whoami=Arthur
RUN apk add --update nodejs npm
WORKDIR /app
COPY . .
RUN echo "<h1> My name is ${whoami} <h1>" >> public/index.html
RUN cat public/content.txt >> public/index.html
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]
