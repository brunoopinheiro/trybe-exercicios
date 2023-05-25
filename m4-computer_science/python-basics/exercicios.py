def maior(a, b):
    if a > b:
        return a
    elif b > a:
        return b
    else:
        return "iguais"


def media(lista):
    total = 0
    numero_elementos = len(lista)
    for elem in lista:
        total += elem

    return total / numero_elementos


def imprime_asteriscos(n):
    if n <= 0:
        return "N precisa ser maior que 0"
    for i in range(n):
        print("*" * n)
    return


def maior_nome(lista):
    maior = ""
    for name in lista:
        if len(name) > len(maior):
            maior = name

    return maior


if __name__ == "__main__":
    print(maior(5, 6))
    print(maior(6, 5))
    print(maior(1, 1))

    lista = [1, 2, 3, 4, 5, 6, 7, 8, 14, 15]
    print(media(lista))

    imprime_asteriscos(5)

    lista_nomes = ["Jose", "Lucas", "Nadia", "Fernanda", "Cairo", "Joana"]
    print(maior_nome(lista_nomes))
