class Rational {
private:
    int n;
    int d;
    int gcd(int x, int y);
public:
    Rational(int num = 0, int den = 1);
    std::string raw_string() const;
    Rational operator + (const Rational &) const;
    Rational operator - (const Rational &) const;
    Rational operator * (const Rational &) const;
    Rational operator / (const Rational &) const;
};