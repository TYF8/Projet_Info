window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section'); 
  const navLinks = document.querySelectorAll('nav ul li a'); 


  let currentSection = '';
  sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
      }
  });


  navLinks.forEach((link) => {
      link.classList.remove('active');
  });


  document.querySelector(`nav ul li a[href="#${currentSection}"]`).classList.add('active');
});