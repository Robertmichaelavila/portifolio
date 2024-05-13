var menu = document.querySelector('#menu')
var navbar = document.querySelector('.navbar')

menu.addEventListener("click", () => {
  navbar.classList.toggle('Viewnavbar');
  menu.classList.toggle('bx-x')
});


/*============ scroll reveal =============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 5;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })

  navbar.classList.remove('Viewnavbar');
  menu.classList.remove('bx-x')

}

/*============ scroll reveal =============*/
ScrollReveal({ 
  /*reset: true,*/
  distance: '80px',
  duration: 1500,
  delay: 100
});

ScrollReveal().reveal('.anm_top', { origin: 'top' });
ScrollReveal().reveal('.anm_bottom', { origin: 'bottom' });
ScrollReveal().reveal('.anm_left', { origin: 'left' });