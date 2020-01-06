const btnMenu = document.querySelector('.btn-burger');


const classMenu = () => {
    const btnMenuSpan=document.querySelectorAll('.burger span');
    const leftMenu = document.querySelector('.left-navbar');
    leftMenu.classList.toggle('active');
  btnMenuSpan[0].classList.toggle('active');
  btnMenuSpan[1].classList.toggle('active');
}

document.querySelector('.burger').addEventListener('click', classMenu);

window.onscroll = () => {
    let nav = document.querySelector('.navbar-wrapper');
    let burger = document.querySelector('.burger')
    if (window.pageYOffset > 100) {
        this.console.log('Test');
        console.log(window.pageYOffset)
        nav.classList.add('nav-active');
        burger.classList.add('bounce');
    } else {
        this.console.log('Nie');
        nav.classList.remove('nav-active')
        burger.classList.remove('bounce');
    }
}


const navElements = document.querySelectorAll('.cards__item');
//looping through each anchor element
navElements.forEach(function (element) {
    //adding click event on each anchor element
    element.addEventListener('mouseenter', function (e) {
            //stop default behaviour
            e.preventDefault();
            this.querySelector('button').style.opacity = '1';
            this.querySelector('button').classList.add("mystyle");
        }

    );
});

navElements.forEach(function (element2) {
    //adding click event on each anchor element
    element2.addEventListener('mouseleave', function (e) {
            //stop default behaviour
            e.preventDefault();
            this.querySelector('button').style.opacity = '0';
            this.querySelector('button').classList.remove("mystyle");

        }

    );
});