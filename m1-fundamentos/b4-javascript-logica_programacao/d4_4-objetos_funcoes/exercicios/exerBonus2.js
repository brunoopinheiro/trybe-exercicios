function pares(vector){
    let pares = [];
    for (let a of vector){
        for (let b of a){
            if (b % 2 === 0){
                pares.push(b);
            }
        }
    }
    return pares;
}

let vector = [[1,2], [3, 4, 5, 6], [7, 8, 9, 10]];
console.log(pares(vector));