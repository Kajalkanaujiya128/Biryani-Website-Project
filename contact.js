let home2 = document.querySelector(".home2");
let menu2 = document.querySelector(".menu2");
let order2=document.querySelector(".order2");
let contact1=document.querySelector(".homelink3");
let loginBtn1=document.querySelector(".loginBtn1");

  document.getElementById('homeLink3').addEventListener('click', function(e){
    e.preventDefault();   // link ka default action rokna hai
    window.location.reload();
  });

home2.addEventListener("click", function() {
    window.location.href = "index.html";  
});


menu2.addEventListener("click", function() {
    window.location.href = "nav.html";  
});

order2.addEventListener("click", function() {
    window.location.href = "order.html";  
});
// contact1.addEventListener("click", function() {
//     window.location.href = "contact.html";  
// });
loginBtn1.addEventListener("click", function() {
    window.location.href = "login.html";  
});

document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("contactForm");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const msgField = document.getElementById("message");

    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");


    // ⭐ SUBMIT BUTTON FUNCTIONALITY
    submitBtn.addEventListener("click", function(e){
        e.preventDefault();

        let name = nameField.value.trim();
        let email = emailField.value.trim();
        let msg = msgField.value.trim();

        if(name === "" || email === "" || msg === ""){
            alert("Please fill all the fields!");
            return;
        }

        if(!email.includes("@") || !email.includes(".")){
            alert("Please enter a valid email!");
            return;
        }

        alert("Thank you, " + name + "! Your message has been submitted.");
        form.reset();
    });


    //  RESET BUTTON FUNCTIONALITY
    resetBtn.addEventListener("click", function(e){
        e.preventDefault();

        let confirmReset = confirm("Are you sure you want to reset the form?");
        if(confirmReset){
            form.reset();
        }
    });

});

