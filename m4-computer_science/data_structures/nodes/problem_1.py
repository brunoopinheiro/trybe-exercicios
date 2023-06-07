from linked_list import LinkedList
from rich import print


if __name__ == "__main__":
    my_linked_list = LinkedList()
    my_linked_list.insert_first("Felps")
    my_linked_list.insert_first("Eli")
    my_linked_list.insert_first("Flavio")
    my_linked_list.insert_first("Bux")
    my_linked_list.insert_first("Will")

    print(my_linked_list)
    print(my_linked_list.get_mid_element())
