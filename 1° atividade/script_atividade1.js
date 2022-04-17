var n1,n2,resp;
n1=prompt("Digite um número");
n1=parseInt(n1);
n2=prompt("Digite outro número");
n2=parseInt(n2);
document.write("Nome do Aluno: Rafael Soares Melo RA:2221202311<br> ");
document.write("Primeiro número digitado: "+n1+" <br> Segundo número digitado: "+n2+"<hr>");
resp=(n1==n2);
document.write("Operador de Igualdade: (==) :" + n1 +" é igual a "  +n2 +" resposta :  " + resp+"<br>");
resp=(n1===n2);
document.write("Operador Idêntico: (===) :"+n1+" é idêntico a "+n2 +" resposta: "+ resp+"<br>");
resp=(n1!=n2);
document.write("Operador Não igual: (!=) :"+n1+" não é igual a "+n2+" resposta: " + resp+"<br>");
resp=(n1!==n2);
document.write("Operador Não idêntico (!==) : "+n1+" não é idêntico a " +n2+" resposta: "+ resp+"<br>");
resp=(n1>n2);
document.write("Operador sinal de maior (>): "+n1+" é maior que " +n2+" resposta: " + resp+"<br>");
resp=(n1<n2);
document.write("Operador sinal de menor: (<): "+n1+ " é menor que "+n2+" resposta: " + resp+"<br>");
resp=(n1>=n2);
document.write("Operador sinal de maior ou igual a : (>=) : "+n1+" é maior ou igual a "+n2+" resposta: " +resp+"<br>");
resp=(n1<=n2);
document.write("Operador sinal de menor ou igual a : (<=) : "+n1+" é menor ou igual a "+n2+" resposta: "  +resp+"<br>")

