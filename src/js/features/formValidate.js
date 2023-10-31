export const formValidate = () => {
   const form = document.querySelector('[data-validate]')
   const formElements = Array.from(form.elements);
   const emailInput = formElements.find(element => element.classList.contains('req__email'))
   console.log(emailInput)
}