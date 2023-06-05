def search(numbers: list[int], start: int, end: int) -> list[int]:
    min_index = start

    for i in range(start + 1, end):
        if numbers[i] < numbers[min_index]:
            min_index = i

    return min_index


def selection_sort(numbers: list[int]) -> list[int]:
    for i in range(len(numbers) - 1):
        min_ele_index = search(numbers, i, len(numbers))
        numbers[i], numbers[min_ele_index] = numbers[min_ele_index], numbers[i]

    return numbers


if __name__ == '__main__':
    numbers = [2, 5, 9, 7, 6, 8]
    print("Before sorting:")
    print(numbers)
    print("After sorting:")
    print(selection_sort(numbers))