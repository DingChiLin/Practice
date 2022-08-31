'''
Requirement:

1. System
    * field
        shopping_cart: 
        shop: {item: quantity}
    * actions:
        - put / remove / update item on shop
        - inc / dec item quantity
        - search(keyword)

2. Item
    * field:
        - type: 
        - name
        - price

3. Customer:
    * field:
        - id
        - name
        - password
        - money
    * action

4. ShoppingCart:
    * field
        cart: {customer: [items]}
    * action
        - put(customer, item)
        - delete(customer, item)
        - checkout(customer)


'''

from enum import Enum
from collections import defaultdict

class ItemType(Enum):
    BOOK = 1
    FOOD = 2

class Item:
    def __init__(self, type, id, name, price):
        self.id = id
        self.type = type
        self.name = name
        self.price = price

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name

class BookItem(Item):
    def __init__(self, id, name, price):
        super().__init__(ItemType.BOOK, id, name, price)

class FoodItem(Item):
    def __init__(self, id, name, price):
        super().__init__(ItemType.FOOD, id, name, price)

class Customer:
    def __init__(self, id, name, password, money):
        self.id = id
        self.name = name
        self.__password = password
        self.money = money
        self.items = defaultdict(int)
    
    def add_items(self, items):
        for item_id, quantity in items:
            self.items[item_id] += quantity

    def __str__(self):
        return f"{self.name} with money: {self.money}"

    def show_items(self):
        print(self.items)

class ShoppingCart:
    def __init__(self):
        self.cart = defaultdict(lambda: defaultdict(int))

    def add_item(self, customer: Customer, item: Item, quantity: int):
        self.cart[customer.id][item.id] += quantity

    def delete_item(self, customer: Customer, item: Item, quantity: int):
        self.cart[customer.id][item.id] -= quantity

    def content(self, customer):
        return [(item_id, quantity) for item_id, quantity in self.cart[customer.id].items()]

    def clear(self, customer):
        del self.cart[customer.id]

class System:
    def __init__(self):
        self.shopping_cart = ShoppingCart()
        self.items = defaultdict(Item) # {item_id, Item}
        self.shop = defaultdict(int) # {item_id, quantity}

    def add_item(self, item, quantity):
        self.items[item.id] = item
        self.shop[item.id] += quantity

    def list_items(self):
        return [(self.items[item_id], quantity) for item_id, quantity in self.shop.items()]

    def customer_add_money(self, customer, money):
        customer.money += money 

    def customer_add_item(self, customer: Customer, item: Item, quantity: int):
        if quantity <= self.shop[item.id]:
            self.shop[item.id] -= quantity
            self.shopping_cart.add_item(customer, item, quantity)
        else:
            print(f"not enough quantity for item: {item.name}")
            return False

    def customer_delete_item(self, customer: Customer, item: Item, quantity: int):
        if quantity >= self.shop[item.id]:
            self.shop[item.id] += quantity
            self.shopping_cart.delete_item(customer, item, quantity)
        else:
            print(f"not enough quantity for item: {item.name}")
            return False

    def checkout(self, customer: Customer):
        items = self.shopping_cart.content(customer)
        remain_money = customer.money
        need_money = sum([self.items[item_id].price * quantity for item_id, quantity in items])
        if remain_money >= need_money:
            customer.add_items(items)
            customer.money -= need_money
            self.shopping_cart.clear(customer)
            return True
        else:
            print("not enough money")
            return False


book1 = BookItem(1, 'little red hat', 100)
book2 = BookItem(2, 'three pigs', 200)
food1 = FoodItem(3, 'apple', 50)

system = System()
system.add_item(book1, 10)
system.add_item(book1, 20)
system.add_item(book2, 20)
system.add_item(food1, 50)

print('--- System: ---')
print(system.list_items())
print()

customer = Customer(1, 'Arthur', '1234', 1000)
system.customer_add_money(customer, 500)
print('--- Customer: ---')
print(customer) # money 1500
print()

system.customer_add_item(customer, book1, 10)
system.customer_add_item(customer, book1, 30) # not enough
system.customer_add_item(customer, food1, 30)
system.checkout(customer) # not enough money

system.customer_add_money(customer, 1500)
system.checkout(customer) # not enough money

print('--- Customer: ---')
print(customer) # money 500
print()
customer.show_items()
