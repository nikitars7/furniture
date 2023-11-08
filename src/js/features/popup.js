const popUpDocument = document.createElement('div');
popUpDocument.classList.add('popup__window');
const popUpContent = document.createElement('div');
popUpContent.classList.add('popup__content');
 popUpDocument.append(popUpContent);

export const initPopUp = (image,isOpen = false) => {
   if(isOpen === true){
     popUpDocument.remove();
     popUpContent.firstChild.remove();
   }else{
      let imageUrl = image.src.slice(image.src.indexOf('i'));
      popUpContent.insertAdjacentHTML('beforeend',`<img src="${imageUrl}" alt="image"/>`);
      document.body.append(popUpDocument);
   }
}
