public class Program
{
  public static string IdentifyPolygon(int sideCount)
  {
    var name = string.Empty;
    switch (sideCount)
    {
      case < 3:
        name = "Nao e um poligono";
        break;
      case 3:
        name = "Triangulo";
        break;
      case 4:
        name = "Quadrado";
        break;
      case 5:
        name = "Pentagono";
        break;
      default:
        name = "Poligono nao identificado";
        break;
    }
    return name;
  }

  public static void Main()
  {
    Console.WriteLine("Informe o raio de um circulo (deve ser um numero inteiro)");
    string? response = Console.ReadLine();
    int radius = 0;
    var canConvert = Int32.TryParse(response, out radius);

    if (canConvert)
    {
      switch (radius)
      {
        case > 0:
          Console.WriteLine("maior que 0");
          break;
        case 0:
          Console.WriteLine("igual a zero");
          break;
        default:
          Console.WriteLine("menor que zero");
          break;
      }

      const double pi = 3.14159;
      double circunference = pi * (2 * radius);

      Console.WriteLine("A circunferencia de um circulo com raio " + radius + " e igual a " + circunference);
    }
    // else Console.WriteLine("O texto digitado nao e um numero inteiro.");
    else
    {
      Console.WriteLine("O texto digitado nao e um numero inteiro.");
    }
  }
}