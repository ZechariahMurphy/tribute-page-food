const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 255) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset < 2100) {
        document.body.style.backgroundImage = "url(/images/seamless_pizza_image5.jpg)";
    } 
    else if (window.pageYOffset < 3750) {
        document.body.style.backgroundImage = "url(/images/seamless_sushi_image3.jpg)";
    } 
    else {
        document.body.style.backgroundImage = "url(/images/seamless_bibimbap_image4.jpg)";
    };
});