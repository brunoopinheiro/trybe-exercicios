import re
from dataclasses import dataclass


class Customer:
    def __init__(self, name, email, address) -> None:
        self.name = name
        self.__email = email
        self.address = address

    def __str__(self) -> str:
        return f"{self.name} <{self.email}>"

    @property
    def email(self):
        return self.__email

    @email.setter
    def email(self, value):
        if not re.match(r"[^w]+@[^w]+\.[^w]+", value):
            raise ValueError("E-mail invalido!")
        self.__email = value

    def show_details(self):
        print(
            f"""
            - Nome: {self.name}
            - Email: {self.email}
            - Endereco: {self.address}
            """
        )


class PremiumCustomer(Customer):
    def __init__(
        self, name: str, email: str, address: str, reward_points: int = 0
    ) -> None:
        super().__init__(name, email, address)
        self.reward_points = reward_points

    def add_reward_points(self, points: int):
        self.reward_points += points

    def show_details(self):
        super().show_details()
        print(f"Pontos: {self.reward_points}")


@dataclass
class Product:
    name: str
    unit_price: float
    stock_quantity: int = 0


class ShoppingCart:
    def __init__(self) -> None:
        self._items: list[tuple[Product, int]] = []

    def add_item(self, product_quantity: tuple[Product, int]):
        self._items.append(product_quantity)

    def items_quantity(self):
        return sum(item[1] for item in self._items)

    def total_price(self):
        return sum(p.unit_price * q for p, q in self._items)
