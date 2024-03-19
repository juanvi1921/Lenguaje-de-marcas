//funcion que cuando cliques un boton el fondo de la caja cambie de color

function cambiarColor(id) { //Declaramos la funcion.
    let cambiarColorBox1; //Esto es la variable de la funcion.
    cambiarColorBox1 = document.getElementById(id); //Para todas las cajas le decimos que coja el id e los elementos en vez de pasarle uno directamente.
    cambiarColorBox1.style.backgroundColor = colorAleatorio(); //Le decimos a que color cambiar el fondo llamando a la fiuncion de cambiar color.
}

//Ejercicio de cambiar en aleatorio el color de las cajas.

function colorAleatorio() {
    let colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16); //Preguntar porque el toString...!!
    document.getElementById(id).style.backgroundColor = colorAleatorio;
}
//Ejercicio cambiar color de las cajas impares a un color y de las pares a otro color.

function cambiosParImpar(id) {
    if (id == "box1" || id == "box3" || id == "box5") {
        document.getElementById("box1").style.backgroundColor = "green"; //Entre parentesi el id que queremos cambiar, si ponemos solo id cambiara solo donde hagamos click.
        document.getElementById("box3").style.backgroundColor = "green";
        document.getElementById("box5").style.backgroundColor = "green";
    } else {
        document.getElementById("box2").style.backgroundColor = "blue";
        document.getElementById("box4").style.backgroundColor = "blue";
    }
}

//Ejercicio de poner un reset de los colores.

function reset() {
   location.href = "index.html"; //Actualiza la pagina a como estaba originalmente
}

//Ejercicio de cambiar texto de las cajas.

function cambiaTexto() {
    let boxAleatorio = 'box' + Math.floor(Math.random() * 6).toString(6); //Creamos una variable que tenga como valor uno de los box de forma aleatoria
    document.getElementById(boxAleatorio).innerHTML = "Hola";            //Se pone 'box' para que agarre todos los id que empiezan por box
}                                                                        //Se * 6 por que empieza a contar desde el 0
//El Math.floor lo que hace es castear el Math.random (que es double) a int
//Preguntar duda de porque a veces no genera numero aleatorio...!!!!
// console.log(lo que queremos ver);

function nuevoBox() {
    let nuevoBox = document.createElement("div"); //Creamos una variable que lo que haga es crear un nuevo div.
    nuevoBox.className = "box"; //Esto hace que copie el formato de la clase que se llamen 'box'.
    nuevoBox.innerHTML = "Esto es un div nuevo"; //Ponemos el div nuevo en el HTML.
    const parent = document.querySelector("main"); //Le decimos en que parte del HTML queremos que aparezca (en body no copia el esilo DUDA).
    parent.appendChild(nuevoBox); //Seleccionamos la variable que queremos que aparezca.
    //PONER COLOR ALEATORIO A LA CAJA GENERADA
    nuevoBox.style.backgroundColor = generarColor();
}

function generarColor() {
    let colorAleatorio;
    colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return colorAleatorio; //Una vez le asignamos un color aleatorio a la variable, devolvemos la propia variable
}




