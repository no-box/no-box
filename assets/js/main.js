/* PRAZNO :-) 

  document.querySelectorAll('.tekst-trigger').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Sakrij sve tekstove
      document.querySelectorAll('.tekst').forEach(t => t.classList.remove('active'));

      // Prikaži ciljani tekst
      const targetId = this.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        target.classList.add('active');
      }
    });
  });
  
  */