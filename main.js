const btnMenu = document.querySelector('.btn-burger');


const classMenu = () => {
    const btnMenuSpan = document.querySelectorAll('.burger span');
    const leftMenu = document.querySelector('.left-navbar');
    leftMenu.classList.toggle('active');
    for(let i=0;i<btnMenuSpan.length;i++)
    btnMenuSpan[i].classList.toggle('active');
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
        nav.classList.remove('nav-active')
        burger.classList.remove('bounce');
    }
}


const navElements = document.querySelectorAll('.cards__item.main');
//looping through each anchor element
navElements.forEach(function (element) {
    //adding click event on each anchor element
    element.addEventListener('mouseenter', function (e) {
            //stop default behaviour
            e.preventDefault();
   
            this.querySelector('.cards.main button.cards__item__btn').classList.add("mystyle");
        }

    );
});

navElements.forEach(function (element2) {
    //adding click event on each anchor element
    element2.addEventListener('mouseleave', function (e) {
            //stop default behaviour
            e.preventDefault();
        
            this.querySelector('.cards.main button.cards__item__btn').classList.remove("mystyle");

        }

    );
});

const linkActive = document.querySelectorAll('.menu-link');

let tabLink =[];

linkActive.forEach((item)=>{
    
    item.addEventListener('click',(e)=> {
        
    
        tabLink=[];
        tabLink.push(e.target.href)
      console.log(e.target.href);
    })
})

const aboutMask = document.querySelector('.mask');
const aboutContent = document.querySelector('.about-me__content');

const aboutBounce = () => {
    aboutContent.classList.add('bounce');
    console.log('mouse')
}
const aboutBounceRemove = () => {
    aboutContent.classList.remove('bounce');
}

//aboutMask.addEventListener('mouseenter', aboutBounce);
//aboutMask.addEventListener('mouseleave', aboutBounceRemove);

const headerBounce=(e)=> {
e.classList.add('.bounce')
console.log(e.target)
}


headerBounce(document.querySelector('h1'))

console.log(window.location.href);