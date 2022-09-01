#include <iostream>
using namespace std;

template <typename T> T maxof(T a, T b) {
    return a > b ? a : b;
}

int main() {
    int a = 80;
    int b = 99;
    int c = maxof(a, b);
    cout << c << endl;

    cout << maxof("aaa", "bbb") << endl;
    return 0;
}
