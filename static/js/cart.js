document.addEventListener('DOMContentLoaded', function () {
    // Function to add an item to the cart
    function addItemToCart(productName, productPrice) {
        // Prepare the data to send in the POST request
        const data = {
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1
        };

        // Send a POST request to add the item to the cart
        fetch('/add_to_cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                // Item added to the cart successfully
                alert('Item added to cart!');
                // Change the button text to "In Cart"
                const buttons = document.querySelectorAll('.add-to-cart-btn');
                buttons.forEach(button => {
                    if (button.dataset.name === productName) {
                        button.innerText = 'In Cart';
                    }
                });
            } else {
                // There was an error adding the item to the cart
                alert('Error adding item to cart: ' + result.error);
            }
        })
        .catch(error => {
            // Handle any fetch errors
            console.error('Error adding item to cart:', error);
            alert('Error adding item to cart. Please try again.');
        });
    }

    // Add click event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productName = this.dataset.name;
            const productPrice = this.dataset.price || 0;
            addItemToCart(productName, productPrice);
        });
    });
});

 function toggleSearchForm() {
      var searchForm = document.getElementById("searchForm");
      searchForm.classList.toggle("active");
    }