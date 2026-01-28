
const wordChange = document.querySelector('.word-change');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      wordChange.classList.add('visible');
    }
  });
}, {
  threshold: 0.7 // 50% of the element is in the viewport
});

observer.observe(wordChange);
