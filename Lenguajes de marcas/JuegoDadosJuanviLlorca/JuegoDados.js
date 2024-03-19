function dados() {
    let nuevoBox = document.createElement("div"); //Creamos una variable que lo que haga es crear un nuevo div.
    nuevoBox.className = "box"; //Esto hace que copie el formato de la clase que se llamen 'box'.
    nuevoBox.innerHTML = generarDado(); //Ponemos el div nuevo en el HTML.
    const parent = document.querySelector("main"); //Le decimos en que parte del HTML queremos que aparezca (en body no copia el esilo DUDA).
    parent.appendChild(nuevoBox); //Seleccionamos la variable que queremos que aparezca.
    //PONER COLOR ALEATORIO A LA CAJA GENERADA
    nuevoBox.style.backgroundColor = generarColor();
}

function generarDado() {
    numAleatorio();
    return dados.numAleatorio; //Una vez le asignamos un color aleatorio a la variable, devolvemos la propia variable
}

const dados = {
    1: "../../img/juegoDados/d1.png",
    2: "../../img/juegoDados/d2.png",
    3: "../../img/juegoDados/d3.png",
    4: "../../img/juegoDados/d4.png",
    5: "../../img/juegoDados/d5.png",
    6: "../../img/juegoDados/d6.png"
}


function tirarDados() {
    let jugador1 = ["1", "2", "3", "4", "5", "6"];
    let jugador2 = ["1", "2", "3", "4", "5", "6"];
    let i = 0;
    let j = 0;
    let total1 = 0;
    let total2 = 0;
    let dados1 = document.getElementById("player1").value;
    let dados2 = document.getElementById("player2").value;

    switch (dados1) { //Un swich del valor que se ponga en el input
        case "1":
            jugador1 = numAleatorio(); //Si coge programacion se podran todos los nombres de programacion en alumnos1
            break; //Necesario poner los break.
        case "2":
            for (i = 0; i < 2; i++) {
                jugador1[i] = numAleatorio(); 
            }
            break;
        case "3":
            for (i = 0; i < 3; i++) {
                jugador1[i] = numAleatorio(); 
            }
            break;
        case "4":
            for (i = 0; i < 4; i++) {
                jugador1[i] = numAleatorio(); 
            }
            break;
        case "5":
            for (i = 0; i < 5; i++) {
                jugador1[i] = numAleatorio(); 
            }
            break;
    }

    switch (dados2) { //Un swich del valor que se ponga en el input
        case "1":
            jugador2 = numAleatorio(); //Si coge programacion se podran todos los nombres de programacion en alumnos1
            break; //Necesario poner los break.
        case "2":
            for (i = 0; i < 2; i++) {
                jugador2 = numAleatorio(); 
            }
            break;
        case "3":
            for (i = 0; i < 3; i++) {
                jugador2 = numAleatorio(); 
            }
            break;
        case "4":
            for (i = 0; i < 4; i++) {
                jugador2 = numAleatorio(); 
            }
            break;
        case "5":
            for (i = 0; i < 5; i++) {
                jugador2 = numAleatorio(); 
            }
            break;
    }
    
    for (i = 0; i < jugador1.length; i++) { //Por ultimo los comparamos con un bucle anidado.
            total1 += jugador1[i];
    }

    for (j = 0; i < jugador2.length; i++) { //Por ultimo los comparamos con un bucle anidado.
        total1 += jugador1[j];
}
    document.getElementById("resultado1").innerHTML = jugador1; 
    document.getElementById("resultado2").innerHTML = total2;//Impresion de la variable
}


function numAleatorio () {
    return Math.floor(Math.random * 6) + 1;
}