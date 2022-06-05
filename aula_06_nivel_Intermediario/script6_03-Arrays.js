//        0    1    2     3 
var nota=[10, 8.5, 7.75, 9.5];
var num=[];
num[0]=120;
num[1]=100;
num[2]=2020;
var nome=new Array("José", "Paula", "Carla");

/*
Direcionar a nota 9.5 da var nota, para div com id="dv1"
direcionar o valor 120 da var num, para div com class="teste"
Mudar o conteúdo da tag h2 para Paula, a partir da var nome
*/
document.querySelector("#dv1").innerHTML=nota[3];
document.querySelector(".teste").innerHTML= num[0];
document.querySelector("h2").innerHTML=nome[1];
