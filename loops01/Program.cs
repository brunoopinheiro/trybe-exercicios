// // Exemplos
// var count = 0;
// while (count < 10)
// {
//   Console.WriteLine("count " + count);
//   count++;
// }

// var count = 0;
// do
// {
//   Console.WriteLine("count " + count);
//   count++;
// }
// while (count < 10);

// for (int count = 0; count < 3; count++)
// {
//   Console.WriteLine("numero: " + count);
// }

// string[] names = new string[] { "Hulk", "Thor", "Loki" };
// foreach (var name in names)
// {
//   Console.WriteLine(name);
// }

// string[] teachers = new string[] { "Joel", "Tess", "Marlene" };
// string[] students = new string[] { "Ellie", "Joel", "Abby" };
// foreach (var teacher in teachers)
// {
//   Console.WriteLine("Professor: " + teacher + ". Estudante: ");
//   foreach (var student in students)
//   {
//     if (teacher == student)
//       break;
//     Console.WriteLine(student);
//   }
// }

// int[] votes = new int[] { 1, 3, 5, 4, 1, 3, 1, 2 };
// var count = 0;
// foreach (var vote in votes)
// {
//   if (vote > 3)
//     continue;
//   count++;
// }
// Console.WriteLine(count + ' votos validos');

public class Program
{
  public static void Main()
  {
    int numberOfPeople = 0;
    int numberOfChildren = 0;

    int age = 99;
    age = Convert.ToInt32(Console.ReadLine());

    while (age > 0)
    {
      Console.WriteLine("Informe a idade da pessoa. Informe 0 para sair.");
      age = Convert.ToInt32(Console.ReadLine());
      numberOfPeople++;
      if (age == 0) break;
      if (age < 18) numberOfChildren++;
    }

    double rateOfChildren = 0;
    if (numberOfPeople > 0)
    {
      rateOfChildren = 100 * numberOfChildren / numberOfPeople;
    }
    Console.WriteLine("Existe " + rateOfChildren + " % de criancas.");
  }
}