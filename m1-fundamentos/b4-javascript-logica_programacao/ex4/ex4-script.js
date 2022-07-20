const currentHour = 11.26;
let message = "";

if (currentHour >= 4 && currentHour < 11){
    message = "Hmm, cheiro de cafe recem passado!"
}
else if (currentHour >= 11 && currentHour < 14){
    message = "Hora do almoco!!!";
}
else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro cafe da tarde?";
}
else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar! :D";
}
else if (currentHour >= 22 && currentHour < 4){
    message = "Nao deveriamos comer nada, e hora de dormir!";
}

console.log(message);

// Exercicio 2 - aula 4

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terca-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    message = "Oba, mais um dia de aprendizado na Trybe! >:D";
}
else if (weekDay === "sabado" || weekDay === "domingo"){
    message = "FINALMENTE, descanco merecido UwU";
}
else {
    message = "Esse dia ai nem existe."
}

console.log(message);