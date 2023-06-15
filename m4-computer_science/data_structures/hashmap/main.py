from numero_frequente import count
from screening import screening
from intersection import intersection


nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]
print(count(nums))

print("-------------")

text = ["Ana", "ama", "Joao", "que", "ama", "Jose", "mas", "Jose", "nao"]
for key, value in screening(text).items():
    print(f"{key}: {value}")

print("-------------")

listA = [1, 2, 3, 4, 5, 6]
listB = [4, 5, 6, 7, 8, 9]
print(intersection(listA, listB))
