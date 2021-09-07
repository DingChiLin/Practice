using namespace std;
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <iostream>
#include <ostream>

int main () {
   int i, n;
   time_t t;
   
   n = 5;
   
   /* Intializes random number generator */
   srand((unsigned) time(&t));
	 cout << "T:" << t << endl;
   /* Print 5 random numbers from 0 to 49 */
   for( i = 0 ; i < n ; i++ ) {
      printf("%d\n", rand() % 50);
   }
   
   return(0);
}
