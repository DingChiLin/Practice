#include <iostream>
#include <string>
#include <fstream>
using namespace std;

ifstream inFile;
string str;
int number;
char letter;

int main() {
    inFile.open("people.txt");
    if (inFile.fail())
        cout << "File not found!" << endl;
    else {
        while (!inFile.eof()) {
            getline(inFile, str);
            cout << str << endl;
            getline(inFile, str);
            int num = stoi(str);
            cout << num << endl;
        }
        inFile.close();
    }
    return 0;
}