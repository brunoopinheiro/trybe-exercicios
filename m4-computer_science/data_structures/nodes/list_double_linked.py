from double_node import DoubleNode


class DoubleLinkedList:
    def __init__(self):
        self.head = DoubleNode("HEAD")
        self.tail = DoubleNode("TAIL")
        self.head.next = self.tail
        self.tail.previous = self.head
        self.__length = 0

    def __str__(self) -> str:
        return f"DoubleLinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def __get_node_at(self, position):
        value_to_return = None
        if self.head.next != self.tail:
            value_to_return = self.head.next
            while position > 0:
                value_to_return = value_to_return.next
                position -= 1
        return value_to_return

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        node_value = DoubleNode(value)
        node_value.next = self.head.next
        node_value.previous = self.head
        node_value.next.previous = node_value
        self.head.next = node_value
        self.__length += 1

    def insert_last(self, value):
        node = DoubleNode(value)
        node.previous = self.tail.previous
        node.next = self.tail
        node.previous.next = node
        self.tail.previous = node
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        node = DoubleNode(value)
        position_node = self.__get_node_at(position)
        node.next = position_node
        node.previous = position_node.previous
        node.previous.next = node
        position_node.previous = node
        self.__length += 1

    def remove_first(self):
        value_to_remove = None
        if not self.is_empty():
            value_to_remove = self.head.next
            second_element = value_to_remove.next
            self.head.next = second_element
            second_element.previous = self.head
            value_to_remove.reset()
            self.__length -= 1
        return value_to_remove

    def remove_last(self):
        value_to_remove: DoubleNode = None
        if not self.is_empty():
            value_to_remove = self.tail.previous
            second_last: DoubleNode = value_to_remove.previous
            self.tail.previous = second_last
            second_last.next = self.tail
            value_to_remove.reset()
            self.__length -= 1
        return value_to_remove

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        value_to_remove: DoubleNode = None
        if not self.is_empty():
            value_to_remove = self.__get_node_at(position)

            previous_node: DoubleNode = value_to_remove.previous
            next_node: DoubleNode = value_to_remove.next

            previous_node.next = next_node
            next_node.previous = previous_node

            value_to_remove.reset()
            self.__length -= 1

        return value_to_remove

    def get_element_at(self, position):
        returned_value: DoubleNode = None
        value_to_return: DoubleNode = self.__get_node_at(position)
        if value_to_return:
            returned_value = DoubleNode(value_to_return.value)
        return returned_value
