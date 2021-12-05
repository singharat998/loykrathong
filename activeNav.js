const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navLink");


window.onscroll = () => {

    
    section.forEach(sec=>{
        var top = window.scrollY;
        var offset = (sec.offsetTop - 150);
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if (top > offset && top < offset + height){

            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar-menu ul li a[href*='+ id +']').classList.add('active');
            })
        }
    })


}