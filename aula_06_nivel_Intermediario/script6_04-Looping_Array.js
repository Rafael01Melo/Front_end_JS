var semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SABADO"];
for (var i = 0; i <7; i++) {
document.querySelector("#dv1").innerHTML=semana[i] + " é o" + (i+1) + "o dia da semana!<br>";
}
// i=1;
// document.querySelector("#dv1").innerHTML=semana[i];

/*
mudar o document.write abaixo para querySelector document.write(semana[i]
    + )*/