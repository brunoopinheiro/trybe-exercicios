def insertion_sort(numbers: list[int]) -> list[int]:
    for i in range(1, len(numbers)):
        key = numbers[i]

        new_position = i - 1
        while new_position >= 0 and numbers[new_position] > key:
            numbers[new_position + 1] = numbers[new_position]
            new_position = new_position - 1

        numbers[new_position + 1] = key

    return numbers




if __name__ == '__main__':
    numbers = [2, 5, 9, 7, 6, 8]
    print("Before sorting:")
    print(numbers)
    print("After sorting:")
    print(insertion_sort(numbers))