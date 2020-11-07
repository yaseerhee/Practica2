
//VARIABLES
var inNombre;
var inApellido1;
var inApellido2;
var calculoAnhos;

//  OBJETO PERSONA
var persona ={
    nombre: "",
    pApellido: "" ,
    sApellido: "" , 
    aNacimiento: 0 ,
}

//  PREGUNTAS USUARIO
persona.nombre= prompt("¿Cuál es tu nombre?");
persona.pApellido= prompt("¿Cuál es tu primer apellido?");
persona.sApellido= prompt("¿Cuál es tu segundo apellido?");
persona.aNacimiento= prompt("¿En qué año naciste?");
//COMPROBACIÓN DE QUE EL AÑO DE NACIMIENTO ES REAL. (1900-2020);    
    while(persona.aNacimiento>2020 || persona.aNacimiento<1900 || isNaN(persona.aNacimiento)){
        persona.aNacimiento= prompt("¿En qué año naciste?");
    }

    while(
        !isNaN(persona.nombre)||
        !isNaN(persona.pApellido)||
        !isNaN(persona.sApellido)
        ){
            if(!isNaN(persona.nombre)){
                alert("Debe ser una cadena de texto, no un número");
                persona.nombre= prompt("¿Cuál es tu nombre?");
                
            }
            else if(!isNaN(persona.pApellido)){
                alert("Debe ser una cadena de texto, no un número");
                persona.pApellido= prompt("¿Cuál es tu primer apellido?");

            }
            else{
                alert("Debe ser una cadena de texto, no un número");
                persona.sApellido= prompt("¿Cuál es tu segundo apellido?");
            }

        }


    //METODO QUE MUESTRA UN TEXTO AL USUARIO
function enunciado() {
    document.write(
    "<link rel='stylesheet' href='estilos.css'>"+
    "<h1>¡Bienvenido!</h1>" +
    "<h2>¡ESTOS SON LOS DATOS QUE NOS HA FACILITADO!</h2>"
    );
}
    
//METODO ANHOS QUE VA A CUMPLIR EN 2020
function calculAnhos(){
    calculoAnhos = 2020 - persona.aNacimiento;
    console.log(calculoAnhos);
}

//METODO SACAR INICIALES DEL NOMBRE Y LOS APELLIDOS
function sacarIniciales(){
     inNombre = persona.nombre.charAt(0);
     inApellido1 = persona.pApellido.charAt(0);
     inApellido2 = persona.sApellido.charAt(0);

    console.log(inNombre,inApellido1,inApellido2);
}

//METODO QUE NOS MUESTRA TODO UNA VEZ RESPONDIDO A LAS PREGUNTAS
function mostrar(){
    enunciado();
    calculAnhos();
    sacarIniciales();

    document.write("<link rel='stylesheet' href='estilos.css'>"+
                    "<div id='contenedor'><div id='persona'><h2>Tu nombre es " + persona.nombre+ ".</h2> "+
                    "<h2>Tus apellidos son " + persona.pApellido + " " +
                     persona.sApellido + ".</h2>" 
                    +"<h2>Este año cumples o has cumplido " + calculoAnhos + " años.</h2>"+
                     "<h2>Las iniciales de tus nombres son: " + inNombre+inApellido1+inApellido2
                     +" .</h2></div></div>");
}


mostrar();