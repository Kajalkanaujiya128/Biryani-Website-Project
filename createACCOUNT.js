let btn = document.getElementById("createAccountBtn");

btn.addEventListener("click", function(e){
    e.preventDefault();

    let name = document.querySelector(".create-form .name").value.trim();
    let email = document.querySelector(".create-form .email").value.trim();
    let pass = document.querySelector(".create-form .pass").value.trim();
    let cpass = document.querySelector(".create-form .cpass").value.trim();

    if(name === "" || email === "" || pass === "" || cpass === ""){
        alert("Please fill all fields");
        return;
    }

    // simple email check
    if(!email.includes("@") || !email.includes(".")){
        alert("Invalid email");
        return;
    }

    if(pass !== cpass){
        alert("Password didn't match");
        return;
    }

    alert("Account Created Successfully");
    window.location.href = "login.html";
});
