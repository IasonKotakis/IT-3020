// JavaScript Document
let swiper;
const swiperWrapper = document.querySelector('.swiper-wrapper');

const cartItems = [];

const sidenavBody = document.querySelector('.sidenav__body');
const shoppingCartQty = document.querySelector('.shopping-cart_qty');

const products = [
  {
    id: 1,
    name: 'NIKE&nbsp;SB ADVERSARY',
    price: '$80',
    img: './images/product1.png',
    description:
      "The Nike SB Adversary takes you back to the basics. Suede and textile create a classic look that's inspired by the 1982 Nike Adversary, while a combination of traditional lacing and ghillie loops let you dial in the perfect fit",
    features: [
      'Foam midsole cushions every step.',
      'Rubber outsole gives you grippy traction.',
      'Shown: Black/White/Gum Light Brown/University Gold',
      'Style: CJ0887-002',
    ],
    sizes: [30, 32, 34, 36],
    quantity: [1, 2, 3],
  },
  {
    id: 2,
    name: 'NIKE&nbsp;Iridescent Swim Bag',
    price: '$80',
    img: './images/product2.png',
    description:
      'The Nike Locker Iridescent Swim Bag is made with clear material so you to find your items easily. The perforations help items ventilate and drain after swimming. It has a 3-liter capacity to hold your swimming gear before and after practice.',
    features: [
      '3L Capacity',
      'Rinse in cold water and wipe dry inside and out after every use',
      'Shown: Clear/Clear',
      'Style: NESSA209-958',
    ],
    sizes: [1],
    quantity: [1, 2, 3],
  },
  {
    id: 3,
    name: 'NIKE&nbsp;Jordan Jumpman',
    price: '$20',
    img: './images/product3.png',
    description:
      'The Jordan Jumpman Cap updates an athletic profile with a flat brim and a crisp logo. A snap closure at the back helps little ones find their fit.',
    features: [
      'Adjustable strap',
      '100% polyester',
      'Shown: Gym Red',
      'Style: 8A0128-R78',
    ],
    sizes: [1],
    quantity: [1, 2, 3],
  },
];

function populateProducts() {
  swiperWrapper.innerHTML = '';

  products.forEach((product, idx) => {
    const features = product.features.map((feature) => `<li>${feature}</li>`);
    const sizes = product.sizes.map(
      (size) => `<option value=${size}>${size}</option>`
    );
    const quantity = product.quantity.map(
      (q) => `<option value=${q}>${q}</option>`
    );

    swiperWrapper.innerHTML += `<div class="swiper-slide">
        <div class="slider-container">
          <div class="slide-box">
            <div class="slider-text">
              <h6>N E W &nbsp;C O L L E C T I O N</h6>
              <h2 class="product-name">${product.name}</h2>
              <p>
                ${product.description}
              </p>
                <ul class="features">
                ${features.join('\n')}
                </ul>
              <div class="cetagories">
                <select name="quantity" id="quantity${idx}">
                  <option value="">QNT</option>
                  ${quantity.join('\n')}
                </select>
                <select name="size" id="size${idx}">
                <option name="size" value="">SIZE</option>
                    ${sizes.join('\n')}
                </select>
                <a href="#">${product.price}</a>
              </div>
            </div>
    
            <div class="slider-img">
              <a href="#">
                <img src=${product.img} />
              </a>
            </div>
          </div>
    
          <div class="bottom-things">
            <div class="cart">
              <a href="#" class="add-to-cart"  data-idx=${idx}>Add To Cart</a>
            </div>

          </div>
        </div>
      </div>`;
  });
  swiper = new Swiper('.swiper-container');
}

populateProducts();

swiperWrapper.addEventListener('click', function (e) {
  if (!e.target.classList.contains('add-to-cart')) return;
  e.preventDefault();
  const prodIdx = e.target.getAttribute('data-idx');
  const prod = products[prodIdx];

  const qtySel = document.querySelector(`#quantity${prodIdx}`);
  const sizeSel = document.querySelector(`#size${prodIdx}`);
  const qty = +qtySel.options[qtySel.selectedIndex].value;
  const size =
    +sizeSel.options[sizeSel.selectedIndex].value || sizeSel[1].value;

  const cartItemIdx = cartItems.findIndex((item) => item.id === prod.id);
  if (cartItemIdx < 0) {

    cartItems.push({
      id: prod.id,
      name: prod.name,
      img: prod.img,
      price: prod.price,
      qty: qty || 1,
      sizes: [size],
    });
  } else {
    cartItems[cartItemIdx].qty += qty || 1;
    if (cartItems[cartItemIdx].sizes.indexOf(size) < 0)
      cartItems[cartItemIdx].sizes.push(size);
  }
 
  renderCartItems();
  shoppingCartQty.textContent = +shoppingCartQty.textContent + (qty || 1);
});

function renderCartItems() {
  sidenavBody.innerHTML = '';
  cartItems.forEach((item) => {
    const sizes = item.sizes.map((size) => `<span>${size}</span>`);
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `<div class="flex-between">
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      </div>
      <div><img class="cart-item__img" src=${item.img}></div>
      <div>
        <span>Sizes: </span>
        ${sizes.join(', ')}
      </div>
      <p>Quantity: ${item.qty}</p>
      `;
    sidenavBody.appendChild(cartItem);
    const removeBtn = document.createElement('button');
    removeBtn.id = 'remove-cart';
    removeBtn.className = 'btn-primary';
    removeBtn.textContent = 'remove';
    removeBtn.addEventListener('click', function (e) {
      removeItem(item.id, cartItem);
    });
    cartItem.appendChild(removeBtn);
  });
}

function removeItem(itemId, cartItem) {
  const itemIdx = cartItems.findIndex(item=>item.id === itemId)
  shoppingCartQty.textContent = +shoppingCartQty.textContent - (cartItems[itemIdx].qty);
  cartItems.splice(itemIdx, 1);
  cartItem.remove();
}

function toggleNav() {
  document.getElementById('sidenav').classList.toggle('open');
}
