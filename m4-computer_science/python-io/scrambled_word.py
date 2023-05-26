import random

WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]
MAX_ATTEMPTS = 3


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def game_flow(secret_word, max_attempts):
    attempted = 0
    guessed_correctly = False
    while attempted < max_attempts:
        guess = input("Guess: ")
        if guess == secret_word:
            print(f"You win! Secret word is {secret_word}")
            guessed_correctly = True
            break
        else:
            attempted += 1
            print("Wrong word. Try Again \n")
            print(f"Attempts left: {max_attempts - attempted}")

    if not guessed_correctly:
        print("You Lose.")


if __name__ == "__main__":
    secret_word, scrambled_word = draw_secret_word(WORDS)
    print(f"Scrambled word is {scrambled_word}")
    game_flow(secret_word, MAX_ATTEMPTS)
