#include <iostream>
#include "rational.h"
using namespace std;

int main() {
    const Rational r1(1,3);
    r1.print();

    Rational r2 = r1;
    r2.print();

    return 0;
}
