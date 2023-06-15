def get_sevens(rolls):
    seen_before = {}
    answer = []

    for roll in rolls:
        if 7 - roll in seen_before:
            answer.append((7 - roll, roll))
            del seen_before[7 - roll]
        else:
            seen_before[roll] = True

    return answer


if __name__ == "__main__":
    rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]
    print(get_sevens(rolls))
