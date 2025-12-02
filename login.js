// let home2 = document.querySelector(".home2");
// let menu2 = document.querySelector(".menu2");
// let order2=document.querySelector(".order2");
// let contact2=document.querySelector(".contact2");



//   document.getElementById('homeLink2').addEventListener('click', function(e){
//     e.preventDefault();   // link ka default action rokna hai
//     window.location.reload();
//   });
// home2.addEventListener("click", function() {
//     window.location.href = "food.html";  
// });


// menu2.addEventListener("click", function() {
//     window.location.href = "nav.html";  
// });

// order2.addEventListener("click", function() {
//     window.location.href = "order.html";  
// });
// contact2.addEventListener("click", function() {
//     window.location.href = "contact.html";  
// });

document.getElementById("homelink2").addEventListener("click", function (event) {
    event.preventDefault(); // Form submit rokne ke liye

    // Inputs ko read karna
    let username = document.querySelector('.login-form input[type="text"]').value.trim();
    let password = document.querySelector('.login-form input[type="password"]').value.trim();

    // Validation
    if (username === "" || password === "") {
        alert("Please fill all required fields!");
    } else {
        alert(" Successfully Logged In!");
    }
            alert(" Successfully Logged In!");
        window.location.href = "nav.html"; 
});
document.getElementById("forgetBtn").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirecting to password reset page!");
    window.location.href = "forgot-password.html"; // yaha forgot password page ka link
});

// FORGOT PASSWORD BUTTON
document.getElementById("forgetBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Default link rokna
    alert("Redirecting to password reset page!");
    window.location.href = "forget.html"; // Forgot password page ka link
});

// CREATE ACCOUNT BUTTON
document.getElementById("createBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "createACCOUNT.html"; // Create account page ka link
});