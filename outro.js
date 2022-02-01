let text = 
document.querySelector("#input"),
output=document.querySelector("#output"),
encode=document.querySelector("#btn-encrypt"),
decode=document.querySelector("#btn-decrypt"),
copy=document.querySelector("#btn-copy");

const regex = 
new RegExp("^[a-z 0-9\b]");

function encrypt(e){
    return e.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat").toLowerCase()
}
function decrypt(e){
    return e.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u")}

function caracteres(e){
    return regex.test(e)?e:"ERROR: Não utilize acentos e nem letras maiúsculas."
}
encode.addEventListener("click",e=>{e.preventDefault(),output.textContent=caracteres(encrypt(text.value)),text.value=""}),
decode.addEventListener("click",e=>{e.preventDefault(),output.textContent=caracteres(decrypt(text.value)),text.value=""}),
copy.addEventListener("click",e=>{e.preventDefault(),output.select(),document.execCommand("copy"),text.value=""});