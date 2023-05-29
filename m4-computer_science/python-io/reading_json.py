import json

if __name__ == "__main__":
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]

    grass_types = [pkm for pkm in pokemons if "Grass" in pkm["type"]]

    for poke in grass_types:
        ident = f"{poke['national_number']} - {poke['name']}"
        types = poke["type"]
        print(f"{ident}: {types}")

    with open("grass_pokemons.json", mode="w") as grass_file:
        json.dump(grass_types, grass_file)
