let conversor = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
}

function converteRomanos (stringRomanos){
    let romanos = "";
    romanos = stringRomanos;
    romanos = romanos.toLowerCase();

    let convertido = 0;
    for (let l = 0; l < romanos.length; l += 1){
        let letter = romanos[l];
        let nextLetter = romanos[l + 1];

        if(conversor[letter] < conversor[nextLetter]){
            let aux = conversor[nextLetter] - conversor[letter];
            convertido += aux;
            l += 1;
        } else {
            convertido += conversor[letter];
        }
    }
    return convertido;
}

let testString = "MCMXCIII";

console.log(converteRomanos(testString));