import { isMobile } from "../script.js";
export const furnitureGallery = () => {
   const furniture = document.querySelector('.furniture__body');
   if(furniture && !isMobile.any()){
      const furnitureItems = document.querySelector('.furniture__items');
      const furnitureColumns = document.querySelectorAll('.furniture__column');
   
      //Speed of the animation 
      const speed = furniture.dataset.speed;
   
      //declare new variables
      let positionX = 0;
      let coordXprocent = 0;
   
      const setMouseGalaxyStyle = () => {
         let furnitureItemsWidth= 0;
         furnitureColumns.forEach(element => {
             furnitureItemsWidth += element.offsetWidth;
         })
         const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
         const distX = Math.floor(coordXprocent - positionX);
         positionX = positionX + (distX * speed);
         let position = furnitureDifferent / 200 * positionX;
         furnitureItems.computedStyleMap.cssText = `transform: translate3d(${-position}px,0,0)`;
   
         if(Math.abs(distX) >0){
            requestAnimationFrame(setMouseGalaxyStyle)
         }else{
            furniture.classList.remove('init')
         }
         furniture.addEventListener('mousemove',(e) => {
            //Getting width
          const furnitureWidth = furniture.offsetWidth;
           //Zero in the middle
           const coordX = e.pageX - furnitureWidth /2;
            //Getting percentage
            coordXprocent =  coordX / furnitureWidth * 200;
               if(!furniture.classList.contains('init')){
                  requestAnimationFrame(setMouseGalaxyStyle);
                  furniture.classList.add('init')
               }
         })
      }
   }
}

