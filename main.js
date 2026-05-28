const myDishes = dishes;
const cartRef = document.getElementById("cart");
const menuItemRef = document.getElementById("menu-items-wrapper");


function init() {
    renderDishes();
    renderCart();
    console.log("init complete");
}


function renderDishes(dishes) {
    menuItemRef.innerHTML = "";

    for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
        menuItemRef.innerHTML += getMenuItem(dishIndex, myDishes);
    }

    console.log("all dishes rendered in menu");
}


function renderCart(){
    cartRef.innerHTML = /*html*/`
        <h3>Your Basket</h3>
        <div id="meals-container">
        </div>
    `
    console.log("cart rendered");

    renderAddedDishes();
}


function renderAddedDishes(){
    const mealsContainerRef = document.getElementById("meals-container");

    mealsContainerRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++){
        if (myDishes[i].inCart != 0){
        mealsContainerRef.innerHTML += /*html*/`
        <div class="dish-in-cart-card">
            <div class="meal-in-cart-card-second-row">
                <p>${myDishes[i].inCart} x ${myDishes[i].name}</p>
            </div>
            <div class="meal-in-cart-card-second-row">
                <div class="change-meal-amount">
                    <button>&#128465;</button>
                    <button>&minus;</button>
                    <p>${myDishes[i].inCart}</p>
                    <button>&plus;</button>
                </div>
                <div class="meal-in-cart-price">
                    <p>${myDishes[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                </div>
            </div>
        </div>
        `
        }
    }

    console.log("all dishes added to cart");
}

