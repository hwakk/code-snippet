// FadeIn animation
function fadeIn(element) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.style.animation = 'fadeIn 1s ease-out forwards';
      }
    });
  });
  
  observer.observe(element);
}