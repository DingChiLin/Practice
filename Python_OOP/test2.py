class Cars:
    # 建構式
    def __init__(self, weight):
        self.set_weight(weight)

    def get_weight(self):
        return self.__weight

    def set_weight(self, value):
        if value <= 0:
            print("wrong")
            # raise ValueError("Car weight cannot be 0 or less.")
        self.__weight = value

mazda = Cars(-200)
mazda = Cars(200)
print(mazda.__dict__)
print(mazda._Cars__weight)
