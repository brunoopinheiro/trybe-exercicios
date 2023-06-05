def bubble_sort(numbers: list[int]) -> list[int]:
    n = len(numbers)
    for i in range(n - 1):
        for j in range(0, n - 1 - i):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]

    return numbers


if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(bubble_sort(numbers))