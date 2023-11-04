import { ibg } from "./ibg.js";
export const addToCart = (button, id) => {
  if (!button.classList.contains("hold")) {
    button.classList.add("hold");
    button.classList.add("fly");

    const headerCart = document.querySelector(".cart-header__icon");
    const product = document.querySelector(`[data-pid="${id}"]`);
    const productImage = product.querySelector(".item-product__image");

    const productImageFly = productImage.cloneNode(true);

    const productImageFlyWidth = productImage.offsetWidth;
    const productImageFlyHeight = productImage.offsetHeight;
    const productImageFlyTop = productImage.getBoundingClientRect().top;
    const productImageFlyLeft = productImage.getBoundingClientRect().left;
    productImageFly.setAttribute("class", "flyImage ibg");
    productImageFly.style.cssText = `
    left:${productImageFlyLeft}px;
    top:${productImageFlyTop}px;
    width:${productImageFlyWidth}px;
    height:${productImageFlyHeight}px;
    `;
    document.body.append(productImageFly);

    const cartFlyLeft = headerCart.getBoundingClientRect().left;
    const cartFlyTop = headerCart.getBoundingClientRect().top;
    productImageFly.style.cssText = `
    left:${cartFlyLeft}px;
    top:${cartFlyTop}px;
    width:0px;
    height:0px;
    opacity:0;
    `;
    ibg();
    productImageFly.addEventListener("transitionend", () => {
      if (button.classList.contains("fly")) {
        productImageFly.remove();
        updateCart(button, id);
        button.classList.remove("fly");
      }
    });
  }
};
export const updateCart = (button, id, productAdd = true) => {
  const cart = document.querySelector(".cart-header");
  const cartIcon = document.querySelector(".cart-header__icon");
  const cartQuantity = cartIcon.querySelector("span");
  const cartProduct = document.querySelector(`[data-cart-pid="${id}"]`);
  const cartList = document.querySelector(".cart-list");

  //Add
  if (productAdd) {
    if (cartQuantity) {
      cartQuantity.innerHTML = ++cartQuantity.innerHTML;
    } else {
      cartIcon.insertAdjacentHTML("beforeend", "<span>1</span>");
    }
    if (!cartProduct) {
      const product = document.querySelector(`[data-pid="${id}"]`);
      const productImage = product.querySelector(
        ".item-product__image"
      ).innerHTML;
      const productTitle = product.querySelector(
        ".item-product__name"
      ).innerHTML;
      const cartProductContent = `
      <a href="" class="cart-list__image ibg">${productImage}</a>
      <div class="cart-list__body">
        <a href="" class="cart-list__title">${productTitle}</a>
        <div class="cart-list__quantity">Quantity: <span>1</span></div>
        <a href="" class="cart-list__delete">Delete</a>
      </div>
      `;
      cartList.insertAdjacentHTML(
        "beforeend",
        `<li data-cart-pid="${id}" class="cart-list__item">${cartProductContent}</li>`
      );
      ibg();
    } else {
      const cartProductQuantity = cartProduct.querySelector(
        ".cart-list__quantity span"
      );
      cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
    }
    button.classList.remove('hold');
  }
  //remove
  else{
    const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
    cartProductQuantity.innerHTML= --cartProductQuantity.innerHTML;
    if(!parseInt(cartProductQuantity.innerHTML)){
      cartProduct.remove();
    }
    const cartQuantityValue = --cartQuantity.innerHTML;
    if(cartQuantityValue){
      cartQuantity.innerHTML = cartQuantityValue;
    }else{
      cartQuantity.remove();
      cart.classList.remove('active');
    }
  }
};
