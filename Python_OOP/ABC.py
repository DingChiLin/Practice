from abc import ABC, abstractmethod

class Car(ABC):
    def __init__(self,name):
        self.name = name

    def description(self):
        print("This the description function of class car.")

    @abstractmethod
    def price(self,x):
        pass

class new(Car):
    def price(self,x):
        print(f"The {self.name}'s price is {x} lakhs.")

# car = Car("C")  # raise error

my_car = MyCar("MC")
my_car.description()
my_car.price(60)

