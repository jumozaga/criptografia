//Minha chave de criptografia
const chave = {
    a:'100@10',b:'100e00',c:'100f00',d:'100#00',
    e:'10e001',f:'0001$1',g:'1x0010',h:'1001$0',
    i:'0001q1',j:'100#01',k:'1000&1',l:'1x0011',m:'1000ef',
    n:'101@01',o:'00110g',p:'00001@',q:'1e0101',r:'001001',
    s:'000101',t:'11100e',u:'10e100',v:'110f01',
    x:'001001',w:'000111',y:'101011',z:'010110',
    0:'@e0000',1:'#e0000',2:'e#0010',3:'e@1010',4:'ee0010',5:'eg1010',6:'$@1010',7:'$e1010',8:'g#0101'
}
console.log(chave)
//function descodificar (texto)){
    //console.log(chave);
    //for (i in chave){
        //const cifra = '3y';
        //let valor;    
        //for ( j in chave) {
            //if (chave[j] == cifra){
          //      valor = j;
        //    }     
      //  }    
    //    console.log(valor);
  //  }
//}

function codificar (texto){
       //Um array para armazenar e trabalhar melhor com os dados
        const encode = []
               
        for (let index = 0; index<(texto.length); index++){
    
        let letra = texto.slice(index,index+1) //percorrendo o texto letra por letra (slice(0,1) pega a primeira letra)
        if (letra == "undefined" || letra == " "){
            letra = 0;
        }
        letra = chave[letra]
      //  console.log(letra)
        encode.push(letra) //Preenchendo o array com cada letra
                     
    }
    texto = (encode.toString()).replace(/,/g, "").replace(/\./g, ""); //transformando o array em string e removendo as vírgulas do array
    return console.log(texto );

}
    
    codificar("Juliana Mozaga Neves");
    
    
   