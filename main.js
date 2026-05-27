const myDishes = dishes;

console.log("1");

function init() {
    console.log("2");
    renderDishes();
    console.log("inited");
}


function renderDishes(dishes) {
    const menuItemRef = document.getElementById("menu-items-wrapper");
    menuItemRef.innerHTML = "";

    console.log(myDishes.length);

    for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
        console.log("pre-dish rendering");
        menuItemRef.innerHTML += getMenuItem(dishIndex, myDishes);
        console.log("dish rendered");
    }

    console.log("all dishes rendered");
}

console.log(myDishes[1].name);
console.log(myDishes[1].id);