function getMenuItem(dishIndex) {
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

