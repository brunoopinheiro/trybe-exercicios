import csv

with open("graduacao_unb.csv", encoding="utf-8") as file:
    grad_reader = csv.reader(file, delimiter=",", quotechar='"')

    header, *data = grad_reader

group_by_dpt = {}
for row in data:
    dpt = row[15]
    if dpt not in group_by_dpt:
        group_by_dpt[dpt] = 0
    group_by_dpt[dpt] += 1

with open("dpt_report.csv", "w", encoding="utf-8") as rep_file:
    writer = csv.writer(rep_file)

    headers = ["Departamentos", "Total de Cursos"]
    writer.writerow(headers)

    for department, grades in group_by_dpt.items():
        row = [
            department,
            grades,
        ]
        writer.writerow(row)
