var x;
x=10;
x=50;
x=2022;
x=6;
x=55;
x=17;
//document.write(x);
document.getElementById("dv1").innerHTML=x//ele busca o documento e coloca dentro de uma área expecifica dentro do html
document.querySelector("#dv1").innerHTML=x 
/* variavel simples só pode guardar um valor de cada vez, e sempre irá considerar 
o ultimo valor e amostrar*/

var k;
k=[10,50,2022, 6,55,17]; // variavel do tipo array
document.querySelector(".teste").innerHTML=k // query selecto funciona para qualquer ID ou class com formatação 
//document.write("<br>"+k);
/*
variavel array 
*/
document.querySelector("h2").innerHTML +="  Mudou!!";// Mudou apenas o primeiro H2, com a tag contatenar
// ele junta o conteudo 
document.querySelector("#dv1").innerHTML="<h1> Teste de h1 <h1/>"