function agregaLista(){
  var contenedorTarjetas = document.getElementById('contenedor');
  var formulario = document.createElement('form');

  formulario.classList.add('formulario');

  var Texto = document.createElement('input');
  Texto.setAttribute('type','text');
  Texto.setAttribute('placeholder','Añadir una tarjeta');
  Texto.setAttribute('id','inputTarea');
  Texto.classList.add('textarea');
  Texto.value = '';

  var Boton = document.createElement('input');
  Boton.setAttribute('type','button');
  Boton.classList.add('btn');
  Boton.classList.add('btn-primary');
  Boton.classList.add('boton');
  Boton.setAttribute('value','Guardar');
  Boton.setAttribute('id','boton');

  formulario.appendChild(Texto);
  formulario.appendChild(Boton);
  contenedorTarjetas.appendChild(formulario);

  Boton.addEventListener('click', function(){
    myform.reset();
  })
  
}