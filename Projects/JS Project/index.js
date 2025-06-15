const cartBtn = document.querySelector('#cartBtn');
const bookList = document.querySelector('#bookList');
const cartCount = document.querySelector('#cart-count');
const cartSidebar = document.querySelector('#cartSidebar');
const cartTotal = document.querySelector('#cartTotal');
const cartItems = document.querySelector('#cartItems');
const checkoutBtn = document.querySelector('#checkoutBtn');
const orderDetails = document.querySelector('#orderDetails');
const orderBTN = document.querySelector('#orderBTN');
const header = document.querySelector('.main-header');
const placeOrder = document.querySelector('#placeOrder');
const homeBtn = document.querySelector('#homeBtn');
const submitBtn = document.querySelector('#submitBtn');
const messageReceived = document.querySelector('#messageReceived')
const contactForm = document.querySelector('#contact-form');
const footer = document.querySelector('#footer');

loadBooks(0);

function loadBooks() {
    bookList.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        bookList.innerHTML += `
        <div class="book-item">
            <img src="${books[i].image}" alt="${books[i].title}" class="book-cover" />
            <h3>${books[i].title}</h3>
            <p><strong>Author:</strong> ${books[i].author}</p>
            <p><strong>Year:</strong> ${books[i].year}</p>
            <p>${books[i].description}</p>
            <p><strong>Price:</strong> $${books[i].price.toFixed(2)}</p>
            <button onclick="addToCart(${i})">Add to Cart</button>
        </div>
        `;
    }
}

let cart = [];

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    let li = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        li += `
        <div class='cartlist'>
        <li>
        ${item.title} - $${item.price.toFixed(2)}
        </li>
        <button class='removeBtn' onclick="removeItem(${i})">Remove</button>
        </div>
        `
        total += item.price;
    };
    cartItems.innerHTML = li;
    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}

function addToCart(index) {
    cart.push(books[index]);
    updateCart();
}

cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

checkoutBtn.addEventListener('click', () => {
    orderDetails.classList.add('active');
    header.style.display = 'none';
    bookList.style.display = 'none';
    cartSidebar.style.display = 'none';
    footer.style.display = 'none'
})

orderBTN.addEventListener('click', () => {
    orderDetails.classList.remove('active');
    placeOrder.classList.add('showSuccess');
})

homeBtn.addEventListener('click', () => {
    orderDetails.classList.remove('active');
    header.style.display = 'flex';
    bookList.style.display = 'flex';
    footer.style.display = 'block'
    placeOrder.classList.remove('showSuccess');
    cart = [];
    updateCart();
    loadBooks();
    cartSidebar.classList.add('open');
    });

