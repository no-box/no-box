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
