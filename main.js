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

    for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++){
        if (myDishes[dishIndex].inCart != 0){
        mealsContainerRef.innerHTML += getDishesInCart(dishIndex, myDishes);
        }
    }
    console.log("all dishes added to cart");
}


function increaseDishAmount(dishIndex){
    myDishes[dishIndex].inCart ++;

    const amountDishRef = document.getElementById(`amount-${myDishes[dishIndex].id}`);
    amountDishRef.innerHTML = /*html*/`
        <p id="amount-${myDishes[dishIndex].id}">${myDishes[dishIndex].inCart}</p>
    `
    const sumDishRef = document.getElementById(`sum-${myDishes[dishIndex].id}`);
    sumDishRef.innerHTML = /*html*/`
        <p id="sum-${myDishes[dishIndex].id}">${(myDishes[dishIndex].price * myDishes[dishIndex].inCart).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
    `
    renderCart();
}

function decreaseDishAmount(dishIndex){
    myDishes[dishIndex].inCart --;

    const amountDishRef = document.getElementById(`amount-${myDishes[dishIndex].id}`);
    amountDishRef.innerHTML = /*html*/`
        <p id="amount-${myDishes[dishIndex].id}">${myDishes[dishIndex].inCart}</p>
    `
    const sumDishRef = document.getElementById(`sum-${myDishes[dishIndex].id}`);
    sumDishRef.innerHTML = /*html*/`
        <p id="sum-${myDishes[dishIndex].id}">${(myDishes[dishIndex].price * myDishes[dishIndex].inCart).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
    `
    renderCart();
}


function removeDishFromCart(dishIndex){
    myDishes[dishIndex].inCart = 0;
    renderCart();
}


function renderCheckoutSum(){
    let sumAllDishes = 0;
    for(let dishIndex = 0; dishIndex < myDishes.length; dishIndex++){
        sumAllDishes += (myDishes[dishIndex].price * myDishes[dishIndex].inCart);
    }
    sumAllDishes = sumAllDishes.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    return sumAllDishes;

    
}
