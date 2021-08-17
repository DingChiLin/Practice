#include <iostream>
#include<iomanip>
#include<unistd.h>
#include<stdlib.h>
#include<time.h>
using namespace std;
void PrintFunction() {
	cout << "CodeWorld!"<<endl;
}

int main(void) {
	int count = 10;
	int i = 0;
	int temp=0;
	time_t timep;
	srand((unsigned)time(NULL));
	while (i < count) {
		time(&timep);//Get how many seconds have passed since 1970 and store it in timep of type time_t
		printf("%s", ctime(&timep));//Use ctime to convert the number of seconds into string format, and output: Tue Nov 5 02:52:05 2019

		PrintFunction();

		temp=rand()%11;
		cout<<"The random number generated is: "<<temp<<endl<<endl;
		sleep(temp);
		i++;
	}
	return 0;
}

