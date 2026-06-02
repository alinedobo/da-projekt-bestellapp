const myDishes = dishes;
const cartRef = document.getElementById("cart");
const menuItemRef = document.getElementById("menu-items-wrapper");


function init() {
    renderDishes();
    renderCart();
}


function renderDishes(dishes) {
    menuItemRef.innerHTML = "";

    for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
        menuItemRef.innerHTML += getMenuItem(dishIndex, myDishes);
    }
}


function renderCart(){
    cartRef.innerHTML = getCart();
    renderAddedDishes();
    renderCheckout();
    calculateTotalItemsInCart();
}

//#region Cart
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
}


function increaseDishAmount(dishIndex){
    myDishes[dishIndex].inCart ++;
    renderCart();

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
    calculateTotalItemsInCart();
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


function toggleCart(){
    const closeCartButtonRef = document.getElementById("close-cart-button");
    const cartWrapperRef = document.getElementById("cart-wrapper")
    cartWrapperRef.classList.toggle("display-none");

    const menuRef = document.getElementById("menu");
    menuRef.classList.toggle("display-none");
}
//#endregion

//#region Order confirmation dialog
const orderConfirmationDialogRef = document.getElementById("order-confirmation-popup")
function confirmOrder(sumTotal){
    if (sumTotal === 0){
        orderConfirmationDialogRef.showModal();
        orderConfirmationDialogRef.innerHTML = getCartEmptyMessage();
    } else{
        orderConfirmationDialogRef.showModal();
        orderConfirmationDialogRef.innerHTML = getOrderComfirmedMessage();
        emptyCart();
        renderCart();
        renderCheckout();
    }
}


function closeOrderConfirmationDialog(){
    orderConfirmationDialogRef.close();
}


function emptyCart(){
    for (let i = 0; i < myDishes.length; i++){
        myDishes[i].inCart = 0;
    }
}
//#endregion

function calculateTotalItemsInCart(){
    let totalNumberItemsInCart = 0;

    const numberItemsCartRef = document.getElementById("number-of-meals-in-cart");
    numberItemsCartRef.innerHTML = "";

    for (i = 0; i < myDishes.length; i++){
        totalNumberItemsInCart += myDishes[i].inCart;
    }

    numberItemsCartRef.innerHTML = /*html*/`
        <p id="number-of-meals-in-cart">${totalNumberItemsInCart}</p>
    `
}