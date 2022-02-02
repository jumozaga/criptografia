//Minha chave de criptografia
const chave = {
    0:'@e0000',1:'#e0000',2:'e#0010',3:'e@1010',4:'ee0010',
    5:'eg1010',6:'$@1010',7:'$e1010',8:'g#0101',9:'ee1110',
    a:"100@10",b:'100e00',c:'100f00',d:'100#00',e:'10e001',
    f:'0001$1',g:'1x0010',h:'1001$0',i:'0001q1',j:'111#01',
    k:'1000&1',l:'1x0011',m:'1000ef',n:'101@01',o:'00110g',
    p:'00001@',q:'1e0101',r:'001001',s:'000101',t:'11100e',
    u:'10e100',v:'110f01',x:'010001',w:'000111',y:'101011',
    z:'010110'," ":'000000'   
}//111#01 10e100 1x0011 0001q1 100@10 101@01 100@10 Juliana

function descodificar (texto){
  uncode = []
  texto.toString().toLowerCase()
  for(let i = 0;i<texto.length; i=i+6){    
    let cifrado = texto.slice(i,i+6)
    let key = Object.keys(chave).find((key) => chave[key] === cifrado);//retorna a propriedade da cifra(o valor)
    uncode.push(key)
  }
  texto = uncode.toString().toUpperCase().replace(/,/g, "").replace(/\./g, "")
  return console.log(texto)
}

function codificar (texto){
       //Um array para armazenar e trabalhar melhor com os dados
        const encode = []
        texto.toString().toLowerCase()
        for (let index = 0; index<texto.length; index++){    
          let letra = (texto.slice(index,index+1)).toLowerCase() //percorrendo o texto letra por letra (slice(0,1) pega a primeira letra)
          //console.log(letra)
          if (letra == "undefined" || letra == " " || letra == ""){
              letra = '000000';
          }else{
            letra = chave[letra]
          }
          
          encode.push(letra) //Preenchendo o array com cada letra
                     
    }
    //console.log(encode)
    texto = (encode.toString()).replace(/,/g, "").replace(/\./g, ""); //transformando o array em string e removendo as vírgulas do array
    return console.log(texto);

}
    
codificar("Juliana Mozaga");
descodificar('111#0110e1001x00110001q1100@10101@01100@100000001000ef00110g010110100@101x0010100@10')
    
    
   