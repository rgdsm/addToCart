"use strict";
const inputButton = document.querySelectorAll(".sendToCart");
const cartItemList = document.querySelector("#cartItems");
const cartTitle = document.querySelector("#cartTitle");
function addCart(card) {
    var _a, _b, _c;
    const productImage = (_a = card.querySelector(".imgClass")) === null || _a === void 0 ? void 0 : _a.getAttribute("src");
    const productName = (_b = card.querySelector(".productName")) === null || _b === void 0 ? void 0 : _b.textContent;
    const productPrice = (_c = card.querySelector("#price")) === null || _c === void 0 ? void 0 : _c.textContent;
    if (productImage && productName && productPrice) {
        const newItem = document.createElement("li");
        newItem.innerHTML = `
        <img src="${productImage}" alt="${productName}" style="width: 180px; height: 180px;"/>
        <span>${productName}</span>
        <span>${productPrice}</span>
        `;
        cartItemList.appendChild(newItem);
        cartTitle.style.display = "block";
    }
}
inputButton.forEach(button => {
    button.addEventListener('click', (buttonClick) => {
        buttonClick.preventDefault();
        const card = button.closest(".card");
        if (card) {
            addCart(card);
        }
    });
});
