var numero;

do {
    numero = prompt("Ingrese un numero entero mayor a 17");
    if(numero <= 17) 
        alert("numero invalido...");
}while(numero<=17);

document.write("Ingreso el numero: " , numero) ;

