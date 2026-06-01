function getCart(){
    return /*html*/`
        <h3>Your Basket</h3>
        <div id="meals-container"></div>
        <div id="check-out-container"></div>
        <div><p>TEST</p></div>
        `
}


function getMenuItem(dishIndex, myDishes) {
    return /*html*/ `
        <div class="menu-item">
            <div class="dish-details">
                <img src="./assets/images/dishes/${myDishes[dishIndex].id}.jpg" alt="photo of ${myDishes[dishIndex].name}">
                <div class="dish-name-description">
                    <h4>${myDishes[dishIndex].name}</h4>
                    <p>${myDishes[dishIndex].description}</p>
                </div>
            </div>
            <div class="dish-purchasing">
                <p>${myDishes[dishIndex].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                <button class="add-to-cart-button" id=${dishIndex} onclick="increaseDishAmount(${dishIndex})">Add to cart</button>
            </div>
        </div>
    `;
}

function getEmptyCart(){
    return /*html*/`
        <p>Please select your order.</p>
    `
}


function getDishesInCart(dishIndex, myDishes){
    return /*html*/`
        <div class="dish-in-cart-card" id="${myDishes[dishIndex].id}-in-cart">
            <div class="meal-in-cart-card-first-row">
                <p>${myDishes[dishIndex].name}</p>
                <button onclick="removeDishFromCart(${dishIndex})">&#128465;</button>
            </div>
            <div class="meal-in-cart-card-second-row">
                <div class="change-meal-amount">
                    <button onclick="decreaseDishAmount(${dishIndex})">&minus;</button>
                    <p id="amount-${myDishes[dishIndex].id}">${myDishes[dishIndex].inCart}</p>
                    <button onclick="increaseDishAmount(${dishIndex})">&plus;</button>
                </div>
                <div class="meal-in-cart-price">
                    <p id="sum-${myDishes[dishIndex].id}">${(myDishes[dishIndex].price * myDishes[dishIndex].inCart).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</p>
                </div>
            </div>
        </div>
        `
}


function getCheckout(sumAllDishes, sumTotal, deliverFee){
    return /*html*/`
        <table>
            <tr>
                <td class="left-align">Subtotal</td>
                <td class="right-align">${sumAllDishes.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</td>
            </tr>
            <tr>
                <td class="left-align">Delivery fee</td>
                <td class="right-align">${deliverFee.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</td>
            </tr>
            <tr>
                <th class="left-align">Total</th>
                <th class="right-align">${sumTotal.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</th>
            </tr>
        </table>
        <button onclick="confirmOrder(${sumTotal})">Order now (${sumTotal.toLocaleString("de-DE", { style: "currency", currency: "EUR" })})</button>
    `
}


function getCartEmptyMessage(){
    return /*html*/`
        <div id="confirmation-popup-content">
            <button onclick="closeOrderConfirmationDialog()">X</button>
            <p>Your is cart is empty. </p>
        </div>
    `
}


function getOrderComfirmedMessage(){
    return /*html*/`
        <div id="confirmation-popup-content">
            <button onclick="closeOrderConfirmationDialog()">X</button>
            <div>
                <h4>Order confrmed!</h4>
                <p>Your food is on the way.</p>
            </div>
        </div>
        `
}