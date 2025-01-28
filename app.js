// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo");

  if (amigo.value) {
    amigos.push(amigo.value.trim());
    amigo.value = "";
    actualizarLista();
    console.log(amigos);
  } else {
    alert("Por favor, ingrese un nombre");
  }
}

function actualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");

  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length > 1) {
    let ganador = document.getElementById("resultado");
    ganador.innerHTML = "";

    let numeroGanador = Math.floor(Math.random() * amigos.length);
    const li = document.createElement("li");
    li.textContent = amigos[numeroGanador];
    ganador.appendChild(li);
  } else {
    alert("Porfavor, Ingresa al menos 2 amigos para llevar acabo el sorteo");
  }
}
