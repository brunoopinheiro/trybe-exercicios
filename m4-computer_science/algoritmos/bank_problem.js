const contas = [
  { numero: 12345, saldo: 1000 },
  { numero: 54321, saldo: 500 },
  { numero: 98765, saldo: 2500 },
];

// Operacao transferencia entre contas
// Verifica se conta de origiem e destino existem. Indicar com "Conta nao Existe"
// Verifica se saldo suficiente. "Saldo Insuficiente" ou "Transferencia realizada com sucesso."


// input -
// Verifica - id conta origem, id conta destino
  // Find conta origem
  // Verifica saldo >= valor transferencia
  // Find conta destino
  // Atualiza saldo

function accTransfer(idOrigin, idDestiny, amount) {
  const origin = contas.find((acc) => acc.numero === idOrigin);
  const destiny = contas.find((acc) => acc.numero === idDestiny);
  if (!origin || !destiny) return "Conta não existe";
  if (typeof amount !== "number") return "Valor Incorreto";
  if (origin.saldo < amount) return "Saldo insuficiente";
  try {
    origin.saldo -= amount;
    destiny.saldo += amount;
    return "Transferência realizada com sucesso."
  } catch (error) {
    console.error(error);
  }
}

// console.log(accTransfer(12345, 54321, 999));
// console.log(accTransfer(135246, 12345, 100));
console.log(accTransfer(12345, 54321, 1000));
console.log(contas);