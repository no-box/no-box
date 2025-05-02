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

document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const svgPath = this.getAttribute('data-svg');
      document.getElementById('svg-container').innerHTML = 
          `<object type="image/svg+xml" data="${svgPath}"></object>`;
  });
});