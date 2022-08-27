FROM alpine:3.7
ARG my_name_is=nobody
RUN echo "Hi, You have built a new image from a Dockerfile. Well done, $my_name_is!" > say.txt
ENTRYPOINT ["cat", "./say.txt"]
