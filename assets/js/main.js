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


  // Definicije animacija (učitane unaprijed, ali autoplay: false)
  const encoderAnim = lottie.loadAnimation({
    container: document.getElementById("encoderAnim"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "assets/svg/nb-ms-encoder.json"
  });

  const bondingAnim = lottie.loadAnimation({
    container: document.getElementById("bondingAnim"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "assets/svg/nb-ms-bonding.json"
  });

  const backendAnim = lottie.loadAnimation({
    container: document.getElementById("backendAnim"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "assets/svg/nb-ms-backend.json"
  });

  // Utility: sakrij sve prije pokretanja
  function hideAllAnimations() {
    document.querySelectorAll(".lottie-anim").forEach(div => {
      div.style.display = "none";
    });
  }

  // Klik handleri
  document.getElementById("videoEncoderLink").addEventListener("click", (e) => {
    e.preventDefault();
    hideAllAnimations();
    document.getElementById("encoderAnim").style.display = "block";
    encoderAnim.goToAndPlay(0, true);
  });

  document.getElementById("networkBondingLink").addEventListener("click", (e) => {
    e.preventDefault();
    hideAllAnimations();
    document.getElementById("bondingAnim").style.display = "block";
    bondingAnim.goToAndPlay(0, true);
  });

  document.getElementById("cloudBackendLink").addEventListener("click", (e) => {
    e.preventDefault();
    hideAllAnimations();
    document.getElementById("backendAnim").style.display = "block";
    backendAnim.goToAndPlay(0, true);
  });


