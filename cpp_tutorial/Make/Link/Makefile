main: main.o sum.o
	g++ main.o sum.o # link

sum.o: sum.cpp 
	g++ -c sum.cpp # compile sum

main.o: main.cpp
	g++ -c main.cpp # compile main

clean:
	rm sum.o main.o main
