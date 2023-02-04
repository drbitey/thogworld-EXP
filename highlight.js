text.addEventListener('mouseout', e => {
  if (e.target.tagName === 'SPAN') {
    e.target.classList.remove('highlight-red');
    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.classList.remove('highlight-blue');
    }
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.remove('highlight-blue');
    }
  }
});
