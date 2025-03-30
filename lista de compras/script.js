const item = document.getElementById("item");
const addItemButton = document.getElementById("addItem");
const shoppingList = document.getElementById("shoppingList");

function addItem() {
    const itemText = item.value.trim();
    
    if (itemText === "") {
        alert("Digite um item antes de adicionar.");
        return;
    }

    if (shoppingList.children.length >= 5) {
        alert("O carrinho está cheio");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${itemText} <button class="delete-btn">X</button>`;

    shoppingList.appendChild(li);
    item.value = "";

    li.querySelector(".delete-btn").addEventListener("click", () => {
        shoppingList.removeChild(li);
    });
}

addItemButton.addEventListener("click", addItem);
item.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});