function tocaSom(idAudio) {
  let audio = document.querySelector(idAudio)
  audio.currentTime = 0
  audio.play()
}
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador]

  const somDaTecla = tecla.classList[1]

  const idAudio = `#som_${somDaTecla}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  contador = contador + 1
}
