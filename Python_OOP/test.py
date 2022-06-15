class Animal:
    alive = 'True'

    def __init__(self):
        self.type = 'Animal'
        self.group = 'Animal'

    def Walk(self):
        print('Hello, I am the parent class')

    def Talk(self):
        print("TTTT")

class Dog(Animal):
    def __init__(self):
        super().__init__()
        self.type = 'Dog'

    def Walk(self):
        print('Hello, I am the child class')

    def dead(self):
        self.group = 'Corpse'

class Cat(Animal):
	def Walk(self):
		print("Cat Walk")


print('The method Walk here is overridden in the code')

#Invoking Child class through object r


print('----- Animal -----')
a = Animal()
a.Walk()
a.Talk()
print(a.type)
print(a.group)

print()
print('----- Dog -----')
d = Dog()
d2 = Dog()
d.Walk()
d.Talk()
print(d.type)
print(d.group)
print()

print("----- Cat -----")
c = Cat()
print(c.group)
print()

print("----- Class -----")
print(a.alive)
print(d.alive)
print(d2.alive)
Animal.alive = False
print(a.alive)
print(d.alive)
print(d2.alive)


