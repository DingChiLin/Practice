#ifndef RATIONAL
#define RATIONAL

#include <iostream>
#include "rational.h"

Rational::Rational(int num, int den) {
    int g = Rational::gcd(num, den);
    n = num / g;
    d = den / g;
}

std::string Rational::raw_string() const {
    return std::to_string(n) + "/" + std::to_string(d);
}

int Rational::gcd(int x, int y) {
    if (y == 0) {
        return x;
    } else {
        return Rational::gcd(y, x % y);
    }
}

Rational Rational::operator + (const Rational & r) const {
    return Rational(n * r.d + d * r.n, d * r.d);
}

Rational Rational::operator - (const Rational & r) const {
    return Rational(n * r.d - d * r.n, d * r.d);
}

Rational Rational::operator * (const Rational & r) const {
    return Rational(n * r.n, d * r.d);
}

Rational Rational::operator / (const Rational & r) const {
    return Rational(n * r.d, d * r.n);
}

#endif //RATIONAL

