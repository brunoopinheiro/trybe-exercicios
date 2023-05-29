import json
import csv


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percen_by_category(book_count_by_cateogory, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_cateogory.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("books.json") as file:
        books = retrieve_books(file)

    book_count_by_category = count_books_by_categories(books)

    number_of_books = len(books)
    books_percentage_rows = calculate_percen_by_category(
        book_count_by_category, number_of_books
    )

    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
