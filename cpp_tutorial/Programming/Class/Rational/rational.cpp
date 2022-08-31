#ifndef RATIONAL
#define RATIONAL

#include <iostream>
#include "rational.h"

int Rational::get_num() {
    return numerator;
}

void Rational::set_num(int num) {
    numerator = num;
}

int Rational::get_den() {
    return denominator;
}

void Rational::set_den(int den) {
    denominator = den;
}

void Rational::print() const {
    std::cout << numerator << "/" << denominator << std::endl;
}

#endif //RATIONAL