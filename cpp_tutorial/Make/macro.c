// macro.c
#include <stdio.h>
int main() {
  printf("Hello, world!\n");

#ifdef DEBUG
  printf("DEBUG is defined.\n");
#endif

  return 0;
}
