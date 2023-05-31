def quick_sort(numbers, start, end):
    if start < end:
        p = partition(numbers, start, end)
        quick_sort(numbers, start, p -1)
        quick_sort(numbers, p + 1, end)


def partition(numbers, start, end):
    pivot = numbers[end]
    delimiter = start -1

    for i in range(start, end):
        if numbers[i] <= pivot:
            delimiter = delimiter + 1
            numbers[i], numbers[delimiter] = numbers[delimiter], numbers[i]

    numbers[delimiter + 1], numbers[end] = numbers[end], numbers[delimiter + 1]

    return delimiter + 1


if __name__ == "__main__":
    numbers = [6, 5, 3, 1, 8, 7, 2, 4]
    quick_sort(numbers, 0, len(numbers) - 1)
    print(numbers)