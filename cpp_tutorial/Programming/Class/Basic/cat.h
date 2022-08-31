#ifndef COW_H
#define COW_H
#include <string>
enum cow_purpose {
	dairy, meat, hide, pet
};
class cat{
private:
    std::string name;
    int age;
    unsigned char purpose;
public:
    cat(std::string _name, int _age, unsigned char _purpose);
	std::string get_name();
	int get_age();
	void set_name(std::string _name);
};

#endif // COW_H