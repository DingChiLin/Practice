#include <iostream>
#include "rational.h"
using namespace std;

std::ostream & operator << (std::ostream & o, const Rational & r) {
    return o << r.raw_string();
}

int main() {
    Rational r1(3,8);
    Rational r2(1,8);
    cout << r1 << endl;
    cout << r2 << endl;
    Rational r3 = r1 + r2;
    cout << r3 << endl;

    Rational r4 = (r3 + 2) / r1; //  (5/2) / (3/8) = (20/3)
    cout << r4 << endl;
    return 0;
}
