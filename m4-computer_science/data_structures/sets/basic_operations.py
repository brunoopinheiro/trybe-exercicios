conjunto_a = set()

conjunto_b = set([1, 1, 2, 3, 3, 3])

conjunto_a.add(5)
conjunto_a.add(3)
conjunto_a.add(0)
conjunto_a.add("elemento")

conjunto_b.remove(3)

# conjunto_b.remove(3) - repetir a operacao acarretaria em erro,
# ja que o elemento nao esta mais presente.

conjunto_b.discard(3)  # Nao da erro caso o elemento nao exista no set

some_element = conjunto_a.pop()  # Retorna um elemento aleatorio do set

conjunto_b.clear()

if 2 in conjunto_a:
    print("2 esta em A")

if 7 not in conjunto_a:
    print("7 nao esta em A")
