/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Campos Tomás - Div X */
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultadoSuma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    resultadoSuma= precio1+precio2+precio3;

    alert("La suma de los precios es: "+resultadoSuma);
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultadoPromedio;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    resultadoPromedio = (precio1+precio2+precio3) / 3;

    alert("El promedio de los precios es: "+resultadoPromedio);
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let precioFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    precioFinal = (precio1+precio2+precio3) + (precio1+precio2+precio3)* 0.21;

    alert("El precio final es: "+precioFinal);
}