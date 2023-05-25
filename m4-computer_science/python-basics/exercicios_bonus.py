def ast_triangulo(n):
    if n > 0:
        for i in range(n):
            print("*" * (i + 1))


if __name__ == "__main__":
    ast_triangulo(1)
    ast_triangulo(5)
    ast_triangulo(7)
