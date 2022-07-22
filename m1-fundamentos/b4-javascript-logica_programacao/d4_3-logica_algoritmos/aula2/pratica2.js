let word = "tryber"
let inverted = "";
for (let i = word.length - 1; i >= 0; i -= 1){
    inverted += word[i];
}
console.log(inverted);