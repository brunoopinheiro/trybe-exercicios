def binary_search(numbers, target):
    start = 0
    end = len(numbers) - 1

    while start <= end:
        mid = (start + end) // 2

        if numbers[mid] == target:
            return mid

        if target < numbers[mid]:
            end = mid - 1

        else:
            start = mid + 1

    return -1


def recursive_binary_search(arr, target, start=0, end=None):
    if end is None:
        end = len(arr)

    if start > end:
        return False

    else:
        mid = (start + end) // 2
        if target == arr[mid]:
            return mid

        elif target > arr[mid]:
            return recursive_binary_search(arr, target, mid + 1, end)

        else:
            return recursive_binary_search(arr, target, start, mid - 1)


if __name__ == "__main__":
    numbers = [2, 3, 4, 10, 40, 80, 100, 120]
    target = 80

    result = binary_search(numbers, target)
    print(f"Elemento encontrado na posicao: {result}")

    result_bin = recursive_binary_search(numbers, target)
    print(f"Elemento encontrado na posicao: {result_bin}")
