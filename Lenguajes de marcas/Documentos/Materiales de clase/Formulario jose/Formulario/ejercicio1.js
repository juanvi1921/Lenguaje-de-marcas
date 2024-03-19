'use strict';
document.querySelector("#boton").addEventListener("click", function(event){

    event.preventDefault();
    
    let array_patron = [/^[A-Z][A-z]*[0-9]$/, /^[0-9]\w{6,}[A-Z]$/i, /^[0-9]\w{6,}[A-Z]$/i, /^[A-Z]/i, /^[A-Z]/i, /\d+/i, /^[679]\d+/i ];
    let array_inputs = document.querySelectorAll("input");

    for(let index in array_patron)
    {
        console.log(index);
        console.log(array_inputs[index].value);
        if(index == 2)
        {
            let aux = array_inputs[index-1].value;
            console.log(aux);
            if(aux == array_inputs[index].value)
            {
                array_inputs[index].className = "valido";
            }else
            {
                array_inputs[index].className = "invalido";
            }
        }else
        {
            if(array_patron[index].test(array_inputs[index].value))
            {
                console.log("valido");
                array_inputs[index].className = "valido";
            }
            else
            {
                array_inputs[index].className = "invalido";
            }
        }
    }
});
