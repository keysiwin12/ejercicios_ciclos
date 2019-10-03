var num;

num = prompt("Ingrese numero para genear su tabla de multiplicar");

document.writeln("Tabla de multiplicar del : ",num,"<br>");


for(var i = 1 ; i <= 12 ; i++) {
    document.write(i + " x " + num + " = " , i*num , "<br>")
}