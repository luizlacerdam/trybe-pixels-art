const paletaDeCor = document.getElementById('color-palette');
const painel = document.getElementsByTagName('ul')[0];
const button = document.getElementById('clear-board');
const pixel =  document.getElementsByClassName('pixel');
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
    if (event.target.classList[0] == 'pixel') {
      event.target.classList.add(divSelecionada.classList[1]);
    }
  });
}
pintarQuadro();

function clear() {
  button.addEventListener('click', function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].classList = 'pixel white';
    }
  });
}
clear();
