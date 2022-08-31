class Rational {
private:
    int numerator;
    int denominator;
public:
    int get_num();
    void set_num(int num);
    int get_den();
    void set_den(int den);
    void print() const;
};