from collections import deque
from math import ceil, inf
import random


def parser():
    while 1:
        data = list(input().split(' '))
        for number in data:
            if len(number) > 0:
                yield(number)   

input_parser = parser()

def get_word():
    global input_parser
    return next(input_parser)

def get_number():
    data = get_word()
    try:
        return int(data)
    except ValueError:
        return float(data)

def in_row(n, row, matrix):
    return n in matrix[row]

def in_colunm(n, col, matrix):
    return n in [row[col] for row in matrix]

def in_column_after_row(n, row, col, matrix):
    return n in [row[col] for row in matrix[row:]]

def max_time_gen(x, n):
    result = []
    if(x < n):
        return []

    elif (x % n == 0):
        for i in range(n):
            result.append(x//n)
    else:
        zp = n - (x % n)
        pp = x//n
        for i in range(n):
            if(i>= zp):
                result.append(pp + 1)
            else:
                result.append(pp)
    return result

def strong_constrain():
    return

def weak_constrain():
    return


def pprint(matched_interview, matched_observe, students):
    N = len(matched_interview)
    M = len(matched_interview[0])
    orders = list(range(M))
    # random.shuffle(orders)
    for i in range(N):
        print(
            [(
                students[matched_interview[i][j]] if matched_interview[i][j] != None else "X", 
                students[matched_observe[i][j]] if matched_observe[i][j] != None else "X"
             ) for j in orders]
        )

def match(student_count, interviewer_count, skip_time, interview_time, observe_time, interview_max_time, total_max_time, observer_queue, visited_pairs, negative_score_limit):
    negative_score = 0
    matched_interview = [[None for j in range(interviewer_count)] for i in range(4)]
    matched_observe = [[None for j in range(interviewer_count)] for i in range(4)]

    s_id = random.randint(0, student_count-1)
    for i in range(4):
        for j in range(interviewer_count):
            # print(s_id, matched_interview, interview_max_time)
            loop_count = 0
            while in_row(s_id, i, matched_interview) or \
             in_colunm(s_id, j, matched_interview) or \
             interview_time[s_id] == interview_max_time[s_id]:
                s_id += 1
                s_id %= student_count
                loop_count += 1
                if loop_count > student_count:
                    return None, None, inf

            matched_interview[i][j] = s_id
            interview_time[s_id] += 1
            s_id += random.randint(0, 2)
            s_id %= student_count

    tmp_stk = []
    offset = list(range(4))
    random.shuffle(offset)
    # print("OFFSET:", offset)
    skip_place = set()
    for i in range(4):
        random.shuffle(observer_queue)
        # skip_list = [(offset[i] + x) % interviewer_count for x in range(skip_time)]
        skip = 0
        for j in range(interviewer_count):
            if skip < skip_time and j not in skip_place and (matched_interview[i][j], None) not in visited_pairs:
                matched_observe[i][j] = None
                visited_pairs.add((matched_interview[i][j], None))
                skip += 1
                skip_place.add(j)
                continue

            while observer_queue and \
                (((matched_interview[i][j], observer_queue[0]) in visited_pairs) or \
                #  in_column_after_row(observer_queue[0], i, j, matched_interview) or \
                 in_colunm(observer_queue[0], j, matched_interview) or \
                 in_colunm(observer_queue[0], j, matched_observe) or \
                 in_row(observer_queue[0], i, matched_observe) or \
                 in_row(observer_queue[0], i, matched_interview) or \
                 interview_time[observer_queue[0]] + observe_time[observer_queue[0]] == total_max_time[observer_queue[0]]):
                tmp_stk.append(observer_queue.popleft())
            
            # print("OBQ:", observer_queue)
            # print(tmp_stk)
            # 第一次找不到，減弱條件
            # print(i, j, len(tmp_stk))
            if len(tmp_stk) == student_count:
                negative_score += 1
                if negative_score > negative_score_limit:
                    return None, None, inf
                while tmp_stk:
                    observer_queue.appendleft(tmp_stk.pop())

                while observer_queue and \
                    ( \
                        ((matched_interview[i][j], observer_queue[0]) in visited_pairs) or \
                        # in_colunm(observer_queue[0], j, matched_interview) or \
                        in_column_after_row(observer_queue[0], i, j, matched_interview) or \
                        in_colunm(observer_queue[0], j, matched_observe) or \
                        in_row(observer_queue[0], i, matched_observe) or \
                        in_row(observer_queue[0], i, matched_interview) or \
                        interview_time[observer_queue[0]] + observe_time[observer_queue[0]] == total_max_time[observer_queue[0]]):
                    tmp_stk.append(observer_queue.popleft())

            # 仍然找不到，輪空
            if len(tmp_stk) == student_count:
                return None, None, inf
                # matched_observe[i][j] = None
                # while tmp_stk:
                #     observer_queue.appendleft(tmp_stk.pop())
            else:
                n = observer_queue.popleft()
                matched_observe[i][j] = n
                observe_time[n] += 1
                visited_pairs.add((matched_interview[i][j], n))
                observer_queue.append(n)
                while tmp_stk:
                    observer_queue.appendleft(tmp_stk.pop())

            # print("----")
            # print(matched_observe[i][j])
            # print(observer_queue)
    # print(interview_time, observe_time)
    return matched_interview, matched_observe, negative_score

def solve(N1, N2, M, interviewer1, interviewer2, students, negative_score_limit):


    student_ids = list(range(M))
    random.shuffle(student_ids)
    # print("IDS:", student_ids)
    observer_queue = deque(student_ids)
    visited_pairs = set()

    interview_time = [0] * M
    observe_time = [0] * M
    total_negative_score = 0

    skip_time = (2 * N1 - M) 
    interview_max_time = max_time_gen(4*N1, M) #ceil(4 * N1 / M)
    total_max_time = max_time_gen(8 * N1 - skip_time * 4, M) #ceil(8 * N1 - skip_time * 4 / M)
    # print("MAXX:", interview_max_time, total_max_time)
    matched_interview1, matched_observe1, negative_score = \
        match(M, N1, skip_time, interview_time, observe_time, interview_max_time, total_max_time, observer_queue, visited_pairs, negative_score_limit)
    
    if negative_score == inf:
        return inf, None, None, None, None, None, None

    # print("--- match day 1 ---")
    total_negative_score += negative_score
    # pprint(matched_interview1, matched_observe1, students)

    skip_time = (2 * N2 - M) 
    interview_max_time = max_time_gen(4 * (N1 + N2), M)
    total_max_time = max_time_gen(8 * (N1 + N2) - skip_time * 8, M)
    # print("MAXX:", interview_max_time, total_max_time)
    matched_interview2, matched_observe2, negative_score = \
        match(M, N2, skip_time, interview_time, observe_time, interview_max_time, total_max_time, observer_queue, visited_pairs, negative_score_limit)

    if negative_score == inf:
        return inf, None, None, None, None, None, None

    # print("--- match day 2 ---")
    total_negative_score += negative_score
    # pprint(matched_interview2, matched_observe2, students)

    # print(total_negative_score)
    
    return total_negative_score, interview_time, observe_time, matched_interview1, matched_observe1, matched_interview2, matched_observe2


def main():
    N1 = get_number()
    interviewer1 = []
    for i in range(N1):
        interviewer1.append(get_word())

    N2 = get_number()
    interviewer2 = []
    for i in range(N2):
        interviewer2.append(get_word())

    M = get_number()
    students = []
    for i in range(M):
        students.append(get_word())


    best_negative_score = inf
    for i in range(1000000):
        total_negative_score, interview_time, observe_time, matched_interview1, matched_observe1, matched_interview2, matched_observe2 = solve(N1, N2, M, interviewer1, interviewer2, students, best_negative_score)
        if total_negative_score < best_negative_score:
            best_negative_score = total_negative_score

            print("=== test: ", i, "===")
            for i in range(M):
                print(students[i], interview_time[i], observe_time[i])

            print("--- match day 1 ---")
            pprint(matched_interview1, matched_observe1, students)

            print("--- match day 2 ---")
            pprint(matched_interview2, matched_observe2, students)

            repeated = set()
            for i in range(4):
                for j in range(5):
                    pair = (matched_interview1[i][j], matched_observe1[i][j])
                    if pair in repeated:
                        print(pair)
                    repeated.add(pair)

            for i in range(4):
                for j in range(5):
                    pair = (matched_interview2[i][j], matched_observe2[i][j])
                    if pair in repeated:
                        print(pair)
                    repeated.add(pair)

            print("score:", best_negative_score)
            if best_negative_score == 0:
                break

main()
