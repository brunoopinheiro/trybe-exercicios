const n = 5;

for (let l = n - 1; l >= 0; l -= 1){
    let a = "";
    for (let c = 1; c <= n; c += 1){
        if (c <= l){
            a += " ";
        }
        else{
            a += "*";
        }
    }
    console.log(a);
}