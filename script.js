
const toggleBtn = document.getElementById("navbar-toggle");
const navberLinks = document.getElementsByClassName('navbar-links');

toggleBtn.addEventListener("click",function(){
    console.log("Hello world")
    for (let i = 0; i<navberLinks.length; i++){
        console.log("Clicked me");
        navberLinks[i].classList.toggle('active')
    }
})