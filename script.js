// Smooth scrolling to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    const offset = 140;
    
    if (section) {
      const top = section.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  }
  
  // Add click event listeners to navigation links
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
  
  // Back to top button functionality
  window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  