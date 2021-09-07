# specify the compiler
CC=g++

# specify options for the compiler
CFLAGS=-c -Wall

hello.out: main.o add.o
	$(CC) main.o add.o -o main
main.o:
	$(CC) $(CFLAGS) main.cpp -o main.o
add.o:
	$(CC) $(CFLAGS) add.cpp -o add.o
clean:
	rm main.o add.o main
