const myHamburger= document.querySelector("span");
const myLinks= document.querySelectorAll(".links");
const Lists= document.querySelector("ul");
const theNav= document.querySelector("nav");
function hamburger(){
    myHamburger.classList.toggle("cross");
    Lists.classList.toggle("mylist");
    theNav.classList.toggle("mynav");
    document.body.classList.toggle("fixed");
}
// myLinks.forEach( n => n.addEventListener('click' , () => {
//     myHamburger.classList.remove("cross");
//     Lists.classList.remove("mylist");
//     theNav.classList.remove("mynav");
// }));