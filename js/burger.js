document.addEventListener('DOMContentLoaded', () =>  {
  const burgerMenu = document.querySelector('.burgermenu');
  const navLinks = document.querySelector('.navlinks');

  burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    const expanded = burgerMenu.getAttribute('aria-expanded') === 'true' || false;
    burgerMenu.setAttribute('aria-expanded', !expanded);
  });
});