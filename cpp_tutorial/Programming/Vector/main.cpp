#include <iostream>
#include <vector>
#include <typeinfo>
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
    vector<cow> cattle;
    cattle.push_back(cow("arthur", 1));
    cattle.push_back(cow("meggie", 2));
    cattle.push_back(cow("hihi", 3));
    for (auto &it: cattle) {
        cout << it.name << endl;
    }

    vector<cow*> cattle2;
    cattle2.push_back(new cow("arthur", 1));
    cattle2.push_back(new cow("meggie", 2));
    cattle2.push_back(new cow("hihi", 3));
    for (auto &it: cattle2) {
        cout << it->name << endl;
    }

    vector<cow*> cattle3;
    cattle3.push_back(new cow("arthur", 1));
    cattle3.push_back(new cow("meggie", 2));
    cattle3.push_back(new cow("hihi", 3));
    for (auto it = cattle3.begin(); it != cattle3.end(); it++) {
        cout << (**it).name << endl;
    }

    return 0;
}