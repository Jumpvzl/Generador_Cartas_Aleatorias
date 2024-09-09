window.onload = function() {
  //write your code here
  let left = document.querySelector("#left")
  let right = document.querySelector("#right")
  let center = document.querySelector("#center")

  let number = generateNumber();
  let { figuraIndex, colorClass } = generateFig();

  center.innerHTML=number
  left.innerHTML =`<span class="${colorClass}">${figuraIndex}</span>`;
  right.innerHTML=`<span class="${colorClass}">${figuraIndex}</span>`;
};

function generateNumber(){
  let valor = Math.floor(Math.random() * 13) + 1;
  switch (valor) {
    case 11:
      valor = "J";
      break;
    case 12:
      valor = "Q";
      break;
    case 13:
      valor = "K";
      break;
    case 1:
      valor = "A";
      break;
  }
    return valor;
};


function generateFig(){

  let figuraIndex = Math.floor(Math.random() * 4);
  let colorClass = "black";
  switch (figuraIndex) {
    case 0:
      figuraIndex = "♦";
      colorClass = "red";
      break;
    case 1:
      figuraIndex = "♥";
      colorClass = "red";
      break;
    case 2:
      figuraIndex = "♣";
      colorClass = "black";
      break;
    case 3:
      figuraIndex = "♠";
      colorClass = "black";
      break;
  }
    return {figuraIndex, colorClass};

};
// Asignar el símbolo y el color al elemento
cardFigureElement.textContent = figura;
cardFigureElement.classList.add(colorClass);



/*

  let figuraIndex = Math.floor(Math.random() * 4);
  let arrFiguras = ["♦","♥","♣","♠"];
  let color = figuraIndex < 2 ? "red":"black"
*/