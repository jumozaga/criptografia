//Minha chave de criptografia
const chave = {
    0:'@e0000',1:'#e0000',2:'e#0010',3:'e@1010',4:'ee0010',
    5:'eg1010',6:'$@1010',7:'$e1010',8:'g#0101',9:'ee1110',
    a:"100@10",b:'100e00',c:'100f00',d:'100#00',e:'10e001',
    f:'0001$1',g:'1x0010',h:'1001$0',i:'0001q1',j:'111#01',
    k:'1000&1',l:'1x0011',m:'1000ef',n:'101@01',o:'00110g',
    p:'00001@',q:'1e0101',r:'001001',s:'000101',t:'11100e',
    u:'10e100',v:'110f01',x:'010001',w:'000111',y:'101011',
    z:'010110'    
}//111#01 10e100 1x0011 0001q1 100@10 101@01 100@10 Juliana

const key = Object.keys(chave).find((key) => chave[key] === '100@10');
console.log(key); 





function descodificar (texto){
  uncode = []
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z']
  const num = [0,1,2,3,4,5,6,7,8,9]
  texto.toString().toLowerCase()

  for(let i = 0;i<texto.length; i=i+6){    
    let cifrado = texto.slice(i,i+6)  
    uncode.push(cifrado)
    //console.log(cifrado)  
      for (let j = 0; j<(uncode.length); j++){
        let al = alpha[j]
       //console.log(chave.al)
        let nu = num[j]
       // console.log(nu)
       // console.log(cifrado)
          if(uncode[j] === chave.al){
            uncode[j] = j
            //console.log(al)
          }else if (chave[nu] == cifrado){
            //console.log(chave[nu])
          }else{
            //console.log(chave.al)
          }
      }
  }
 //console.log(uncode)   
}
descodificar('111#0110e1001x00110001q1100@10101@01100@10')


function codificar (texto){
       //Um array para armazenar e trabalhar melhor com os dados
        const encode = []
        texto.toString().toLowerCase()
        for (let index = 0; index<texto.length; index++){    
          let letra = (texto.slice(index,index+1)).toLowerCase() //percorrendo o texto letra por letra (slice(0,1) pega a primeira letra)
          //console.log(letra)
          if (letra == "undefined" || letra == " " || letra == ""){
              letra = 0;
          }
          letra = chave[letra]
          encode.push(letra) //Preenchendo o array com cada letra
                     
    }
    //console.log(encode)
    texto = (encode.toString()).replace(/,/g, "").replace(/\./g, ""); //transformando o array em string e removendo as vírgulas do array
    return console.log(texto);

}
    
//codificar("Juliana");
    
    
   