def nota_partida(escolhas, adivinhas):
    return max(escolhas.difference(adivinhas))


def nota_redutor(escolhas, adivinhas):
    return min(escolhas.difference(adivinhas))


def nota_individual(escolhas, adivinhas):
    set_escolhas = set(escolhas)
    set_adivinhas = set(adivinhas)

    return nota_partida(set_escolhas, set_adivinhas) - nota_redutor(
        set_escolhas, set_adivinhas
    )


def quem_ganhou_blefe(jogadas):
    jogadores = list(jogadas.keys())

    primeira_nota = nota_individual(jogadas[jogadores[0]], jogadas[jogadores[1]])
    segunda_nota = nota_individual(jogadas[jogadores[1]], jogadas[jogadores[0]])

    if primeira_nota > segunda_nota:
        return jogadores[0]
    elif primeira_nota < segunda_nota:
        return jogadores[1]
    else:
        return None
