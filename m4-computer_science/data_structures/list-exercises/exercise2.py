def shuffle_cards(cards: list[int]) -> list[int]:
    mid = len(cards) // 2
    left = cards[:mid]
    right = cards[mid:]
    shuffled_deck = []
    for i in range(len(left)):
        shuffled_deck.append(left[i])
        shuffled_deck.append(right[i])

    if len(right) > len(left):
        shuffled_deck.append(right[-1])

    return shuffled_deck


if __name__ == "__main__":
    cards = [1, 4, 4, 7, 6, 6]
    print(shuffle_cards(cards))
