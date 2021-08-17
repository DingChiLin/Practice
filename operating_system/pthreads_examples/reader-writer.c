#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <time.h>
#include <unistd.h>


// int main(void) {
// 	int count = 10;
// 	int i = 0;

// 	while (i < count) {
// 		// time(&timep);//Get how many seconds have passed since 1970 and store it in timep of type time_t
// 		// printf("%s", ctime(&timep));//Use ctime to convert the number of seconds into string format, and output: Tue Nov 5 02:52:05 2019

// 		// PrintFunction();

// 		int temp=rand()%11;
// 		printf("The random number generated is: %d\n", temp);
// 		sleep(temp);
// 		i++;
// 	}
// 	return 0;
// }



#define READER_CNT 5
#define WRITER_CNT 5

//int buffer[BUF_SIZE];  	/* shared buffer */
//int add = 0;  			/* place to add next element */
//int rem = 0;  			/* place to remove next element */
//int num = 0;  			/* number elements in buffer */

pthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;  	/* mutex lock for buffer */
pthread_cond_t c_reader = PTHREAD_COND_INITIALIZER; /* consumer waits on this cond var */
pthread_cond_t c_writer = PTHREAD_COND_INITIALIZER; /* producer waits on this cond var */

int content = 0;
int reader_cnt = 0;
int wait_reader_cnt = 0;

void *reader (void *param);
void *writer (void *param);

int main(int argc, char *argv[]) {
	srand((unsigned)time(NULL));

	pthread_t r_tid[READER_CNT];
	pthread_t w_tid[WRITER_CNT];
	int i;

	/* create the threads; may be any number, in general */
	for (int i = 0; i < READER_CNT; i++) {
		if(pthread_create(&r_tid[i], NULL, reader, NULL) != 0) {
			fprintf(stderr, "Unable to create reader thread\n");
			exit(1);
		}
	}

	for (int i = 0; i < WRITER_CNT; i++) {
		if(pthread_create(&w_tid[i], NULL, writer, NULL) != 0) {
			fprintf(stderr, "Unable to create writer thread\n");
			exit(1);
		}
	}

	/* wait for created thread to exit */

	for (int i = 0; i < READER_CNT; i++) {
		pthread_join(r_tid[i], NULL);
	}

	for (int i = 0; i < WRITER_CNT; i++) {
		pthread_join(w_tid[i], NULL);
	}
	printf("Parent quiting\n");

	return 0;
}

/* Produce value(s) */
void *reader(void *param) {

    for (int i=0; i<5; i++) {
		usleep(1000 * (random() % (READER_CNT + WRITER_CNT)));

		// Enter critical section
		pthread_mutex_lock(&m);
			while (reader_cnt == -1) {
				wait_reader_cnt++;
				pthread_cond_wait(&c_reader, &m);
				wait_reader_cnt--;
			}
			reader_cnt++;
		pthread_mutex_unlock(&m);

		// Read Content
		printf("read content: %d, with reader count: %d\n", content, reader_cnt);
		
		// Exit critical section
	  	pthread_mutex_lock(&m);
			reader_cnt--;
			if (reader_cnt == 0) {
				pthread_cond_broadcast(&c_writer);
			}
	  	pthread_mutex_unlock(&m);
	}

	fflush(stdout);
	return 0;
}

/* Consume value(s); Note the consumer never terminates */
void *writer(void *param) {
	for (int i=0; i<5; i++) {
		usleep(1000 * (random() % (READER_CNT + WRITER_CNT)));

		// Enter critical section
	  	pthread_mutex_lock(&m);
			while (reader_cnt != 0) {
				pthread_cond_wait(&c_writer, &m);
			}
			reader_cnt = -1;
	  	pthread_mutex_unlock(&m);

	    // Write data
		content++;
		printf("write content: %d, with reader count: %d\n", content, reader_cnt);

		// Exit critical section
	  	pthread_mutex_lock(&m);
			reader_cnt = 0;
			if (wait_reader_cnt > 0) {
				pthread_cond_broadcast(&c_reader);
			} else {
				pthread_cond_signal(&c_writer);
			}
	  	pthread_mutex_unlock(&m);
	}
	return 0;
}
