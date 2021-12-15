const productsList = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

for (let i = 0; i < productsList.length; i++) {
    product__quantity_control_inc(i);
    product__quantity_control_Dec(i);
    addToCart(i);
};

function product__quantity_control_inc(i) {
    productsList[i].querySelector('.product__quantity-control_inc').addEventListener('click', () => {
        (productsList[i].querySelector('.product__quantity-value').innerText) =
        parseInt(productsList[i].querySelector('.product__quantity-value').innerText) + 1;
    });
};

function product__quantity_control_Dec(i) {
    productsList[i].querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        let value = parseInt(productsList[i].querySelector('.product__quantity-value').innerText);
        if (value > 1) {
            productsList[i].querySelector('.product__quantity-value').innerText =
                parseInt(productsList[i].querySelector('.product__quantity-value').innerText) - 1;
        };
    });
};

function addToCart(i) {
    productsList[i].querySelector('.product__add').addEventListener('click', () => {
        let cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        for (let j = 0; j < cartProduct.length; j++) {
            if (cartProduct[j].dataset.id == productsList[i].dataset.id) {
                cartProduct[j].querySelector('.cart__product-count').innerText =
                    parseInt(cartProduct[j].querySelector('.cart__product-count').innerText) +
                    parseInt(productsList[i].querySelector('.product__quantity-value').innerText);
                return;
            };
        };

        let productImage = productsList[i].querySelector('.product__image');
        let htmlContainer =
            `<div class="cart__product" data-id="${productsList[i].dataset.id}">
          <img class="cart__product-image" src="${productImage.src}">
          <div class="cart__product-count">${parseInt(productsList[i].querySelector('.product__quantity-value').innerText)}</div>
        </div>`;
        cartProducts.insertAdjacentHTML('beforeEnd', htmlContainer);
    });
};