const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navs = document.querySelector('.navs');

    burger.addEventListener('click',()=> {
        console.log("Test");
        navs.classList.toggle('navigation-active');
    });

}

navSlide();