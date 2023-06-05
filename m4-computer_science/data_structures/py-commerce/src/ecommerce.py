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


@dataclass
class Product:
    name: str
    unit_price: float
    stock_quantity: int = 0
