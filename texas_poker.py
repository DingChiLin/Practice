import random
from collections import defaultdict
from itertools import combinations

DROP_CNT = 3
PICK_CNT = 23

def draw_card():
    pocker = list(range(52))
    drop_card = random.sample(pocker, DROP_CNT)
    for card in drop_card:
        pocker.remove(card)
    pick_card = random.sample(pocker, PICK_CNT)
    return pick_card[0: 5], pick_card[5:]

def card_info(card):
    return card // 13, card % 13 # color, number

def card_number_count(cards):
    numbers = []
    for i, card in enumerate(cards):
        color, number = card_info(card)
        numbers.append(number)
    numbers.sort()
    counter = defaultdict(int)
    for n in numbers:
        counter[n] += 1
    return sorted([cnt for card, cnt in counter.items()])

def card_color_count(cards):
    colors = []
    for i, card in enumerate(cards):
        color, number = card_info(card)
        colors.append(color)
    colors.sort()
    counter = defaultdict(int)
    for n in colors:
        counter[n] += 1
    return sorted([cnt for card, cnt in counter.items()])

def is_flush(cards):
    count = card_color_count(cards)
    return count[-1] >= 5

def is_straight(cards):
    numbers = []
    for i, card in enumerate(cards):
        color, number = card_info(card)
        numbers.append(number)
    numbers.sort()
    if numbers[0] == 0 and numbers[1] == 9: # 10, J, Q, K, A
        return all([numbers[i+1] - numbers[i] == 1 for i in range(1, 4)])
    if numbers[0] in range(0, 9): # Other straights
        return all([numbers[i+1] - numbers[i] == 1 for i in range(4)])
    return 0

def pattern_straight_flush(cards):
    for comb in combinations(cards, 5):
        if is_straight(comb) and is_flush(comb):
            return True
    return False

def pattern_four_of_a_kind(cards):
    return card_number_count(cards)[-1] == 4

def pattern_full_house(cards):
    count = card_number_count(cards)
    return count[-1] == 3 and count[-2] >= 2

def pattern_flush(cards):
    return is_flush(cards)

def pattern_straight(cards):
    for comb in combinations(cards, 5):
        if is_straight(comb):
            return True
    return False

def pattern_three_of_a_kind(cards): 
    #res = (card_number_count(cards)[-1] == 3)
    #if (res):
    #    print([card_info(c) for c in cards])
    return res

CARD_PATTERNS = {
    "1 straight_flush": pattern_straight_flush,
    "2 four_of_a_kind": pattern_four_of_a_kind,
    "3 full_house": pattern_full_house,
    "4 flush": pattern_flush,
    "5 straight": pattern_straight,
    "6 three_of_a_kind": pattern_three_of_a_kind,
}

def game(counter):
    center_card, given_card = draw_card()
    # print(center_card, given_card)
    for i in range(9):
        player_card = center_card + given_card[2*i: 2*i+1+1]
        # print(player_card)
        for pattern_name, pattern_checker in CARD_PATTERNS.items():
            result = pattern_checker(player_card)
            if result:
                counter[pattern_name] += 1
                break
        # print(counter)

def main():
    counter = defaultdict(int)
    for i in range(1000):
        game(counter)
    print(counter)

main()

# {'5 straight': 413, '6 three_of_a_kind': 476, '4 flush': 289, '3 full_house': 246, '2 four_of_a_kind': 23, '1 straight_flush': 4}
