def recursive_sum(n):
    if n == 1:
        return n
    return n + recursive_sum(n - 1)


if __name__ == "__main__":
    print(recursive_sum(4))
