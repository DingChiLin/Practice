FROM alpine:latest
RUN apk add --update nodejs npm
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]