#include <iostream>
#include <string>
using namespace std;

template <typename T>
class Stack {
private:
    int capacity;
    int tail;
    T * stk_ptr;
public:
    explicit Stack(int capacity) {
        capacity = capacity;
        stk_ptr = new T[capacity];
        tail = 0;
    }
    ~Stack() {
        if (stk_ptr) {
            delete [] stk_ptr;
        }
    }
    bool is_empty() {
        return tail == 0;
    }
    bool is_full() {
        return tail >= capacity;
    }
    T top() {
        return stk_ptr[tail - 1];
    }
    void push(const T &item) {
        if (tail < capacity) {
            stk_ptr[tail++] = item;
        } else {
            cout << "stk is full" << endl;
        }
    }
    T & pop() {
        if (tail != 0) {
            return stk_ptr[--tail];
        } else {
            throw "Empty Stack";
        }
    }
};

int main() {
    Stack<int> stk(10);
    for (int i : {10,20,30,40,50}) {
        stk.push(i);
    }

    while (!stk.is_empty()) {
        cout << stk.pop() << endl;
    }

    try {
        stk.pop();
    } catch (const char* msg) {
        cerr << msg << endl;
    }

    Stack<string> stk2(10);
    for (string s : {"Arthur", "is", "name", "my", "Hello"}) {
        stk2.push(s);
    }

    while (!stk2.is_empty()) {
        cout << stk2.pop() << endl;
    }

    return 0;
}
