const paletaDeCor = document.getElementById('color-palette');
const painel = document.getElementsByTagName('ul')[0];
const buttonClear = document.getElementById('clear-board');
const pixel =  document.getElementsByClassName('pixel');
const inputNumber = document.getElementById('board-size');
const buttonGenerate = document.getElementById('generate-board');
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
      if (event.target.classList.length == 3) {
        event.target.classList.remove(event.target.classList[2]);
        event.target.classList.add(divSelecionada.classList[1]);
      } else {
        event.target.classList.add(divSelecionada.classList[1]);
      }
      
    }
  });
}
pintarQuadro();

function clear() {
  buttonClear.addEventListener('click', function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].className = 'pixel white';
    }
  });
}
clear();

function generateBoard() {
  buttonGenerate.addEventListener('click', function () {
    if (inputNumber.value > 0) {
      let li = document.getElementsByTagName('li');
      if (li.length > 0) {
        removeBoard();
      }
      for (let i = 0; i < inputNumber.value; i+= 1) {
        let novaLi = document.createElement('li');
        painel.appendChild(novaLi);
        let lista = document.getElementsByTagName('li')[i];
        for (let n = 0; n < inputNumber.value; n+= 1) {
          let novaDiv = document.createElement('div');
          novaDiv.className = 'pixel white';
          lista.appendChild(novaDiv);
        }
      }
    } else {
      let li = document.getElementsByTagName('li');
      if (li.value == '' || li.value == null) {
        window.alert('Board inválido!')
      }
    }
  });
}
generateBoard();

function removeBoard() {
  while (painel.firstChild) {
    painel.removeChild(painel.firstChild);
  }
}


