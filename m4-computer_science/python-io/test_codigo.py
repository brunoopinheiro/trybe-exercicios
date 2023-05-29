import pytest
from codigo import is_odd, divide


def test_is_odd_return_true():
    """Para um número impar a função deve retornar o valor True"""
    assert is_odd(3) is True


def test_id_odd_return_false():
    """Para um número par a função deve retornar o valor False"""
    assert is_odd(2) is False


def test_divide_zero_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
