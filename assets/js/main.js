/* Animacije deley */

document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetAnimacije = entry.target.querySelector('.animacije');
        if (targetAnimacije) {
          targetAnimacije.classList.add('animiraj-start');
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.sekcija').forEach(section => {
    observer.observe(section);
  });
});

/* Lottie */
document.addEventListener('DOMContentLoaded', function() {
  // Get all link elements
  const links = document.querySelectorAll('.link');
  
  // Get the SVG element
  const svg = document.querySelector('svg');
  
  // Hide all SVG paths initially (except maybe the background)
  const paths = svg.querySelectorAll('path:not(#background)');
  paths.forEach(path => {
      path.style.opacity = '0';
      path.style.transition = 'opacity 0.5s ease';
  });
  
  // Add click event listeners to each link
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Get the target path ID from the link's data attribute
          const targetId = this.getAttribute('data-target');
          
          // Hide all paths first
          paths.forEach(path => {
              path.style.opacity = '0';
          });
          
          // Show the selected path
          if (targetId) {
              const targetPath = document.getElementById(targetId);
              if (targetPath) {
                  targetPath.style.opacity = '1';
                  
                  // Add animation class if you want more complex animations
                  targetPath.classList.add('animate');
              }
          }
      });
  });
});
