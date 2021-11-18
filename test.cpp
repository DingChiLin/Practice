using namespace std;

#include <stdio.h>
#include <time.h>
#include <iostream>
#include <ofstream>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int main () {
	int buf;
	int fd = open("test.txt", O_RDWR);
	close(fd);
} 
