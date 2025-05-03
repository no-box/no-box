/* Prazno */
document.querySelectorAll('.image-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const imagePath = this.getAttribute('data-image');
      document.getElementById('image-display').style.backgroundImage = `url('${imagePath}')`;
  });
});