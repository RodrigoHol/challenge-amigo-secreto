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
