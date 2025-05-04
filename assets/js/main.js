/* Mala slova 
  // Lijevi set
  document.querySelectorAll('.link-left').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.dataset.target;

      document.querySelectorAll('.text-left').forEach(el => el.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });

  // Desni set
  document.querySelectorAll('.link-right').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.dataset.target;

      document.querySelectorAll('.text-right').forEach(el => el.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });
*/
