#include <iostream>
#include <string>
#include <cstring>
#include "cat.h"

using namespace std;

int main() {
	cat my_cat("bb", 10, meat);
	cout << my_cat.get_name() << endl;
	my_cat.set_name("cc");
	cout << my_cat.get_name() << endl;
	return 0;
}