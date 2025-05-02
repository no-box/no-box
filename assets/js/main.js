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
  const encoderContainer = document.getElementById("encoderAnim");

  const encoderAnimation = lottie.loadAnimation({
    container: encoderContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/Users/zoranmikletic/Documents/WORK/NoBox/Web/GitHub/no-box/assets/svg/nb-ms-encoder.json' // ili cijeli put ako treba
  });

  // Pokreni na klik
  document.getElementById("videoEncoderLink").addEventListener("click", (e) => {
    e.preventDefault();
    encoderContainer.style.display = "block";
    encoderAnimation.goToAndPlay(0, true);
  });

