window.addEventListener('scroll', function() {

    const logo = document.querySelector(".menu__logo--main");
    const logoOffset = logo.getBoundingClientRect();
    const logoOffsetTop = logoOffset.top;
  
    if (logoOffsetTop <= 100) {
        logo.style.opacity = "1";
    } else {
        logo.style.opacity = "0";
    }

    const paintings = document.querySelector("#paintings");
    const paintingsOffset = paintings.getBoundingClientRect();
    const paintingsOffsetTop = paintingsOffset.top;
  
    if (paintingsOffsetTop <= 100) {
        const paintingsElements = document.getElementsByClassName("content__paintings");
        for (let i = 0; i < paintingsElements.length; i++) {
            paintingsElements[i].style.paddingTop = "50px";
        };
    };

});


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })