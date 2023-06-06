def software_monitor(values: list[int]) -> int:
    # 1 - 0k
    # 0 - instabilidade
    max_interval = 0
    actual_interval = 0
    for v in range(len(values)):
        if values[v] == 0:
            max_interval = max(max_interval, actual_interval)
            actual_interval = 0
        if values[v] == 1:
            actual_interval += 1
    max_interval = max(max_interval, actual_interval)

    return max_interval


if __name__ == "__main__":
    test1 = [0, 1, 1, 1, 0, 0, 1, 1]
    test2 = [1, 1, 1, 1, 0, 0, 1, 1]
    print("Teste")
    print(f"Input: {test1}")
    print(software_monitor(test1))
    print("------------")
    print(f"Input: {test2}")
    print(software_monitor(test2))
    print("------------")
