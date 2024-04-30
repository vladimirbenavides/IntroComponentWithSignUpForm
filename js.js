/* let firstName = document.getElementById('firstNameInput'); */
const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const email = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

const button = document.querySelector('#button');


button.addEventListener('click', (event)=>{
    event.preventDefault();/*form*/
   validateEmpty(firstName.value, firstName,firstNameError,'First Name cannot be empty');
   validateEmpty(lastName.value, lastName,lastNameError,'last Name cannot be empty');
   validateEmail(email.value, email, emailError);
   validateEmpty(password.value, password,passError,'Password cannot be empty');
});

function validateEmail(valueInput, divInput, divError){/*Regular Expresion*/
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    
    console.log(valueInput);

    if(regExp.test(valueInput) == true){

        hideError(divInput,divError);
       
        
    } else {
       
       
        showError(divInput, divError,'looks like this is not an email');
    }

}

function validateEmpty(valueInput,divInput,divError,nameInput){

    if (valueInput.length==0) {
        showError(divInput,divError,nameInput);

    }else{
        hideError(divInput,divError);
    }
    
}

function showError(divInput, divError,error){
    divInput.style.border ='1px solid red';
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="icon"> <p class="error">${error}</p>`; /*${}add input */
}
function hideError(divInput,divError){
    divInput.style.border ='1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
    
}