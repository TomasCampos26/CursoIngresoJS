/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Campos Tomás - Div X */
function mostrar()
{
	let nombreIngresado;	//declaro la variable nombreIngresado

	nombreIngresado=prompt("Ingrese su nombre");  //lo ingresado por teclado lo asigno a la variable anterior

	document.getElementById("txtIdNombre").value= nombreIngresado;	//asigno  nombre ingresado a la caja de texto de html
}

