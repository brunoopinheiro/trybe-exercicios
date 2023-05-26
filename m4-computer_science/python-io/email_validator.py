def validate_email(email: str):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Email should start with a letter")

    while email[index] != "@" and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit() and letter not in ("_", "-"):
            raise ValueError(
                "Username should contain only letters, "
                "digits, dashes and underscores"
            )
        index += 1

    index += 1

    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Domain should contain only letters, and digits")
        index += 1

    index += 1

    counter = 0
    while index < len(email):
        counter += 1
        index += 1
    if counter > 3:
        raise ValueError("Extension maximum length is 3")
    return None
