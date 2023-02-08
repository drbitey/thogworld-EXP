const text = document.querySelector('.text');

text.innerHTML = text.innerHTML.split('').map(char => {
  return `<span>${char}</span>`;
}).join('');

text.addEventListener('mouseover', e => {
  if (e.target.tagName === 'SPAN') {
    e.target.classList.add('highlight-red');
    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.classList.add('highlight-blue');
    }
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.add('highlight-blue');
		if (e.target.nextElementSibling.nextElementSibling) {
      e.target.nextElementSibling.nextElementSibling('highlight-blue');
    }
    }
  }
});

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


