var username = document.querySelector('#username')
var email = document.querySelector('#email')
var phonenumber = document.querySelector('#phonenumber')
var form = document.querySelector('form')

function showError(input,message){
   let parent= input.parentElement;
   let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = massage
}
function showSuccess(input){
    let parent= input.parentElement;
   let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ' '
}

function checkEmptyError(listInput){
    let isEmtyError=false;
    listInput.forEach(input=>{
        input.value =input.value.trim()
        if(!input.value){
            isEmtyError=true;
            showError(input,' không được để trống')
        }else{
            showSuccess(input)
        }
    });
    return isEmtyError
}
function checkEmailError(input) {
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()
    let isEmailError =!regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,'Email Invalid')
    }
    return isEmailError
}
function checkLengthError(input,min,max)
{
    input.value=input.value.trim()
    if(input.value.length<min){
        showError(input,'Phải có ít nhất ${min} ký tự ')
        return true
    }
    if(input.value.length<max){
        showError(input,' Không được vượt quá ${max} ký tự ')
        return true
    }

    return false
}
function checkphonenumber(input)
{
    const regexphone =/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
   
      input.value = input.value.trim()
      let isPhoneError =!regexphone.test(input.value)
      if(regexphone.test(input.value)){
          showSuccess(input)
      }else{
          showError(input,'Phone Invalid')
      }
      return isPhoneError
  
}
form.addEventListener('submit',function(e){
    e.preventDefault()
   let isEmtyError = checkEmptyError( username,email,phonenumber)
   let isEmailError=checkEmailError(email)
   let isUsernameLengthError= checkLengthError(username,3,10)
   let isPhoneError=checkphonenumber(phonenumber)
})
