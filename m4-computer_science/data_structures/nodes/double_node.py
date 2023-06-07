class DoubleNode:
    def __init__(self, value=None):
        self.value = value
        self.next = None
        self.previous = None

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"

    def reset(self):
        self.next = None
        self.previous = None
