class Queue:
    def __init__(self):
        self.queue = list()

    def __str__(self):
        str_items = ""
        for i in range(len(self.queue)):
            value = self.queue[i]
            str_items += str(value)
            if i + 1 < len(self.queue):
                str_items += ", "

        return "Queue(" + str_items + ")"

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if len(self.queue) == 0:
            return None

        return self.queue.pop(0)


if __name__ == "__main__":
    elements = ["Milkshake", "Batata Frita", "Refrigerante"]
    content_queue = Queue()

    print(content_queue)
    for elem in elements:
        content_queue.enqueue(elem)
        print(content_queue)

    content_queue.dequeue()
    print(content_queue)
    print(content_queue.dequeue())
