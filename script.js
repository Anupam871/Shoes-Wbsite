let cart = [];
    function addToCart(name, price) {
      cart.push({name, price});
      updateCart();
    }
    function updateCart() {
      const cartItems = document.getElementById("cart-items");
      const total = document.getElementById("total");
      cartItems.innerHTML = "";
      let sum = 0;
      cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(div);
        sum += item.price;
      });
      total.textContent = sum;
    }
    function toggleCart() {
      const cartBox = document.getElementById("cart");
      cartBox.style.display = cartBox.style.display === "block" ? "none" : "block";
    }