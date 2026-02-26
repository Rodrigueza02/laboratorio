(() => {
  const toggleBtn = document.getElementById('toggleTheme');
  const body = document.querySelector('.dev1-body');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
  });
})();