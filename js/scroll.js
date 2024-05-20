const scrollTop = document.querySelector('#scrollTop');

// Scroll to top
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});