from node import Node


class LinkedListGuard:
    def __init__(self) -> None:
        self.head = Node("HEAD")
        self.tail = self.head
        self.__length = 0

    def __repr__(self) -> str:
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head.next

        if self.head.next is None:
            self.tail = first_value

        self.head.next = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)
        last_value = Node(value)
        self.tail.next = last_value
        self.tail = last_value
        self.__length += 1

    def is_empty(self):
        return not self.__length
