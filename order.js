let home1 = document.querySelector(".home1");
let menu1 = document.querySelector(".menu1");
let order=document.querySelector(".order");
let contact1=document.querySelector(".contact1");
let loginBtn1=document.querySelector(".loginBtn1");



  document.getElementById('homeLink3').addEventListener('click', function(e){
    e.preventDefault();   // link ka default action rokna hai
    window.location.reload();
  });
home1.addEventListener("click", function() {
    window.location.href = "food.html";  
});


menu1.addEventListener("click", function() {
    window.location.href = "nav.html";  
});

// order.addEventListener("click", function() {
//     window.location.href = "order.html";  
// });
contact1.addEventListener("click", function() {
    window.location.href = "contact.html";  
});
loginBtn1.addEventListener("click", function() {
    window.location.href = "login.html";  
});

// Select cart elements
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

// Store cart items
let cart = [];

// Helper function: update cart display
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price} x 
            <button class="dec" data-index="${index}">-</button>
            ${item.quantity}
            <button class="inc" data-index="${index}">+</button>
            <button class="remove" data-index="${index}">❌</button>
        `;
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPriceEl.textContent = total;
}

// Add to Cart buttons
const addCartBtns = document.querySelectorAll(".add-cart-btn");

addCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const orderItem = btn.closest(".order-item");
        const name = orderItem.querySelector("h2").innerText;
        const price = parseInt(orderItem.querySelector("h2 span").innerText.replace(/[^0-9]/g,""));
        const quantity = parseInt(orderItem.querySelector("input[type='number']").value);

        // Check if item already in cart
        const existingItem = cart.find(i => i.name === name);
        if(existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({name, price, quantity});
        }
        updateCart();
    });
});

// Event delegation for + / - / remove
cartItemsContainer.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    if(e.target.classList.contains("inc")) {
        cart[index].quantity += 1;
        updateCart();
    }
    if(e.target.classList.contains("dec")) {
        if(cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            updateCart();
        }
    }
    if(e.target.classList.contains("remove")) {
        cart.splice(index, 1);
        updateCart();
    }
});

// Checkout button
checkoutBtn.addEventListener("click", () => {
    if(cart.length === 0){
        alert("Your cart is empty!");
    } else {
        let summary = "Order Summary:\n";
        cart.forEach(item => {
            summary += `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
        });
        summary += `Total = ₹${cart.reduce((a,b)=>a+b.price*b.quantity,0)}`;
        alert(summary + "\n\nProceeding to checkout...");
        // Clear cart after checkout
        cart = [];
        updateCart();
    }
});
