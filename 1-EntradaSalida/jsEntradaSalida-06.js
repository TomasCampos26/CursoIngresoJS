/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Campos Tomás - Div X  */
function sumar()
{
	//parsing: convertir algo tipo cadena (string) a valor numerico y viceversa
	//parseInt: convierte cadena a numero entero      								
	//parseFloat: convierte dato cadena flotante a numero, acepta numero decimal
	//casting: convertir un tipo de dato numerico a
	
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultado = numeroUno+numeroDos;
	
	alert("La suma es " +resultado);
}

