let mostrarAmigos = [];

function mostrarListasAmigos(){
    console.log(mostrarAmigos);
    let titulo = document.querySelector("p");
    titulo.innerHTML = (mostrarAmigos);
}

function limpiarLista(){
    lista = document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    AmigoNuevo = document.getElementById("amigo").value;
    mostrarAmigos.push(AmigoNuevo);
    mostrarListasAmigos();
    limpiarLista();
    return
}