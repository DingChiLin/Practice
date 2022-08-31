#include "cat.h"

cat::cat(std::string _name, int _age, unsigned char _purpose) {
    name = _name;
    age = _age;
    purpose = _purpose;
}
std::string cat::get_name() {
		return name;
	}
int cat::get_age() {
    return age;
}
void cat::set_name(std::string _name) {
    name = _name;
}