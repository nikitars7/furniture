import Swiper from "swiper";
import {Navigation,Pagination} from 'swiper/modules';
export const swiper = () => {
  if (document.querySelector('.main-slider__body')) {
    new Swiper('.slider-main__slider', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 32,
      loop:true,
      loopAdditionalSlides:5,
      parallax:true,
      watchOverflow:true,
      speed: 800,
      pagination: {
        el: '.controls-slider__dots',
        clickable: true,
      },
      navigation: {
        prevEl: '.slider-main .slider-arrow__prev',
        nextEl: '.slider-main .slider-arrow__next',
      },
    })
  }
}