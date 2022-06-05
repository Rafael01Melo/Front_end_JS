//       0 , 1, 2, 3, 4 (posições)
var num=[10,20,30,40,50];
//length;// representa a quantidade de valores adicionado do tipo array
//ultima posição 4 // lenght -1 ( ele serve para puxar os valores da direita para a esquerda)
document.querySelector("#dv1").innerHTML="var num possui " +num.length+ "valores<hr>";
document.querySelector("#dv1").innerHTML+="todos os valores da var num:" +num+ "<hr>";
document.querySelector(".teste").innerHTML="Valor da primeira posição de num: "+num[0]+ "<hr>";
document.querySelector(".teste").innerHTML+="Valor da última posição de num: "+num[num.length-1]+"<hr>";


/*

colocar a saìda dos dois primeiros document.write (linhas 11 e 12), direcionar  para
id="dv1" e colocar document.write das linhas 13 e 14 direcionando class="teste".


document.write("var num possui "+tam+" valores<hr>");
document.write("Todos os valores da var num: "+num+"<hr>");
document.write("Valor da primeira posição de num: "+num[0]+"<hr>");
document.write("Valor da última posição de num: "+num[tam-1]+"<hr>");

*/