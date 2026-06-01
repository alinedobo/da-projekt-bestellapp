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


//#region  does not work

const mobileCartDialogRef = document.getElementById("mobile-cart-wrapper");
function openMobileCart(){
    mobileCartDialogRef.showModal();
    console.log("modal opened");

    renderMobileCart()
}


const mobileCartRef = document.getElementById("mobile-cart");
function renderMobileCart(){
    mobileCartRef.innerHTML = getCart();
        console.log("getCart mobile completed");

    renderAddedDishes();
        console.log("mobile dishes rendered");

    renderCheckout();
        console.log("mobile checkout rendered");

        console.log("mobile cart shown");
}
//#endregion does not work


function closeMobileCart(){
    mobileCartDialogRef.close();
}