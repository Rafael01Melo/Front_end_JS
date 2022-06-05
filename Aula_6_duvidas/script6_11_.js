var valores=[10,20,30,40,50];
document.write("<br>"+valores+"<hr>");
valores.shift();//valores=[20,30,40,50]; Exclui o primeiro item do array
document.write(valores+"<hr>");
valores.pop();//valores=[20,30,40]; Exclui o ultimo item do array
document.write(valores);