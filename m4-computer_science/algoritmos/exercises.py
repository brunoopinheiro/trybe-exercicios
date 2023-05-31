from utils.cronometro import Cronometro
from random import shuffle
from bubble_sort import bubble_sort


# ordered_1 = list(range(1000))
# inversed_1 = list(reversed(range(1000)))
# random_1 = ordered_1[:]
# shuffle(random_1)

# ordered_10 = list(range(10000))
# inversed_10 = list(reversed(range(10000)))
# random_10 = ordered_10[:]
# shuffle(random_10)

# ordered_100 = list(range(100000))
# inversed_100 = list(reversed(range(100000)))
# random_100 = ordered_100[:]
# shuffle(random_100)

ordered_1m = list(range(1000000))
inversed_1m = list(reversed(range(1000000)))
random_1m = ordered_1m[:]
shuffle(random_1m)

# with Cronometro("Bubble Sort - 1000 - ordered"):
#     bubble_sort(ordered_1)

# with Cronometro("Bubble Sort - 1000 - inversed"):
#     bubble_sort(inversed_1)

# with Cronometro("Bubble Sort - 1000 - random"):
#     bubble_sort(random_1)

# with Cronometro("Bubble Sort - 10.000 - ordered"):
#     bubble_sort(ordered_10)

# with Cronometro("Bubble Sort - 10.000 - inversed"):
#     bubble_sort(inversed_10)

# with Cronometro("Bubble Sort - 10.000 - random"):
#     bubble_sort(random_10)

# with Cronometro("Bubble Sort - 100.000 - ordered"):
#     bubble_sort(ordered_100)

# with Cronometro("Bubble Sort - 100.000 - ordered"):
#     bubble_sort(inversed_100)

# with Cronometro("Bubble Sort - 100.000 - ordered"):
#     bubble_sort(random_100)

with Cronometro("Bubble Sort - 1M - ordered"):
    bubble_sort(ordered_1m)

with Cronometro("Bubble Sort - 1M - ordered"):
    bubble_sort(inversed_1m)

with Cronometro("Bubble Sort - 1M - ordered"):
    bubble_sort(random_1m)
