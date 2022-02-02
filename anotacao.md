const ref = { a: '1', b: '2', c: '3' };
const key = Object.keys(ref).find((key) => ref[key] === '3');
console.log(key); // c


//const referencia = { a: 'txt1', b: 'text2', c:'casa' };
//console.log(Object.keys(referencia)[1]); // b
//console.log(Object.keys(referencia)); // [a,b,c]

const ref = { a: '1', b: '2', c: '3' };
const index = Object.keys(ref).indexOf('a');
const value = Object.values(ref)[index];
console.log(value);// 1 (valor de a)
console.log(index); // 0 (posicao de a)


//const t01= "Texto ao cuboss"
//let txt = t01.slice(9,9+6)
//console.log(txt)
//console.log(chave.a)
//console.log(chave[9])