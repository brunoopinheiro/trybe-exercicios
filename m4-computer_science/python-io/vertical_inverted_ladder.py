def vertical_inverted_ladder(word):
    for removed in range(len(word)):
        for index in range(len(word) - removed):
            print(word[index], end="")
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)
