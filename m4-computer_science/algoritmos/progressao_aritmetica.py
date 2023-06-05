"""
PROBLEMA - É possível criar uma progressão aritmética à partir de uma sequência?

Dada uma lista de números inteiros, retorne:
- True: se é possível criar uma progressão aritmética à partir de uma sequência.
- False: caso contrário

Nota: a lista sempre terá pelo menos 2 elementos.

[1, 3, 5] = True
[1, 3, 6] = False
"""
from insertion_sort import insertion_sort as sorter

def can_make_arithmetic_progression(nums: list[int]) -> bool:
    # sorter(nums)
    nums.sort()

    common_difference = nums[1] - nums[0]
    for i in range(2, len(nums)):
        if nums[i] - nums[i - 1] != common_difference:
            return False
        
    return True



if __name__ == "__main__":
    inputs = [
        [1, 3, 5],
        [3, 6, 1],
        [7, 43, 19, 25, 1, 31, 37, 13],
        [1, 2],
        [7, 43, 19, 25]
    ] # True, False, True, True

    for input in inputs:
        output = can_make_arithmetic_progression(input)
        print(output)