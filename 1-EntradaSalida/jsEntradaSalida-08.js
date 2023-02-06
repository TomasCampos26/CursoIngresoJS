/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
Campos Tomás - Div X */
function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;

	dividendo 	= document.getElementById("txtIdNumeroDividendo").value;
	divisor 	= document.getElementById("txtIdNumeroDivisor").value;

	dividendo 	= parseInt(dividendo);
	divisor 	= parseInt(divisor);
	resto		= dividendo % divisor;
	
	alert("El resto es: "+resto);
}
