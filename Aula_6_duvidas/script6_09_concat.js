const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");


var notas=[10,9,8];
var outras_notas=[4,3,2,1];
// document.querySelector("#dv").innerHTML=notas+" <hr>";
id_dv.innerHTML=notas + "<hr>";
var novas_notas=notas.concat(7,6,5);
// document.querySelector(".teste").innerHTML=novas_notas + "<hr>";
class_teste.innerHTML=novas_notas + "<hr>";
class_teste.style.color="red";
var junta_tudo=novas_notas.concat(outras_notas);
// document.querySelector("#nome").innerHTML=junta_tudo + "<hr>";
id_nome.value=junta_tudo;
// placeholder e o nome sombreado dentro da caixa 

