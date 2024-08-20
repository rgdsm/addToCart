const inputButton = document.querySelectorAll<HTMLButtonElement>(".sendToCart");
const cartItemList = document.querySelector("#cartItems") as HTMLUListElement;
const cartTitle = document.querySelector("#cartTitle") as HTMLHeadElement;


function addCart(card: HTMLDivElement) {
    const productImage = card.querySelector(".imgClass")?.getAttribute("src");
    const productName = card.querySelector(".productName")?.textContent;
    const productPrice = card.querySelector("#price")?.textContent;

    if(productImage && productName && productPrice) {
        const newItem = document.createElement("li");
        newItem.innerHTML = `
        <img src="${productImage}" alt="${productName}" style="width: 180px; height: 180px;"/>
        <span>${productName}</span>
        <span>${productPrice}</span>
        `
        cartItemList.appendChild(newItem)

        cartTitle.style.display = "block";
    }
}
inputButton.forEach(button => {
    button.addEventListener('click', (buttonClick) => {
        buttonClick.preventDefault();
        const card = button.closest(".card") as HTMLDivElement;
        if(card) {
            addCart(card)
        }

    })
});