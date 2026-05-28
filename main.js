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
    cartRef.innerHTML = getCart();
    console.log("cart rendered");

    renderAddedDishes();
    renderCheckout();
}


function renderAddedDishes(){
    const mealsContainerRef = document.getElementById("meals-container");
    mealsContainerRef.innerHTML = "";

    let dishesInCart = 0;
    for(let i = 0; i < myDishes.length; i++){
        dishesInCart += myDishes[i].inCart;
    }

    if(dishesInCart === 0){
        mealsContainerRef.innerHTML = getEmptyCart();
    } else{
        for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++){
            if (myDishes[dishIndex].inCart != 0){
            mealsContainerRef.innerHTML += getDishesInCart(dishIndex, myDishes);
            }
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


function renderCheckout(){
    const sumTotalRef = document.getElementById("check-out-container");
    let sumAllDishes = 0;
    for(let dishIndex = 0; dishIndex < myDishes.length; dishIndex++){
        sumAllDishes += (myDishes[dishIndex].price * myDishes[dishIndex].inCart);
    }
    sumAllDishes = sumAllDishes;

    let deliverFee = 4.99;

    if(sumAllDishes === 0){
        sumTotal = 0;
        deliverFee = 0;
        sumTotalRef.innerHTML = getCheckout(sumAllDishes, sumTotal, deliverFee);
    } else{
        const sumTotal = sumAllDishes + deliverFee;
        sumTotalRef.innerHTML = getCheckout(sumAllDishes, sumTotal, deliverFee);
    } 
}
