
let main = document.getElementById('preview');
let success = document.getElementById('success-section');
let returnhome = document.getElementById('returnhome');
let error = document.getElementById('error');
let form = document.getElementById('form');
let emailValue = document.getElementById('emailvalue');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email = document.getElementById('email').value;
    emailValue.textContent = email;
    if(!email || !validateForm(email)){
        error.style.display= 'block';
    }else{
        main.style.display ='none'
        success.style.display = 'block'
    }
})

function validateForm(email){
    let emailState = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailState.test(email);
}

returnhome.addEventListener('click',()=>{
    // e.preventDefault();
    main.style.display ='block'
    success.style.display = 'none'
    form.reset();
})