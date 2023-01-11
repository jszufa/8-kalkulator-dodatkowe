
let onScreen = '';

let screen = document.getElementById('screen');
//console.log(screen);

//rejestracja obsługi zdarzeń
document.getElementById("1").addEventListener("click", num1);
document.getElementById("2").addEventListener("click", num2);
document.getElementById("3").addEventListener("click", num3);
document.getElementById("4").addEventListener("click", num4);
document.getElementById("5").addEventListener("click", num5);
document.getElementById("6").addEventListener("click", num6);
document.getElementById("7").addEventListener("click", num7);
document.getElementById("8").addEventListener("click", num8);
document.getElementById("9").addEventListener("click", num9);
document.getElementById("zero").addEventListener("click", num0);

document.getElementById("+").addEventListener("click", plus);
document.getElementById("-").addEventListener("click", minus);
document.getElementById(".").addEventListener("click", dot);
document.getElementById("x").addEventListener("click", times);
document.getElementById("/").addEventListener("click", dividedBy);
document.getElementById("c").addEventListener("click", clear);
document.getElementById("del").addEventListener("click", del);

document.getElementById("equals").addEventListener("click", equals);


//CYFRY
function num1() {
  calculate(1);
}

function num2() {
  calculate(2);
}

function num3() {
  calculate(3);
}

function num4() {
  calculate(4);
}
function num5() {
  calculate(5);
}

function num6() {
  calculate(6);
}
function num7() {
  calculate(7);
}

function num8() {
  calculate(8);
}
function num9() {
  calculate(9);
}

function num0() {
  calculate(0);
}

//OPERATORY

function plus() {
  calculate('+');
}

function minus() {
  calculate('-');
}

function equals() {
  calculate('=');
}

function dot() {
  calculate('.');
}

function times() {
  calculate('x');
}

function dividedBy() {
  calculate('/');
}

function clear() {
  calculate('c');
}

function del() {
  calculate('del');
}



function calculate(id) {
  switch (id) {
    case 1:
      onScreen = onScreen + '1';
      //console.log(onScreen);
      break;

    case 2:
      onScreen = onScreen + '2';
      //console.log(onScreen);
      break;

    case 3:
      onScreen = onScreen + '3';
      //console.log(onScreen);
      break;
    case 4:
      onScreen = onScreen + '4';
      // console.log(onScreen);
      break;

    case 5:
      onScreen = onScreen + '5';
      // console.log(onScreen);
      break;

    case 6:
      onScreen = onScreen + '6';
      //console.log(onScreen);
      break;

    case 7:
      onScreen = onScreen + '7';
      // console.log(onScreen);
      break;

    case 8:
      onScreen = onScreen + '8';
      //console.log(onScreen);
      break;

    case 9:
      onScreen = onScreen + '9';
      // console.log(onScreen);
      break;

    case 0:
      onScreen = onScreen + '0';
      //console.log(onScreen);
      break;

    case '+':
      onScreen = onScreen + '+';
      //console.log(onScreen);
      break;

    case '-':
      onScreen = onScreen + '-';
      // console.log(onScreen);
      break;

    case '.':
      onScreen = onScreen + '.';
      //console.log(onScreen);
      break;

    case 'x':
      onScreen = onScreen + '*';
      // console.log(onScreen);
      break;

    case '/':
      onScreen = onScreen + '/';
      // console.log(onScreen);
      break;

    case 'c':
      onScreen = '';
      // console.log(onScreen);
      break;

    case 'del':
      onScreen = onScreen.slice(0, -1);
      // console.log(onScreen);
      break;

    case '=':
      onScreen = String(eval(onScreen));
      // console.log(onScreen);
      break;

  }
  screen.innerHTML = onScreen;

}
