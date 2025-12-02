


// let homeBtn = document.querySelector("#home-btn");
let menu = document.querySelector(".menu");
let order=document.querySelector(".order");
let contact=document.querySelector(".contact");


// homeBtn.addEventListener("click", function() {
//     window.location.href = "home.html";  
// });

  document.getElementById('homeLink').addEventListener('click', function(e){
    e.preventDefault();   // link ka default action rokna hai
    window.location.reload();
  });



menu.addEventListener("click", function() {
    window.location.href = "nav.html";  
});

order.addEventListener("click", function() {
    window.location.href = "order.html";  
});
contact.addEventListener("click", function() {
    window.location.href = "contact.html";  
});
let orderBtn = document.querySelector('.btn.order');

orderBtn.addEventListener('click', function() {
    window.location.href = "order.html";
});
let learnBtn = document.querySelector('.btn.learn');

learnBtn.addEventListener('click', function() {
    // Smooth scroll to menu section
    const menuSection = document.querySelector('#menu-section');
    if(menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Agar section nahi hai, ek info page pe jao
        window.location.href = "nav.html";
    }
});
// VEG IMAGE → Veg Section
document.getElementById("vegImg").addEventListener("click", () => {
    window.location.href = "nav.html#veg";
});

// ALL IN ONE → All In One Section
document.getElementById("nonvegImg").addEventListener("click", () => {
    window.location.href = "nav.html#allinone";
});

// NON VEG → Nonveg Section
document.getElementById("thaliImg").addEventListener("click", () => {
    window.location.href = "nav.html#nonveg";
});

// BROWNIE → Brownie Section
document.getElementById("brownieImg").addEventListener("click", () => {
    window.location.href = "nav.html#brownie";
});



