// carne 400g por pessoa + de 6 horas - 650g
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// crianças valem 0,5

let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputTime = document.getElementById("time");

let result = document.getElementById("result");

function calc() {
    console.log("Calculating...");

    let adults = inputAdults.value;
    let children = inputChildren.value;
    let time = inputTime.value; 

    let totalMeatQuantity = meatPerPerson(time) * adults + (meatPerPerson(time) / 2 * children);
    let totalBeerQuantity = beerPerPerson(time) * adults;
    let totalDrinkQuantity = drinksPerPerson(time) * adults + (drinksPerPerson(time) /2 * children);

    result.innerHTML = `<p style="color: white; font-size: 17px;">${totalMeatQuantity / 1000} Kg de Carne</p>`;
    result.innerHTML += `<p style="color: white; font-size: 17px;">${Math.ceil(totalBeerQuantity / 355)} Latas de Cerveja</p>`;
    result.innerHTML += `<p style="color: white; font-size: 17px;">${Math.ceil(totalDrinkQuantity / 2000)} Garrafas de Refrigerante</p>`;
}

function meatPerPerson(time) {
    if (time >= 6) return 650;
    else return 400;
}

function beerPerPerson(time) {
    if (time >= 6) return 2000;
    else return 1200;
}

function drinksPerPerson(time) {
    if (time >= 6) return 1500;
    else return 1000;
}