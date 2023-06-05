def find_duplicate(numbers: list[int] = []) -> int:
    n = len(numbers)
    if n <= 0:
        return False

    if type(numbers) != list:
        return False

    numbers.sort()
    repeated_number = []

    for i in range(n - 1):
        if type(numbers[i]) != int or numbers[i] <= 0:
            return False
        if numbers[i] == numbers[i + 1]:
            repeated_number.append(numbers[i])

    if len(repeated_number) >= 1:
        return repeated_number[0]
    else:
        return False


if __name__ == "__main__":
    inputs = [
        [1, 3, 4, 2, 2],
        [3, 1, 3, 4, 2],
        [1, 1],
        [1, 1, 2],
        [3, 1, 2, 4, 6, 5, 7, 7, 8],
        [],
        [1],
        "test",
        [-1, 2, 3, 1, 1],
    ]

    for i in inputs:
        print(find_duplicate(i))

    print(find_duplicate())
