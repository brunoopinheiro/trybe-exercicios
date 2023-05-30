def find_even(n):
    count = 0
    for i in range(1, n + 1):
        if i % 2 == 0:
            count += 1

    return count


def recursive_find_even(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_find_even(n - 1)
    else:
        return recursive_find_even(n - 1)


if __name__ == "__main__":
    x = 10
    print(find_even(x))
    print(recursive_find_even(x))
