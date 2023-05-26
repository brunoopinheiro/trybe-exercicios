if __name__ == "__main__":
    recovery_students = []
    try:
        with open("file.txt", mode="r") as grades_file:
            for line in grades_file:
                student_grade = line
                student_grade = student_grade.split(" ")
                if int(student_grade[1]) < 6:
                    recovery_students.append(student_grade[0] + "\n")

        with open("recu_students.txt", mode="w") as recu_students_file:
            print(recovery_students)
            recu_students_file.writelines(recovery_students)
    except FileNotFoundError:
        print("Arquivo inexistente")
    else:
        print("Arquivo manipulado e fechado com sucesso")
    finally:
        grades_file.close()
        recu_students_file.close()
        print("Fim da tentativa de ler o arquivo.")
