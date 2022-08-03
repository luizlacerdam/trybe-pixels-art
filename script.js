const paletaDeCor = document.getElementById('color-palette');
const painel = document.getElementsByTagName('ul')[0];
let corSelecionada;
let divSelecionada = document.getElementsByClassName('selected')[0];

function selecionaCor(event) {
  paletaDeCor.addEventListener('click', function (event) {
    if (event.target.classList[0] == 'color') {
      divSelecionada.classList.remove('selected');
      event.target.classList.add('selected');
      divSelecionada = event.target;
    }
  });
}
selecionaCor();

function pintarQuadro() {
  painel.addEventListener('click', function (event) {
    if (event.target.classList == 'pixel') {
      event.target.style.backgroundColor = divSelecionada.classList[1];
    }
  });
}
pintarQuadro();
