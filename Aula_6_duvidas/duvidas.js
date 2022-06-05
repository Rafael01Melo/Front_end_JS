var uf= ["SP ","RJ ","MJ ","ES "];
var txt="Hoje tem atividade!";
var class_teste=document.querySelectorAll(".teste")
document.querySelector("#nome").innerHTML=uf;
document.querySelector("h2").innerHTML+=" - "+ uf.length;// length ele conta os valores que tem dentro da variavel
document.querySelector("#nome").innerHTML+=uf[1]
// document.querySelector(".teste").innerHTML=txt;
// class_teste[3].innerHTML=txt
for (var i=0;i<class_teste.length;i++){
    class_teste[i].innerHTML=txt;
}

// for (var i=7;i<12;i++){document.write(i+" ");}
var a,b,c,d,e,f;
a=(5 =="5");
b=("88" === 88);
c=(5<=15) && (2==="2");
d=(5<=15) || (2==="2");
e=7;
f=e%3;
e-=f;
// document.querySelector(".atividade").innerHTML= a+ " " + b + " " + c + " " + d + " " + e + " " + f;
// document.write("resultado: "+f+" "+a+" "+c+" "+e);
// for (var i=3;i<11;i+=2){document.write(i+" ");}
document.querySelector(".atividade").innerHTML= a + " " + d + "<hr>";
// for (var i=10;i>2;i-=1){document.write(i+" ");}
// document.querySelector().innerHTML+=+ "<hr>";
for (var i=7;i<12;i++){document.write(i+" ");}