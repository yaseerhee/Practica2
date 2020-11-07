var numAlumnos;
var Alumnos = [];

function evaluarClase() {
  // PEDIMOS EL NUMERO DE ALUMNOS (EVITAMOS QUE INTRODUZCA UN VALOR NO NUMÉRICO O UN CERO);
  //  TRATAMOS EL CANCELAR DEL PROMPT PARA OBLIGARLE A METER UN VALOR NUMÉRICO.
  numAlumnos = Number(prompt("Introduce el número de Alumnos de esta clase: "));
  while (numAlumnos == null || numAlumnos == 0 || isNaN(numAlumnos)) {
    alert(
      "Usted ha introducido un valor no numérico o un valor menor que cero "
    );
    numAlumnos = Number(
      prompt("Introduce el número de Alumnos de esta clase: ")
    );
  }
  var opciones = confirm(
    numAlumnos + " Este es el numero de alumnos ¿está seguro? "
  );
  if (opciones == true) {
    console.log("Confirmado");
  } else {
    numAlumnos = Number(
      prompt("Introduce el número de Alumnos de esta clase: ")
    );
    while (numAlumnos == null || numAlumnos == 0 || isNaN(numAlumnos)) {
      alert(
        "Usted ha introducido un valor no numérico o un valor menor que cero "
      );
      numAlumnos = Number(
        prompt("Introduce el número de Alumnos de esta clase: ")
      );
    }
  }

  for (let i = 0; i < numAlumnos; i++) {
    Alumnos[i] = prompt("Introduce el nombre de este alumno ");
    // document.write(
    //   '<link rel="stylesheet" href="estilos.css"><div id="contenedor"><h2>' +
    //     Alumnos[i] +
    //     "</h2><input id=alumno" +
    //     i +
    //     ' type="number" min="0" max="10"></div> <br/>'
    // );
  }
}
