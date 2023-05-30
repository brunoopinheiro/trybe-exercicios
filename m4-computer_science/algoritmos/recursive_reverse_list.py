def recursive_reverse_list(numbers: list[int]) -> list[int]:
    if len(numbers) <= 1:
        return numbers

    return [numbers[-1]] + recursive_reverse_list(numbers[:-1])


if __name__ == "__main__":
    my_numbers = [1, 2, 3, 4, 5]
    print(recursive_reverse_list(my_numbers))
