var a,b;
a=prompt("Digite um número");
a=parseInt(a);
b=prompt("Digite outro número");
b=parseInt(b);
a+=b;
b+=a;

document.write("a = " + a);
document.write("<br>b = "+b);
