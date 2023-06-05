def palindromes_recursive(word: str = None, start: int = 0, end: int = None):
    if type(word) != str or len(word) <= 0:
        return False

    if end is None:
        end = len(word) - 1

    if word[start] != word[end]:
        return False

    if start >= end:
        return True

    return palindromes_recursive(word, start + 1, end - 1)


def palindromes_iterative(word: str = None):
    if type(word) != str or len(word) <= 0:
        return False

    i = 0
    j = len(word) - 1

    while i < j:
        if word[i] != word[j]:
            return False
        i += 1
        j -= 1

    return True


if __name__ == "__main__":
    word = "COISA"
    print(palindromes_recursive(word))
    print(palindromes_iterative(word))
