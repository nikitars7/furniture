import { ibg } from "./ibg.js";

export const fetchProducts = async (button) => {
  if (!button.classList.contains("hold")) {
    button.classList.add("hold");
    const file = "json/data.json";
    try {
      let response = await fetch(file);
      let result = await response.json();
      toggleProducts(result);
      button.classList.remove("hold");
      button.remove();
    } catch (e) {
      alert("error" + e.message);
      console.log(e.message);
    }
  }
};

function toggleProducts(data) {
  console.log(data.products);
  const productsBody = document.querySelector(".products__body");
  const labels = data.products.map((product) => product.labels);
  const templateOfLabels = labels.map((label) =>
    label === null
      ? null
      : label.map(
          (properties) => `
   ${
     properties.type === "new"
       ? `<div class="item-product__label item-product__label--new">${properties.value}</div>`
       : `<div class="item-product__label item-product__label--sale">
       ${properties.value}
     </div>`
   }
  `
        )
  );
  const newProducts = data.products
    .map(
      (product, index) =>
        `
         <article data-pid="${product.id}" class="products__item item-product">
         <div class="item-product__labels">
           ${
             templateOfLabels[index] !== null
               ? templateOfLabels[index].join("")
               : ""
           }
         </div>
         <a href="" class="item-product__image ibg">
           <img src="img/products/${product.image}" alt="${product.title}" />
         </a>
         <div class="item-product__body">
           <div class="item-product__content">
             <h4 class="item-product__name">${product.title}</h4>
             <div class="item-product__description">${product.description}</div>
           </div>
           <div class="item-product__prices">
             <div class="item-product__price">${product.prices.price}</div>
             ${
               product.prices?.oldPrice
                 ? `<div class="item-product__price item-product__price--old">${product.prices.oldPrice}</div>`
                 : ""
             }
           </div>
           <div class="item-product__actions actions-item">
             <div class="actions-item__body">
               <a href="" class="actions-item__button btn btn--white">Add to cart</a>
               <a href="" class="actions-item__link icon-share">Share</a>
               <a href="" class="actions-item__link icon-favorite">Like</a>
             </div>
           </div>
         </div>
         </article>
         `
    )
    .join("");
  productsBody.insertAdjacentHTML("beforeend", newProducts);
  ibg();
}
