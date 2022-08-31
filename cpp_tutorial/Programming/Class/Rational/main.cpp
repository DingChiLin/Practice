#include <iostream>
#include "rational.h"
using namespace std;

int main() {
    Rational r1;
    r1.set_num(78);
    r1.set_den(100);
    r1.print();

    const Rational r2 = r1;
    r2.print();

    r1.set_den(99);
    r1.print();
    r2.print();

    const Rational* r3 = &r2;
    r3->print();

    return 0;
}
