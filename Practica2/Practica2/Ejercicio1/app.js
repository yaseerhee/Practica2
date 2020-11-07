// VARIABLES

var numAlumnos=1;
var Alumnos = [];
var aNotas = [];
var sum=0;
var control = 0;

  //FUNCION PRINCIPAL
function evaluarClase() {
  infoAlumnos();
  enunciado();
  generarInputs();
  generarBotones();
}

 //METODO QUE MUESTRA UN TEXTO AL USUARIO
function enunciado() {
  document.write(
    "<h1>Bienvenido a la clase de DAW2</h1>" +
      "<h2>¡INTRODUZCA LAS NOTAS!</h2>"
  );
}

function infoAlumnos(){
  //  PEDIMOS EL NUMERO DE ALUMNOS (EVITAMOS QUE INTRODUZCA UN VALOR NO NUMÉRICO O UN CERO);
  //  TRATAMOS EL CANCELAR DEL PROMPT PARA OBLIGARLE A METER UN VALOR NUMÉRICO.
  var opciones = false;
  while (opciones == false || numAlumnos == null || numAlumnos == 0 || isNaN(numAlumnos)) {
    if(numAlumnos == null || numAlumnos == 0 || isNaN(numAlumnos)){
      alert(
        "Usted ha introducido un valor no numérico o un valor menor que cero "
      );
    }
    numAlumnos = Number(
      prompt("Introduce el número de Alumnos de esta clase: ")
    );
    opciones = confirm(
      numAlumnos + " Este es el numero de alumnos ¿está seguro? "
    );
  }
}

//GENERADOR DE INPUTS POR ALUMNO
function generarInputs(){
  for (let i = 0; i < numAlumnos; i++) {
    Alumnos[i] = prompt("Introduce el nombre del alumno " + (i+1));
    while(Alumnos[i] == null || Alumnos[i] === "" || !isNaN(Alumnos[i])){
      alert("Introduzca el nombre del Alumno");
      Alumnos[i] = prompt("Introduce el nombre de este alumno " + (i+1));
    }
      document.write(
        '<link rel="stylesheet" href="estilos.css">'+
        '<div id="resultado">'+
        '<h2>Alumno nº ' + (i + 1) + '</h2>' +
        '<table>'+
          '<tr><th>Nombre</th><th>Nota</th></tr>' +
          '<tr><td id="nombre'+i+'"></td><td><input type="number" min="0" max="10" id="nota'+i+'"></td></tr>' +
         "</table>"+
        "</div>"
      );
        document.getElementById("nombre"+i).innerHTML = Alumnos[i];
  }
}

//METODO QUE COMPRUEBA LOS INPUT, EN EL CASO DE QUE INCUMPLA ALGO ALERTA AL USUARIO
function comprobar(){
  for (let i = 0; i < numAlumnos; i++) {
    var notas = document.getElementById("nota" + i).value;
    //CONTROL DE QUE EL INPUT NO SEA SUPERIOR O INFERIOR A 10.
    aNotas[i]= notas;
    if (aNotas[i] > 10 || aNotas[i] < 0|| isNaN(aNotas[i])) {
      alert(
        "Has introducido un valor erróneo en notas " +
          notas +
          " .Cambialo para poder continuar con los calculos."
      );
      notas = "null";
    } else {
      confirm("La nota que le has puesto a " + Alumnos[i] + " es " + notas + ". ¿Es correcto?");
      aNotas[i]= Number(notas);
    }
  }
}

//GENERA LOS BOTONES QUE SE PIDEN EN LA PRACTICA
function generarBotones() {
  //BOTON COMPROBAR
  document.write('<link rel="stylesheet" href="estilos.css"><div id="boton2">' +
  '<input id="boton" type="submit" value="Comprobar" onclick="comprobar()"></div>'+
  //BOTON LIMPIAR
  '<input id="boton" type="submit" value="Limpiar Datos" onclick="limpiar()">' +
  //BOTON PARA REFRESCAR
  '<input id="boton" type="submit" value="Refrescar Página" onclick="refrescar()">'+
  //BOTON MOSTRAR VENTANA
  '<input id="boton" type="submit" value="Calcula Estadísticas" onclick="control++;if(control == 1){mostrarVentana();}else{desactivaBoton(this.id);}"></div>'
  );
}


//METODO QUE LIMPIA LOS INPUTS
function limpiar() {
  for (let i = 0; i < numAlumnos; i++) {
    document.getElementById("nota" + i).value = " ";
  }
}

//METODO QUE REFRESCA LA PAGINA
function refrescar() {
  location.reload();
}

//METODO QUE HACE APARECER LA VENTANA CON LOS RESULTADOS
function mostrarVentana(){
  var ventanaNotas;
  ventanaNotas = window.open("","VentanaNotas", "height=600,width=600" );
  var maximo, media, minimo;
  //SACA EL MAXIMO
  maximo= Math.max.apply(null, aNotas);
  //SACA EL MINIMO
  minimo= Math.min.apply(null,aNotas);
  
  //CALCULO DE LA MEDIA
  for (let i = 0; i < numAlumnos; i++) {
    sum=sum +aNotas[i];
  }

  media=sum/numAlumnos;
  //REDONDEA LA MEDIA
  media = Math.round(media * 100) / 100;
  //MUESTRA LA MEDIA POR LA VENTANA 
  ventanaNotas.document.write('<link rel="stylesheet" href="estilos.css">'+
                              '<div id="resultado">'+
                                '<h1>Nota máxima:</h1><h1 id="maximo"></h1>'+
                                '<h1>Nota media:</h1><h1 id="media"></h1>'+
                                '<h1>Nota mínima:</h1><h1 id="minimo"></h1>'+
                              '</div>');

  ventanaNotas.document.getElementById("maximo").innerHTML = maximo;
  ventanaNotas.document.getElementById("media").innerHTML = media;
  ventanaNotas.document.getElementById("minimo").innerHTML = minimo;
}

//METODO QUE DESACTIVA EL BOTON DE CALCULONOTAFINAL Y ASÍ SOLO ACEPTA UN CALCULO
//Y NO GENERA UN RESULTADO POR CADA CLICK
function desactivaBoton(id) {
  document.getElementById(id).disabled = true;
}
