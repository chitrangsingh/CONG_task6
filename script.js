document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! We will get back to you soon.');
    // Here you can add code to send the form data to your server
    this.reset(); // Reset the form fields
});
let lightbox = document.getElementsByClassName("lightbox");
let apply_btn = document.getElementById("applyButton");
apply_btn.addEventListener("click", function() {
    // alert("Thank you for your interest in our company! We will get back to you soon.");
    lightbox[0].style.display = "flex";
    lightbox[0].style.alignItems = "center";
    lightbox[0].style.justifyContent = "center";
});
let close = document.getElementById("close");
close.addEventListener("click", function() {
    lightbox[0].style.display = "none";
});
let sendM = document.getElementById("sendM_btn");

sendM.addEventListener("click",function(){
    alert("Thank you for your message! We will get back to you soon.");
    lightbox[0].style.display = "none";
});