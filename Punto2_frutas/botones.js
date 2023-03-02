
const par = document.getElementById("iddpar");
const par2 = document.getElementById("iddpar2");
const par3 = document.getElementById("iddpar3");
const par4 = document.getElementById("iddpar4");
const par5 = document.getElementById("iddpar5");

const impar = document.getElementById("idimpar");
const impar2 = document.getElementById("idimpar2");
const impar3 = document.getElementById("idimpar3");
const impar4 = document.getElementById("idimpar4");
const impar5 = document.getElementById("idimpar5");
const body = document.getElementById("body");
console.log(par);

function colorChange() {
    var selecvalor = document.getElementById("Seleccion").value;
    document.body.style.backgroundColor = selecvalor;
}


function cambiarColor(){
    par.style.backgroundColor  = "white";
    par2.style.backgroundColor  = "blue";
    par3.style.backgroundColor  = "blue";
    par4.style.backgroundColor  = "blue";
    par5.style.backgroundColor  = "blue";

    if(par.style.backgroundColor = "white"){
        par.style.backgroundColor  = "blue";
    }
    else if(par.style.backgroundColor = "blue"){
        par.style.backgroundColor  = "grey";
    }
    
}

function cambiarColor2(){
    impar.style.backgroundColor  = "yellow";
    impar2.style.backgroundColor  = "yellow";
    impar3.style.backgroundColor  = "yellow";
    impar4.style.backgroundColor  = "yellow";
    impar5.style.backgroundColor  = "yellow";
    
}