import pytest
from email_validator import validate_email


def test_username_only_letters():
    assert validate_email("aaaa@nomewebsite.ext") is None


def test_username_letters_digits():
    assert validate_email("a1993@nomewebsite.ext") is None


def test_username_letters_digits_dashes():
    assert validate_email("aa-a@nomewebsite.etx") is None


def test_username_letters_digits_dashes_underscores():
    assert validate_email("a_a1a-a@nomewebsite.ext") is None


def test_username_starts_letter():
    assert validate_email("a@nomewebsite.ext") is None


def test_ext_three_chars():
    assert validate_email("abasd@nomeweb.ext") is None


def test_value_error_exception():
    with pytest.raises(ValueError):
        validate_email("a%a@nomewebsite.ext")
        validate_email("1@nomewebsite.ext")
