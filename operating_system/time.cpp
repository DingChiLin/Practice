using namespace std;

#include <stdio.h>
#include <time.h>
#include <iostream>
#include <ostream>

void c_time() {
    time_t sec;
    sec = time(NULL);
		printf(ctime(&sec));
}

void make_time() {
		tm str_time;
		time_t time_of_day;

		str_time.tm_year = 2012-1900;
		str_time.tm_mon = 6;
		str_time.tm_mday = 5;
		str_time.tm_hour = 10;
		str_time.tm_min = 3;
		str_time.tm_sec = 5;
		str_time.tm_isdst = 0;

		time_of_day = mktime(&str_time);
		printf(ctime(&time_of_day));
}

void diff_time() {
		time_t start,end;
		volatile long unsigned counter;

		start = time(NULL);

		for(counter = 0; counter < 500000000; counter++)
			; /* Do nothing, just loop */

		end = time(NULL);
		printf("The loop used %f seconds.\n", difftime(end, start));
}

void wait ( int sec )
{
		clock_t end_wait;
		end_wait = clock () + sec * CLOCKS_PER_SEC;
		while (clock() < end_wait) {}
}

int main ()
{
    time_t sec;
		cout << "--- basic ---" << endl;
    printf ("Number of hours since January 1, 1970 is %ld \n", sec/3600);
		
		cout << "--- c time ---" << endl;
    c_time();

		cout << "--- make time ---" << endl;
		make_time();

		cout << "--- diff time ---" << endl;
		diff_time();

		cout << "--- wait time ---" << endl;
		wait(3);

		cout << "--- finish ---" << endl;
    return 0;
} 
