permanence_period = [(2, 2), (1, 2), (2, 3), (1, 5), (4, 5), (4, 5)]


def target_time(n: int = None):
    if type(n) != int or n < 0:
        return None

    count = 0
    for period in permanence_period:
        if n >= period[0] and n <= period[1]:
            count += 1

    return count


if __name__ == "__main__":
    print(target_time(5))
    print(target_time(4))
    print(target_time(3))
    print(target_time(2))
    print(target_time(1))
    print(target_time())
