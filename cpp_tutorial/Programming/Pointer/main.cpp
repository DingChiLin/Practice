#include <iostream>
using namespace std;

class cow {
public:
    cow(string _name, int _age) {
        name = _name;
        age = _age;
    }
    string name;
    int age;
};

int main() {
    cow my_cow("arthur", 10);
    cout << my_cow.name << endl;

    cow *ptr = &my_cow;
    cout << ptr->name << endl;

    cow *my_cow2 = new cow("meggie", 10);
    cout << my_cow2->name << endl;
    delete my_cow2;
    return 0;
}