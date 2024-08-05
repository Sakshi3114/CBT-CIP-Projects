document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typing-text');
    const text = "Web Developer";
    let index = 0;
    const typingSpeed = 300; // Typing speed in milliseconds

    function type() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setInterval(type, typingSpeed); // Call the function recursively
        }
    }

    type();  
});


var tablinks = document.querySelectorAll('.tab-links');
var tabcontents = document.querySelectorAll('.tab-contents');

function opentab(tabname){
for(var tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(var tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add('active-tab');
}