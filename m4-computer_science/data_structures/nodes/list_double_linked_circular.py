from double_node import DoubleNode


class CircularDoubleLinkedList:
    def __init__(self):
        self.head = DoubleNode("HEAD")
        self.head.previous = self.head
        self.head.next = self.head
        self.__length = 0

    def __str__(self):
        my_self = map(str, self.to_list())
        return f"CircularDoubleLinkedList(HEAD, {', '.join(my_self)}, HEAD)"

    def __len__(self):
        return self.__length

    def to_list(self):
        linked_list = []
        if self.head is None:
            return linked_list

        current: DoubleNode = self.head.next
        while current != self.head:
            linked_list.append(current.value)
            current = current.next
        return linked_list

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        node = DoubleNode(value)
        node.next = self.head.next
        node.previous = self.head
        node.next.previous = node
        self.head.next = node
        self.__length += 1

    def insert_last(self, value):
        node = DoubleNode(value)
        node.previous = self.head.previous
        node.next = self.head
        self.head.previous = node
        node.previous.next = node
        self.__length += 1

    def remove_first(self):
        value_to_remove: DoubleNode = None
        if not self.is_empty():
            value_to_remove = self.head.next
            second_node: DoubleNode = value_to_remove.next
            self.head.next = second_node
            second_node.previous = self.head
            value_to_remove.reset()
            self.__length -= 1
        return value_to_remove

    def remove_last(self):
        value_to_remove: DoubleNode = None
        if not self.is_empty():
            value_to_remove = self.head.previous
            second_last_node = value_to_remove.previous
            self.head.previous = second_last_node
            second_last_node.next = self.head
            value_to_remove.reset()
            self.__length -= 1
        return value_to_remove


if __name__ == "__main__":
    double = CircularDoubleLinkedList()
    print("\nA Lista esta vazia: ", double.is_empty(), double)
    print("[HEAD -> HEAD]")

    double.insert_last(1)
    double.insert_last(2)
    double.insert_last(3)
    double.insert_first(0)

    print("\nApós Inserir 1,2,3 do fim e 0 no início:\n", double)
    print("[HEAD -> 0 -> 1 -> 2 -> 3 -> HEAD]")

    double.remove_first()
    print("\nApós remover primeiro:\n", double)
    print("[HEAD -> 1 -> 2 -> 3 -> HEAD]")

    double.remove_last()
    print("\nApós remover último:\n", double)
    print("[HEAD -> 1 -> 2 -> HEAD]")

    # Provar que é circular, imprimir o anterior do primeiro
    print("Primeiro (head):", double.head.value)
    print("Anterior ao primeiro (head.previous):", double.head.previous.value)
