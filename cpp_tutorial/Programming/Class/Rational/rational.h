class Rational {
private:
    int numerator;
    int denominator;
public:
    Rational(const int num, const int den);
    int get_num();
    void set_num(int num);
    int get_den();
    void set_den(int den);
    void print() const;
};