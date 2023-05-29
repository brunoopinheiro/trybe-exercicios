# Problema
# Dada uma lista de números inteiros, de tamanho n,
# percorrer cada elemento da lista e substituí-lo pelo maior valor
# que estiver à sua direita na lista. Caso não exista um valor maior à direita
# do elemento, o elemento original deve ser mantido.

# Entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]
# Saida: [5, 5, 5, 5, 5, 5, 3, 3, 3]


# IMPLEMENTACAO 1 - MAIS SIMPLES
# def number_substitution(numbers: list[int]):
# for i in range(len(numbers)):
#     original_element = numbers[i]
#     right_max = original_element
#     for j in range(len(numbers)):
#         new_element = numbers[j]
#         if j > i and new_element > right_max:
#             right_max = new_element
#     numbers[i] = right_max


# IMPLEMENTACAO 2 - MENOS VARIAVEIS + MAIS ESPACO EM MEMORIA
# def number_substitution(numbers: list[int]):
#     for i in range(len(numbers)):
#         right_max = numbers[i]
#         for new_element in numbers[i + 1 :]:
#             if new_element > right_max:
#                 right_max = new_element
#         numbers[i] = right_max


def number_substitution(numbers: list[int]):
    if len(numbers) == 0:
        return

    last_position = len(numbers) - 1
    right_max = numbers[last_position]

    for i in range(last_position, -1, -1):
        if right_max >= numbers[i]:
            numbers[i] = right_max
        else:
            right_max = numbers[i]


def test_number_substitution():
    numbers_list = [2, 1, 2, 3, 0, 5, 1, 2, 3]
    number_substitution(numbers_list)
    assert numbers_list == [5, 5, 5, 5, 5, 5, 3, 3, 3]
