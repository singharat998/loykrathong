const HambergerNav = document.querySelector('.nav-hamberger');
const NavbarMenu = document.querySelector('.navbar-menu')


HambergerNav.addEventListener("click",()=>{
    NavbarMenu.classList.toggle("active")
})