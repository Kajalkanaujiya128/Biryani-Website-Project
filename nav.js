

let home1 = document.querySelector(".home1");
let order1 = document.querySelector(".order1");
let contact1 = document.querySelector(".contact1");
let loginBtn1 = document.querySelector(".loginBtn1");
let menu1 = document.querySelector("#homelink2"); 


menu1.addEventListener("click", function(e) {
    e.preventDefault(); 
    window.location.reload(); 
});


home1.addEventListener("click", function() {
    window.location.href = "index.html";  
});

order1.addEventListener("click", function() {
    window.location.href = "order.html";  
});

contact1.addEventListener("click", function() {
    window.location.href = "contact.html";  
});

loginBtn1.addEventListener("click", function() {
    window.location.href = "login.html";  
});



