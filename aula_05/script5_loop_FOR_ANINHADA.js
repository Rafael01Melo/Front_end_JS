var i,j,k;
for (i=0; i<3; i++){ // looping externo // exemplo Hora
    for (j=0; j<4; j++) { // looping interno // exemplo minuto
        for (k=0; k<2; k++) { // looping interno // exemplo segundos
        document.write(i+ " " +j+ " "+k+"<br>");
        }
    }
}
/*
A cada vez que é executado o looping externo e executado um ciclo completo no looping externo.

Saída:

i   j
0   0
0   1
0   2
0   3
1   0
1   1
1   2
1   3
2   0
2   1
2   2
2   3



*/