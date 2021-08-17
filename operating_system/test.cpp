#include <stdio.h>
#include <iostream>
#include <ostream>
using namespace std;

void* f() {
  int a = 314;
	int *res = &a;
  return res;
}

void* f2() {
	cout << "YOYO" << endl;
}

int main() {
	int* pi = (int*)f();
	cout << *pi << endl;
  f2();
	return 0;
}
