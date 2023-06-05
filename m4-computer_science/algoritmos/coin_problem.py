

def coin_problem(value: int, coins: list[int]):
    ordered_coins = sorted(coins, reverse=True)
    output = []

    separated_value = 0
    for coin in ordered_coins:
        if separated_value == value:
            break

        if coin < value:
            amount = (value - separated_value) // coin
            for j in range(amount):
                output.append(coin)
                separated_value += coin

    return output



if __name__ == "__main__":
    # inputs
    value = 101
    coins = [100, 50, 25, 10, 5, 1]
    output = coin_problem(value, coins)
    print(output)