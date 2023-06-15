class Employee:
    def __init__(self, id_num, name) -> None:
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self) -> None:
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        if not self.has(id_num):
            return

        address = self.get_address(id_num)
        index = None
        for i, emp in enumerate(self._buckets[address]):
            if emp.id_num == id_num:
                index = i
                break

        self._buckets[address].pop(index)

        updated = Employee(id_num, new_name)
        self.insert(updated)


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    buckets = HashMap()

    for emp in employees:
        new_emp = Employee(emp[0], emp[1])
        buckets.insert(new_emp)

    emp23 = buckets.get_value(23)
    print(f"Employee 23: {emp23}")

    emp10 = buckets.get_value(10)
    print(f"Employee 10 [Old Value]: {emp10}")

    buckets.update_value(10, "name30")
    emp10 = buckets.get_value(10)
    print(f"Employee 10: {emp10}")
