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
                <button class="add-to-cart-button" id=${dishIndex}>Add to cart</button>
            </div>
        </div>
    `;
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