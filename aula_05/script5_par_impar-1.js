var num, res;
//num=prompt("Digite um número inteiro"); 01 opção
//num=parseInt(num);
num=parseInt(prompt("Digite um número inteiro"));

res=num%2;

//document.write(num+"//// "+res);

if(res==1){
    document.write(num + " Ímpar");
}
else{
    document.write(num + " Par");
}