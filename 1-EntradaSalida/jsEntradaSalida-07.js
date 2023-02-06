/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Campos Tomás - Div X */ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultadoSuma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultadoSuma = numeroUno + numeroDos;

	alert("La suma es: "+resultadoSuma);
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultadoResta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultadoResta = numeroUno - numeroDos;

	alert("La resta es: "+resultadoResta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultadoMultiplicacion;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultadoMultiplicacion = numeroUno * numeroDos;
	
	alert("La multiplicación es: "+resultadoMultiplicacion);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultadoDivision;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultadoDivision= numeroUno / numeroDos
	alert("La división es: "+resultadoDivision);
}

