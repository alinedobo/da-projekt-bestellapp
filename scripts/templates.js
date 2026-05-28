function getMenuItem(dishIndex) {
    return /*html*/ `
        <div class="menu-item">
            <div class="dish-details">
                <img src="./assets/images/dishes/${myDishes[dishIndex].id}.jpg" alt="photo of ${myDishes[dishIndex].name}">
                <div>
                    <h4>${myDishes[dishIndex].name}</h4>
                    <p>${myDishes[dishIndex].description}</p>
                </div>
            </div>
            <div class="dish-purchasing">
                <p>${myDishes[dishIndex].price}</p>
                <button class="add-to-basket-button" id=${dishIndex}>Add to cart</button>
            </div>
        </div>
    `;
}

