class Program
{
  static void Main(string[] args)
  {
    int numberOfExpenses = getNumberOfExpenses();
    int[,] expensesCost = new int[numberOfExpenses, 2];

    for (int i = 0; i < numberOfExpenses; i++)
    {
      for (int j = 0; j < 2; j++)
      {
        expensesCost[i, j] = getExpenseCostFromUser();
      }
    }

    int totalExpenses = 0;

    for (int i = 0; i < numberOfExpenses; i++)
    {
      for (int j = 0; j < 2; j++)
      {
        totalExpenses += expensesCost[i, j];
      }
    }

    Console.WriteLine("Total das Despesas: " + totalExpenses);
  }

  public static int getNumberOfExpenses()
  {
    Console.WriteLine("Entre com o numero de despesas: ");
    string? entry = Console.ReadLine();
    int convertInt = Convert.ToInt32(entry);
    return convertInt;
  }

  public static int getExpenseCostFromUser()
  {
    Console.WriteLine("Entre com a despesa: ");
    string? entry = Console.ReadLine();
    int convertInt = Convert.ToInt32(entry);
    return convertInt;
  }
}