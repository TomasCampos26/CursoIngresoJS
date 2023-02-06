/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Campos Tomás - Div X */
function mostrarAumento()
{
	let sueldo;
	let resultado;

	sueldo	  = document.getElementById("txtIdSueldo").value;
	sueldo	  = parseInt(sueldo);
	resultado = sueldo + (sueldo / 10);
	document.getElementById("txtIdResultado").value = resultado;

	alert("El resultado es: "+resultado);
}
