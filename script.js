/* 
potrzebuję
a) rejestracji kliknięcia każdego obiektu (poza ekranem)

b)następnie potrzebuję instrukcji - jeśli kliknięto dany przycisk zrób to a to (zawsze konkretna rzecz)
-potrzebne będzie przechowywanie w pamięci wartości zmiennej
-jedna zmienna może odpowiadać za to co wyświetla się na wyświetlaczu

1)funkcjonalność - kiedy wpisuję liczby wyświetlają się na wyświetlaczu

*/
let onScreen = '';

document.getElementById("1").addEventListener("click", num1)
document.getElementById("2").addEventListener("click", num2)



//pytanie - jak pobrać numer id danego przycisku, tak żeby został przekazany do funkcji

function num1() {
  calculate(1);
}

function num2() {
  calculate(2);
}




function calculate(id) {
  switch (id) {
    case 1:
      onScreen = onScreen + '1';
      console.log(onScreen);
      break;

    case 2:
      onScreen = onScreen + '2';
      console.log(onScreen);
      break;

    case '+':
      onScreen





  }

}