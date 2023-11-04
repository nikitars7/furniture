import { fetchProducts } from "./features/fetchProducts.js";
import { addToCart, updateCart } from "./features/addtoCart.js";
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
export const handleHoverClick = () => {
  document.addEventListener("click", documentActions);
  function documentActions(e) {
    e.preventDefault()
    const targetElement = e.target;

    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains("menu__arrow")) {
        targetElement.closest(".menu__item").classList.toggle("hover");
      }
      if (
        !targetElement.closest(".menu__item") &&
        document.querySelectorAll(".menu__item.hover").length > 0
      ) {
        removeClasses(document.querySelectorAll(".menu__item.hover"), "hover");
      }
    }
    if (targetElement.classList.contains("search-form__icon")) {
      targetElement.closest(".search-form").classList.toggle("active");
    }
    if (
      !targetElement.closest(".search-form") &&
      document.querySelector(".search-form.active")
    ) {
      removeClasses(document.querySelectorAll(".search-form.active"), "active");
    }
    if(targetElement.classList.contains('products__more')){
      fetchProducts(targetElement);
    }
    if(targetElement.classList.contains('actions-item__button')){
     const productId = targetElement.closest('.products__item').dataset.pid;
     addToCart(targetElement,productId)
    }
    if(targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')){
     if(document.querySelector('.cart-list').children.length > 0){
     document.querySelector('.cart-header').classList.toggle('active');
     }
    }else if(!targetElement.closest('.cart-header') && !targetElement.classList.contains('actions-item__button')){
      document.querySelector('.cart-header').classList.remove('active');
    }
    if(targetElement.classList.contains('cart-list__delete')){
      const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
      updateCart(targetElement,productId,false);
    }
  }
  const removeClasses = (items, className) => {
    const arrayOfItems = Array.from(items);
    for (let item of arrayOfItems) {
      item.classList.remove(className);
    }
  };
};
export const arrowInitSpoilers = () => {
  window.addEventListener('load',(e) => {
    if(document.querySelector('.footer__menu._init')){
      const spoilerTitles = document.querySelectorAll(".menu-footer__title");
      const arrayOfTitles = Array.from(spoilerTitles);
      arrayOfTitles.map((title) => title.classList.add("icon-arrow-down"));
    }
    const mql = window.matchMedia("(max-width:768px)");
    const spoilerTitles = document.querySelectorAll(".menu-footer__title");
    const arrayOfTitles = Array.from(spoilerTitles);
    mql.addEventListener("change", (e) => {
      if (e.matches || window.innerWidth < 768) {
        arrayOfTitles.map((title) => title.classList.add("icon-arrow-down"));
      } else {
        arrayOfTitles.map((title) => title.classList.remove("icon-arrow-down"));
      }
    });
  })
};

export const scrollHeader = () => {
  const headerElement = document.querySelector('.header')
  const callback = (entries,observer) => {
    if(entries[0].isIntersecting){
      headerElement.classList.remove('scroll')
    }else{
      headerElement.classList.add('scroll')
    }
  }
  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);
}
