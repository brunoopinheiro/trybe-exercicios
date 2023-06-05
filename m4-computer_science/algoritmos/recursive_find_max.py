def recursive_find_max(int_list: list[int], pointer=0, max_pointer=0):
    if pointer == len(int_list):
        return max_pointer

    if int_list[pointer] > int_list[max_pointer]:
        max_pointer = pointer
        pointer += 1
        return recursive_find_max(int_list, pointer, max_pointer)

    pointer += 1
    return recursive_find_max(int_list, pointer, max_pointer)


if __name__ == "__main__":
    integers = [2, 3, 5, 6, 8, 10, 56, 23, 45, 100, 409, 580]
    index = recursive_find_max(integers)
    print(f"{integers[index]} at position {index}")
