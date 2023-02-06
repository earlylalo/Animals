const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navs = document.querySelector('.nav-links');

    burger.addEventListener('click',()=> {
        console.log("Test");
        navs.classList.toggle('nav-active');
        
    });

}

navSlide();