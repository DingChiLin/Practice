/* PThread Creation */ 

#include <stdio.h>
#include <pthread.h>

void *foo (void *arg) {		/* thread main */
	printf("Foobar!\n");
	pthread_exit(NULL);
}

int main (void) {
  printf("main\n");
	int i;
	pthread_t tid;
	
	pthread_create(&tid, NULL, foo, NULL);
  printf("between\n");
	pthread_join(tid, NULL);
	return 0;
}


