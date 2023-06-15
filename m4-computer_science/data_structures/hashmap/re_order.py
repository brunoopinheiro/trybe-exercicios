def get_order(orders: list[tuple]):
    orders_map = {person[0]: person[1] for person in orders}
    inv_orders_map = {person[1]: person[0] for person in orders}

    next_in_line = ""

    for person in orders_map:
        if person not in inv_orders_map:
            next_in_line = person

    result = [next_in_line]

    while next_in_line in orders_map:
        result.append(orders_map[next_in_line])
        next_in_line = orders_map[next_in_line]

    return result


if __name__ == "__main__":
    orders = [
        ("fernanda", "rafa"),
        ("fran", "daniel"),
        ("mirian", "gabriel"),
        ("matheus", "yasmin"),
        ("giovanni", "fernanda"),
        ("rafa", "fran"),
        ("daniel", "mirian"),
        ("gabriel", "matheus"),
    ]

    print(get_order(orders))
