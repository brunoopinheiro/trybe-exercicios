//piramide com N asteriscos de base
//numero asteriscos inicia em 1 e aumenta 2 por linha ate N
//  numero de linhas = n+1/2
//numero de espacos
//  comeca em metade (arredondado baixo) de N
//  diminui 1 por linha

const n = 5 //numero de asteriscos na base

let nAst = 1;
for (let linha = ((n + 1) / 2) -1; linha >= 0; linha -= 1){//define n linhas
    let a = ""; //string vazia
    let nEspacos = linha;
    for (let espacos = 0; espacos < nEspacos; espacos += 1){//add espacos
        a += " ";
    }
    for (let ast = 1; ast <= nAst; ast += 1){//add asteriscos
        a += "*";
    }
    nAst += 2; //aumenta asteriscos prox iteracao
    console.log(a);
}