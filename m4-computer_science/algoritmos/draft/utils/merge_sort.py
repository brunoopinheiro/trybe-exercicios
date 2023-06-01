def merge_sort(word: str):
    if len(word) <= 1:
        return word

    mid = len(word) // 2
    left_half = word[:mid]
    right_half = word[mid:]

    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)

    return merge(left_half, right_half)


def merge(left, right):
    merged = []
    left_index, right_index = 0, 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1

    merged.extend(left[left_index:])
    merged.extend(right[right_index:])

    return merged


if __name__ == "__main__":
    first_string = "pedra"
    second_string = "perda"
    print(merge_sort(first_string))
    print(merge_sort(second_string))
