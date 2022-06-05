/*
Criar um looping de:9193 até :9210
A saída mostrasse os emojis dos valores da faixa acima

*/

var i;
for(i=9193;i<9211;i++){
    document.querySelector("#dv1").innerHTML+="&#"+[i] + "   ";
}
/*
Desafio 2
De: 9800 até 9811
Mostrar o Emoji e o segno ("string")

*/
var signo=["Áries" , "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"]
for(var j=0; j<signo.length; j++) {
    document.querySelector(".teste").innerHTML+= "&#"+(9800+j)+" - "+signo[j]+"<br>";
}