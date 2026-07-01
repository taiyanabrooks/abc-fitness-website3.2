// ===============================
// ✅ SUBSCRIBE FEATURE
// ===============================
const subscribeBtn = document.querySelector(".join-form button");
const emailInput = document.querySelector(".join-form input");

if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", function (event) {

        event.preventDefault();

        if (emailInput.value === "") {
            emailInput.reportValidity();
        } else {
            alert("Thank you for subscribing");
        }

    });
}


// ===============================
// ✅ ADD TO CART FEATURE
// ===============================
const addButtons = document.querySelectorAll(".gallery-item button");

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const itemName = this.parentElement.querySelector("h3").textContent;

        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        cart.push(itemName);
        sessionStorage.setItem("cart", JSON.stringify(cart));

        const cartList = document.querySelector(".cart-items");

        if (cartList) {
            cartList.innerHTML = "";

            cart.forEach(function(item) {
                const li = document.createElement("li");
                li.textContent = item;
                cartList.appendChild(li);
            });
        }

        alert("Item added to the cart: " + itemName);

    });

});


// ===============================
// ✅ VIEW CART FEATURE
// ===============================
const cartList = document.querySelector(".cart-items");

if (cartList) {

    const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    cartList.innerHTML = "";

    savedCart.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });

}

// ===============================
// ✅ OPEN / CLOSE CART MODAL
// ===============================
const viewCartBtn = document.querySelector(".cart-button");
const cartModal = document.querySelector(".cart-modal");
const closeCart = document.querySelector(".close-cart");

if (viewCartBtn && cartModal && closeCart) {

    // ✅ open modal
    viewCartBtn.addEventListener("click", function () {
        cartModal.style.display = "flex";
    });

    // ✅ close modal
    closeCart.addEventListener("click", function () {
        cartModal.style.display = "none";
    });

}


// ===============================
// ✅ CLEAR CART FEATURE
// ===============================
const clearCartBtn = document.querySelector(".clear-cart");

if (clearCartBtn) {

    clearCartBtn.addEventListener("click", function () {

        sessionStorage.removeItem("cart");

        const cartList = document.querySelector(".cart-items");
        if (cartList) {
            cartList.innerHTML = "";
        }

        alert("Cart cleared");

    });

}


// ===============================
// ✅ PROCESS ORDER FEATURE
// ===============================
const processOrderBtn = document.querySelector(".process-order");

if (processOrderBtn) {

    processOrderBtn.addEventListener("click", function () {

        const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];

        if (savedCart.length > 0) {

            alert("Thank you for your order");

            sessionStorage.removeItem("cart");

            const cartList = document.querySelector(".cart-items");
            if (cartList) {
                cartList.innerHTML = "";
            }

        } else {
            alert("Cart is empty");
        }

    });

}


// ===============================
// ✅ CONTACT FORM (localStorage)
// ===============================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        const userData = {
            name: name,
            email: email,
            message: message
        };

        localStorage.setItem("contactData", JSON.stringify(userData));

        alert("Thank you for your message, " + name);

    });

}