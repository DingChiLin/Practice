FROM debian:stretch
RUN apt-get -qq update
RUN apt-get -qq upgrade
RUN apt-get -qq install vim
RUN apt-get -qq install cmake
RUN apt-get -qq install libboost-all-dev
RUN apt-get -qq install build-essential libtcmalloc-minimal4 && \
	ln -s /usr/lib/libtcmalloc_minimal.so.4 /usr/lib/libtcmalloc_minimal.so

