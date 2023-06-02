// Smooth scrolling to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    const offset = 130;
    
    if (section) {
      const top = section.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  }

// Click navigation menu items to scroll to section
document.addEventListener('DOMContentLoaded', function() {
const navLinks = document.querySelectorAll('nav a');

for (let i = 0; i < navLinks.length; i++) {
    let link = navLinks[i];
    
    link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToSection(targetId);
    });
}
});

// Reveal go to top button
window.addEventListener('scroll', function() {
const goToTopButton = document.getElementById('go-to-top');
if (window.scrollY > 200) {
    goToTopButton.style.display = 'block';
} else {
    goToTopButton.style.display = 'none';
}
});

// Scroll to top when clicked
function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}
