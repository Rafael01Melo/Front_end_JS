//Operadores lógico - ! (not)
var a,b,res;
a=9;
b=10;
res=!(a<b);
document.write("res = "+res);

//Operadores lógicos - E - and - &&
// Operador && (and)
var a,b,c,d;
a=50;
b=120;
c=200;
d=(a<=b) && (a>=c); // d=(true)&&(false)  // d=false
document.write("d = "+d); // d=false
/* Condição 1 Condição 2 Resultado
        true true true
        true false false
        false true false
        false false false
*/