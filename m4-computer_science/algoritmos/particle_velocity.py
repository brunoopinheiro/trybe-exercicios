def particle_velocity(moments_arr):
    if moments_arr is None or len(moments_arr) < 3:
        # print("Invalid")
        return 0

    ocurrencies = 0

    for i in range(len(moments_arr) - 2):
        for j in range(i + 1, len(moments_arr) - 1):
            if (
                moments_arr[j + 1] - moments_arr[j]
                == moments_arr[i + 1] - moments_arr[i]
            ):
                ocurrencies += 1
            else:
                break

    return ocurrencies if ocurrencies < 1000000000 else -1


if __name__ == "__main__":
    input = [-1, 1, 3, 3, 3, 2, 3, 2, 1, 0]
    # input = [-1, 1, 3]
    out = particle_velocity(input)
    print(f"Occurencies: {out}")
