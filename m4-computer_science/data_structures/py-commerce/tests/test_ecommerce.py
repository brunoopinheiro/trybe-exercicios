from src.ecommerce import Customer


def test_customer_create():
    customer = Customer("Joao", "joao@gmail.com", "Rua 1, 123")
    assert customer.name == "Joao"
    assert customer.email == "joao@gmail.com"
    assert customer.address == "Rua 1, 123"
