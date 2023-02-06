/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambrar con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Campos Tomás - Div X */

function Rectangulo () 
{
    let base;
    let altura;
    let area;

    altura = document.getElementById("txtIdLargo").value;
    base   = document.getElementById("txtIdAncho").value;

    altura  = parseFloat(altura);
    base    = parseFloat(base);
    area    = base * altura;

   
   alert("Usted debe comprar " +area+ " metros de alambre.");
   
}

function Circulo () 
{
	let radio;
    let area;
    const PI = 3.14;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    area  = PI * radio * radio;

    alert("Usted debe comprar " +area+ " metros de alambre.");
}

function Materiales () 
{
	let base;
    let altura;
    let area;
    let cemento;
    let cal;

    altura = document.getElementById("txtIdLargo").value;
    base   = document.getElementById("txtIdAncho").value;

    altura = parseFloat(altura);
    base   = parseFloat(base);

    area    = base * altura;
    
    cemento = area * 2;
    cal     = area * 3;

    alert("Usted necesita "+cemento+ " bolsas de cemento y "+cal+" bolsas de cal.");
}