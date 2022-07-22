const n = 9 //numero de asteriscos na base

let nAst = 1;
for (let linha = ((n + 1) / 2) -1; linha >= 0; linha -= 1){//define n linhas
    let a = ""; //string vazia
    let nEspacos = linha;
    for (let espacos = 0; espacos < nEspacos; espacos += 1){//add espacos
        a += " ";
    }
    if (nEspacos === 0){ //se ultima linha, tudo *
        for (let i = 0; i < n; i += 1){
            a += "*";
        }
    }
    else{
        for (let ast = 1; ast <= nAst; ast += 1){//add meio
            if(ast === 1 || ast === nAst){
                a += "*";
            }
            else{
                a += " ";
            }
        }
    }
    nAst += 2; //aumenta asteriscos prox iteracao
    console.log(a);
}