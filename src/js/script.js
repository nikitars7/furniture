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
    const targetElement = e.target;

    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains("menu__arrow")) {
        targetElement.closest(".menu__item").classList.toggle("hover");
      }
      if(!targetElement.closest(".menu__item") && document.querySelectorAll('.menu__item.hover').length > 0){
         removeClasses(document.querySelectorAll('.menu__item.hover'),'hover')
      }
    }
    if(targetElement.classList.contains("search-form__icon")){
      targetElement.closest(".search-form").classList.toggle("active");
    }
    if(!targetElement.closest(".search-form") && document.querySelector('.search-form.active')){
      removeClasses(document.querySelectorAll('.search-form.active'),'active')
   }
  }
  const removeClasses = (items,className) => {
   const arrayOfItems = Array.from(items);
   for(let item of arrayOfItems){
    item.classList.remove(className);
   }
  }
};
