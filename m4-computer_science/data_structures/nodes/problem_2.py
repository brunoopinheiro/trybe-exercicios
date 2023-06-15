from linked_list_guard import LinkedListGuard
from rich import print

if __name__ == "__main__":
    my_list = LinkedListGuard()

    my_list.insert_first("Felps")
    my_list.insert_last("Eli")
    my_list.insert_last("Flavio")

    print(my_list)
    print(my_list.head)
    print(my_list.tail)
