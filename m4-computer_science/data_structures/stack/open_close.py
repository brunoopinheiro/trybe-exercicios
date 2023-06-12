from stack import Stack


def is_valid(sequence: str) -> bool:
    if (len(sequence) % 2 != 0) or (sequence == ""):
        return False

    stack = Stack()
    for char in sequence:
        if char not in ["(", ")", "{", "}", "[", "]"]:
            return False

        if char in ["(", "[", "{"]:
            stack.push(char)
        elif char == ")" and not stack.is_empty() and stack.peek() == "(":
            stack.pop()
        elif char == "]" and not stack.is_empty() and stack.peek() == "[":
            stack.pop()
        elif char == "}" and not stack.is_empty() and stack.peek() == "{":
            stack.pop()
        else:
            return False

    return stack.is_empty()


if __name__ == "__main__":
    print(is_valid("()"))  # True
    print(is_valid("{)"))  # False
    print(is_valid("({})"))  # True
    print(is_valid("({}[]({[]}))"))  # True
