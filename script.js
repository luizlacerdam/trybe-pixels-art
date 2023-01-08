const paletaDeCor = document.getElementById('color-palette');
const painel = document.getElementById('pixel-board');
const buttonClear = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');
const inputNumber = document.getElementById('board-size');
const buttonGenerate = document.getElementById('generate-board');
const sectionPainel = document.getElementsByClassName('painel')[0];
let divSelecionada = document.getElementsByClassName('selected')[0];

function colorRandom() {
  for (let i = 0; i < 3; i += 1) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }
}

function newClass() {
  let style = document.createElement('style');
  for (let i = 0; i < 3; i += 1) {
    style.innerHTML += '.cor-' + [i] + '{background-color: ' + colorRandom() + ';}';

  }
  document.getElementsByTagName('head')[0].appendChild(style);
}
newClass();

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
        if (event.target.classList[2] === divSelecionada.classList[1]) {
          event.target.classList.toggle(event.target.classList[2]);
        }
        else {
          event.target.classList.remove(event.target.classList[2]);
          event.target.classList.add(divSelecionada.classList[1]);
        }
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

function limit() {
  buttonGenerate.addEventListener('click', function () {
    if (inputNumber.value < 0 || inputNumber.value == '') {
      window.alert("Board inválido!");
    }
    if (inputNumber.value < 5) {
      inputNumber.value = 5;
    }
    if (inputNumber.value > 50) {
      inputNumber.value = 50;
    }
  });
}
limit();

function generateBoard() {
  buttonGenerate.addEventListener('click', function () {
    if (inputNumber.value > 0) {
      let ul = document.getElementsByTagName('ul');
      if (ul.length > 0) {
        removeBoard();
      }
      for (let i = 0; i < inputNumber.value; i += 1) {
        let novaUl = document.createElement('ul');
        painel.appendChild(novaUl);
        for (let n = 0; n < inputNumber.value; n += 1) {
          let lista = document.createElement('li');
          let novaDiv = document.createElement('div');
          novaUl.appendChild(lista);
          novaDiv.className = 'pixel white';
          lista.appendChild(novaDiv);
        }
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