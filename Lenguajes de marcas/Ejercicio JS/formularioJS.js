function suma() {
    let totalSuma; //Creamos la variable del total de la suma.
    let valor1 = parseInt(document.getElementById(1.1).value); //Creamos las variables que cogeran los datos pasados por los input  y le marcamos que id seran
    let valor2 = parseInt(document.getElementById(1.2).value); //El parseInt es para que el valor lo detecte como int. El .value es para obtener el valor de un elemento en el input.

    totalSuma = valor1 + valor2; //Realizamos suma. Al ser suma de dos int no es necesario especificar que el resultado va a ser un int.

    document.getElementById("totalSuma").textContent = "Resultado: " + totalSuma; //Reemplazamos lo que tenemos en el output de id "totalSuma" con el .textContent y le decimos por que queremos reemplazarlo.
}

function resta() {
    let totalResta; 
    let valor1 = parseInt(document.getElementById(2.1).value); 
    let valor2 = parseInt(document.getElementById(2.2).value); 

    totalResta = valor1 - valor2; 

    document.getElementById("totalResta").textContent = "Resultado: " + totalResta; 
}

function multiplicacion() {
    let totalMulti; 
    let valor1 = parseInt(document.getElementById(3.1).value); 
    let valor2 = parseInt(document.getElementById(3.2).value); 

    totalMulti = valor1 * valor2; 

    document.getElementById("totalMulti").textContent = "Resultado: " + totalMulti; 
}

function division() {
    let totalDivision; 
    let valor1 = parseInt(document.getElementById(4.1).value); 
    let valor2 = parseInt(document.getElementById(4.2).value); 
    
    if (valor1 == 0 && valor2 == 0) {
        document.getElementById("totalDivision").textContent = "No se puede dividir 0/0" 
    } else {
        totalDivision = valor1 / valor2;
        document.getElementById("totalDivision").textContent = "Resultado: " + totalDivision;
    }
}

function ecuacion() {
    let totalEcuacion1;
    let totalEcuacion2;
    let A = parseInt(document.getElementById(5.1).value); 
    let B = parseInt(document.getElementById(5.2).value); 
    let C = parseInt(document.getElementById(5.3).value);
    
    if (A == 0) {
        totalEcuacion1 = -(C)/B;
        document.getElementById("totalEcuacion1").textContent = "Resultado1: " + totalEcuacion1;
        document.getElementById("totalEcuacion2").textContent = "Resultado2: No tiene"; 
    } else {
        totalEcuacion1 = (-B + Math.sqrt(B*B - 4*A*C)) / (2*A); //Formula de ecuacion de segundo grado
        totalEcuacion2 = (-B - Math.sqrt(B*B - 4*A*C)) / (2*A); 
        if (B*B - 4*A*C < 0) {
            document.getElementById("totalEcuacion1").textContent = "Resultado1: No valido! ";
            document.getElementById("totalEcuacion2").textContent = "Resultado2: No valido! ";
        } else {
            document.getElementById("totalEcuacion1").textContent = "Resultado1: " + totalEcuacion1;
            document.getElementById("totalEcuacion2").textContent = "Resultado2: " + totalEcuacion2; 
        }  
    }
}

function asignaturas() {
    let programacion = ["Juanvi", "Hakeem", "Aitor", "Isaac", "Fran"];
    let baseDatos = ["Brais", "Kevin", "Isaac", "Juanvi", "Dani"];
    let lenguajeMarcas = ["Hakeem", "Juan", "Hilario", "Javi", "Omar"];
    let sistemasInformaticos = ["Mael", "Aitor", "Fran", "Pere", "Suman"];
    let entornosDesarrollo = ["Cristian", "Kevin", "Pere", "Isaac", "Hakeem"];
    let i = 0;
    let j = 0;
    let asig1 = document.getElementById("6.1").value;
    let asig2 = document.getElementById("6.2").value;
    let coinciden = "";
    let alumnos1, alumnos2; //Dos nuevos array para meter los nombres de lo que seleccionemos en el input

    switch (asig1) { //Un swich del valor que se ponga en el input
        case "programacion":
            alumnos1 = programacion; //Si coge programacion se podran todos los nombres de programacion en alumnos1
            break;
        case "baseDatos":
            alumnos1 = baseDatos; //Lo mismo para el resto de asignaturas
            break;
        case "lenguajeMarcas":
            alumnos1 = lenguajeMarcas;
            break;
        case "sistemasInformaticos":
            alumnos1 = sistemasInformaticos;
            break;
        case "entornosDesarrollo":
            alumnos1 = entornosDesarrollo;
            break;
    }

    switch (asig2) { //Hacemos lo mismo para el segundo input
        case "programacion":
            alumnos2 = programacion;
            break;
        case "baseDatos":
            alumnos2 = baseDatos;
            break;
        case "lenguajeMarcas":
            alumnos2 = lenguajeMarcas;
            break;
        case "sistemasInformaticos":
            alumnos2 = sistemasInformaticos;
            break;
        case "entornosDesarrollo":
            alumnos2 = entornosDesarrollo;
            break;
    }
    
    for (i = 0; i < alumnos1.length; i++) { //Por ultimo los comparamos con un bucle anidado.
        for(j = 0; j < alumnos2.length; j++) {
            if (alumnos1[i] == alumnos2[j]) {//si coinciden nombres en los dos los metemos en una variable.
                coinciden += alumnos1[i] + "  ";
            }
        }
    }
    document.getElementById("alumnos").innerHTML = coinciden; //Impresion de la variable
}

function cuadrado() {
    let altura = document.getElementById("7.1").value; //No olvidar el .value
    let i = 0; //Buena practica inicializar la i y la j a 0, fuera del bucle y luego tambien dentro.
    let j = 0;
    let relleno = "";

    altura = parseInt(altura); //Buena practica pasar los valores del input a int.

    for (i = 0; i < altura; i++) {
        for(j = 0; j < altura; j++) {
            if (i == 0 || i == altura-1 || j == 0 || j == altura -1) {
                relleno += '* '
            } else {
                relleno += '  '
            }
        }
        relleno += '<br>' //Necesario para el salto de linea.
        document.getElementById("cuadradoNuevo").innerHTML = relleno;
    }
}