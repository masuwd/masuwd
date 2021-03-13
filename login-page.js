const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const checkbox = document.getElementById("pure-checkbox")
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const idcard = loginForm.idcard.value;
    const mobile = loginForm.mobile.value;

   
    if (username.length != 2 && password.length > 6   ) 
      {   
             alert("You have successfully logged in.");
          
            // location.reload();       
     else 
     {
        loginErrorMsg.style.opacity = 1;
     }
})
