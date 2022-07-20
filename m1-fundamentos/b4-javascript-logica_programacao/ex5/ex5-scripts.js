let resultadoProcesso;

const nota = 100;

if (nota >= 80) {
    resultadoProcesso = "aprovada";
}
else if (nota < 80 && nota >= 60) {
    resultadoProcesso = "lista";
}
else {
    resultadoProcesso = "reprovada";
}

switch (resultadoProcesso){
    case "aprovada":
        console.log("Parabens, voce foi aprovado(a)!");
        break;

    case "lista":
        console.log("Voce esta na nossa lista de espera");
        break;

    case "reprovada":
        console.log("Voce foi reprovado(a).");
        break;

    default:
        console.log("Nao se aplica.");
}