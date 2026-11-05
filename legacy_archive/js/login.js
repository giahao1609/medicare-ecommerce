const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
const loginTittle = document.querySelector('.loginTittle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');
const btnLogin = document.querySelector('.btn-login');



btnNext.onclick =(e)=>{
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(() => passwordInput.focus(),500);
    loginTittle.innerHTML ='Wellcome';
    userEmail.innerHTML =emailInput.value;
}
btnBack.onclick =(e)=>{
    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTittle.innerHTML ='Login';
    userEmail.innerHTML ='Please login use the platform';
    emailInput.focus();
}
checkboxPass.onclick = () => {
    if(checkboxPass.checked) {
        passwordInput.type ='text';
    } else{
        passwordInput.Type = 'password';
    }
};

