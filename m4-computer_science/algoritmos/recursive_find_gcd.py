def recursive_gcd(a, b):
    if b == 0:
        return a
    return recursive_gcd(b, a % b)
