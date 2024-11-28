let currentSlide = 0;
const slides = document.querySelectorAll('.slides');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Auto-play slides every 3 seconds

// Array to store items added to the cart
let cart = [];

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        const productPrice = button.previousElementSibling.textContent;

        // Add product to the cart array
        cart.push({
            id: productId,
            name: productName,
            price: productPrice
        });

        // Notify the user
        alert(`${productName} has been added to your cart!`);
        console.log(cart); // Debugging purposes
    });
});
