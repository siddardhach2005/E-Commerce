let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

    cart.push({
        name,
        price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Added to Cart");
}

if(document.getElementById("cart-items")){

    const cartContainer =
        document.getElementById("cart-items");

    cart.forEach(item => {

        const div =
            document.createElement("div");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <hr>
        `;

        cartContainer.appendChild(div);
    });
}

function checkout(){

    alert("Order Placed Successfully");

    localStorage.removeItem("cart");

    location.reload();
}