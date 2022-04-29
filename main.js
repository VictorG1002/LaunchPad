const tocaSom = idSom => {
  document.querySelector(idSom).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')
let contador = 0

while (contador < listaDeTeclas.length) {
  listaDeTeclas[contador].onclick = function () {
    tocaSom()
  }
  contador = contador + 1
}
