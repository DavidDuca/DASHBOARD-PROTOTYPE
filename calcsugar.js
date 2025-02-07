// Breakfast calculation code
function calcBreakfast() {
    let cups1 = parseFloat(document.getElementById("rice1").value) || 0;
    let bfricetype = document.querySelector(".menu1");
    let selectedtype1 = bfricetype.value;
    let sugar1 = null;

    if (selectedtype1 === "Jasmine Rice") {
        sugar1 = 0.2;
    } else if (selectedtype1 === "Basmati Rice") {
        sugar1 = 0.3;
    } else if (selectedtype1 === "White Rice") {
        sugar1 = 0.4;
    } else if (selectedtype1 === "Brown Rice") {
        sugar1 = 0.5;
    } else if (selectedtype1 === "Sticky Rice") {
        sugar1 = 0.6;
    } else {
        sugar1 = 0; 
    }
    sugar1 = sugar1 * cups1; 

    document.getElementById("sugar1").value = sugar1 + " G of Sugar";
    updateTotalSugar();
}

// Lunch calculation code
function calcLunch() {
    let cups2 = parseFloat(document.getElementById("rice2").value) || 0;
    let lunricetype = document.querySelector(".menu2");
    let selectedtype2 = lunricetype.value;
    let sugar2 = null;

    if (selectedtype2 === "Jasmine Rice") {
        sugar2 = 0.2;
    } else if (selectedtype2 === "Basmati Rice") {
        sugar2 = 0.3;
    } else if (selectedtype2 === "White Rice") {
        sugar2 = 0.4;
    } else if (selectedtype2 === "Brown Rice") {
        sugar2 = 0.5;
    } else if (selectedtype2 === "Sticky Rice") {
        sugar2 = 0.6;
    } else {
        sugar2 = 0;
    }
    sugar2 = sugar2 * cups2; 
    document.getElementById("sugar2").value = sugar2 + " G of Sugar";
    updateTotalSugar();
}

// Dinner calculation code
function calcDinner() {
    let cups3 = parseFloat(document.getElementById("rice3").value) || 0;
    let dinricetype = document.querySelector(".menu3"); 
    let selectedtype3 = dinricetype.value;
    let sugar3 = null;

    if (selectedtype3 === "Jasmine Rice") {
        sugar3 = 0.2;
    } else if (selectedtype3 === "Basmati Rice") {
        sugar3 = 0.3;
    } else if (selectedtype3 === "White Rice") {
        sugar3 = 0.4;
    } else if (selectedtype3 === "Brown Rice") {
        sugar3 = 0.5;
    } else if (selectedtype3 === "Sticky Rice") {
        sugar3 = 0.6;
    } else {
        sugar3 = 0;
    }
    sugar3 = sugar3 * cups3; 
    document.getElementById("sugar3").value = sugar3 + " G of Sugar";
    updateTotalSugar();
}

function updateTotalSugar() {
    let sugar1 = parseFloat(document.getElementById("sugar1").value) || 0;
    let sugar2 = parseFloat(document.getElementById("sugar2").value) || 0;
    let sugar3 = parseFloat(document.getElementById("sugar3").value) || 0;

    let totalsugarIntake = sugar1 + sugar2 + sugar3;
    document.getElementById("totalSugar").value = totalsugarIntake + " G of Sugar";

    let progressBar = document.getElementById("progressBar");
    progressBar.style.width = (totalsugarIntake * 2) + "%"; 
    progressBar.style.background = getColor(totalsugarIntake);

    if (totalsugarIntake >= 25) {
        alert('Warning: You have reached 25g of sugar intake!');
    }
}

document.getElementById("rice1").addEventListener("input", calcBreakfast);
document.querySelector(".menu1").addEventListener("change", calcBreakfast);

document.getElementById("rice2").addEventListener("input", calcLunch);
document.querySelector(".menu2").addEventListener("change", calcLunch);

document.getElementById("rice3").addEventListener("input", calcDinner);
document.querySelector(".menu3").addEventListener("change", calcDinner);

function getColor(value) {
    if (value <= 15) {
        return `rgb(${Math.floor(255 * (value / 15))}, 255, 0)`; 
    } else if (value <= 30) {
        return `rgb(255, ${Math.floor(255 * ((30 - value) / 15))}, 0)`;
    } else {
        return `rgb(255, 0, ${Math.floor(255 * ((50 - value) / 20))})`;
    }
}
