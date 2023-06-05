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

    merged = "".join(merged)
    return merged


def anagrams(first_word: str, second_word: str):
    result = False
    first_word = first_word.lower()
    second_word = second_word.lower()

    first_word = merge_sort(first_word)
    second_word = merge_sort(second_word)

    if len(first_word) != len(second_word):
        return (first_word, second_word, result)

    for i in range(len(first_word)):
        if first_word[i] != second_word[i]:
            return (first_word, second_word, result)

    result = True
    return (first_word, second_word, result)


if __name__ == "__main__":
    first = "Coxinha"
    second = "Empada"
    print(anagrams(first, second))
