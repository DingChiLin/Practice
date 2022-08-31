from cgitb import small
from enum import Enum
from re import I
import sys

class ParkingPlaceStatus(Enum):
    EMPTY = 1
    OCCUPIED = 2

class ParkingPlaceType(Enum):
    SMALL = 1
    LARGE = 2

class CarType(Enum):
    SMALL = 1
    LARGE = 2

class Car:
    def __init__(self, id, type):
        self.id = id
        self.type = type

class SmallCar(Car):
    def __init__(self, id):
        super().__init__(id, CarType.SMALL)

class LargeCar(Car):
    def __init__(self, id):
        super().__init__(id, CarType.LARGE)

class ParkingPlace:
    def __init__(self, id, type):
        self.id = id
        self.type = type
        self.status = ParkingPlaceStatus.EMPTY
        self.car = None

    def park(self, car):
        if self.status != ParkingPlaceStatus.EMPTY:
            print("Not Empty")
            return False
        self.car = car
        self.status = ParkingPlaceStatus.OCCUPIED
        return True

    def __str__(self):
        return f"{self.type.name} parking place {self.id}"

class SmallParkingPlace(ParkingPlace):
    def __init__(self, id):
        super().__init__(id, ParkingPlaceType.SMALL)

class LargeParkingPlace(ParkingPlace):
    def __init__(self, id):
        super().__init__(id, ParkingPlaceType.LARGE)

class ParkingLot:
    def __init__(self):
        self.types = [ParkingPlaceType.SMALL, ParkingPlaceType.LARGE]
        self.parking_places = {
            ParkingPlaceType.SMALL: {},
            ParkingPlaceType.LARGE: {}
        }
        self.empty_place_ids = {
            ParkingPlaceType.SMALL: set(),
            ParkingPlaceType.LARGE: set()
        }
        self.car_place = {}

    def __create_place(self, id, type):
        if type == ParkingPlaceType.SMALL:
            return SmallParkingPlace(id)
        if type == ParkingPlaceType.LARGE:
            return LargeParkingPlace(id)

    def add_place(self, id, type):
        parking_places = self.parking_places[type]
        if id in parking_places:
            print('id existed')
            return False
        parking_places[id] = self.__create_place(id, type)
        self.empty_place_ids[type].add(id)

    def park_car(self, car, place):
        place.status = ParkingPlaceStatus.OCCUPIED
        place.car = car
        self.car_place[car.id] = place

    def leave_car(self, car):
        if car.id not in self.car_place:
            print("Can't find this car")
            return False

        place = self.car_place[car.id]
        place.status = ParkingPlaceStatus.EMPTY
        place.car = None
        self.empty_place_ids[place.type].add(place.id)
        del self.car_place[car.id]

    def get_empty_place(self, place_type):
        if len(self.empty_place_ids[place_type]) == 0:
            return None

        empty_id = self.empty_place_ids[place_type].pop()
        return self.parking_places[place_type][empty_id]

    def show_spaces(self):
        for type in self.types:
            for id, place in self.parking_places[type].items():
                if place.status == ParkingPlaceStatus.EMPTY:
                    print(f"{type.name} place {id} is empty")
                else:
                    print(f"{type.name} place {id} occipied by car {place.car.id}")

class System:
    def __init__(self, parking_lot):
        self.__parking_lot = parking_lot
        pass

    def park(self, car):
        if car.type == CarType.SMALL:
            empty_place = self.__parking_lot.get_empty_place(ParkingPlaceType.SMALL)
        elif car.type == CarType.LARGE:
            empty_place = self.__parking_lot.get_empty_place(ParkingPlaceType.LARGE)
        else:
            print("known car type")
            return False

        if not empty_place:
            print("place is full")
            return False

        self.__parking_lot.park_car(car, empty_place)
    
    def leave(self, car):
        self.__parking_lot.leave_car(car)

parking_lot = ParkingLot()
parking_lot.add_place(1, ParkingPlaceType.SMALL)
parking_lot.add_place(2, ParkingPlaceType.SMALL)
parking_lot.add_place(3, ParkingPlaceType.SMALL)
parking_lot.add_place(1, ParkingPlaceType.LARGE)

print("----- original parking places -----")
parking_lot.show_spaces()
print()

car1 = SmallCar(1)
car2 = SmallCar(2)
car3 = LargeCar(3)
car4 = LargeCar(4)

system = System(parking_lot)
system.park(car1)
system.park(car2)
system.park(car3)
system.park(car4) # full

print("----- updated parking places 1 -----")
parking_lot.show_spaces()
print()


system.leave(car1)
system.leave(car4) # can't find

print("----- updated parking places 2 -----")
parking_lot.show_spaces()
print()