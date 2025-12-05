


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



// Search functionality → redirect to nav.html section
function searchFood() {
    let value = searchInput.value.toLowerCase().trim();
    if (!value) return;

    let target = "";

    if (value.includes("veg")) {
        target = "#veg";
    } 
    else if (value.includes("nonveg") || value.includes("non-veg") || value.includes("non veg biryani")) {
        target = "#nonveg";
    } 
    else if (value.includes("ghar") || value.includes("thali") || value.includes("all in one") || value.includes("allinone")) {
        target = "#allinone";
    } 
    else if (value.includes("brownie")) {
        target = "#brownie";
    } 
    else {
        alert("Item not found! Try: veg, nonveg, all in one, brownie");
        return;
    }

    // Redirect to nav.html with section hash
    window.location.href = "nav.html" + target;
}

// Event listeners
searchBtn.addEventListener("click", searchFood);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchFood();
});
const menuBtn = document.getElementById("menuBtn");
const navUL = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
