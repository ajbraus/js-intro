
clickMe.addEventListener('click', () => {
  box.style.color = "red";
})

// Show an element
const show = (elem) => { elem.style.display = 'block' };

// Hide an element
const hide = (elem) => { elem.style.display = 'none' };

// Toggle element visibility
const toggle = (elem) => {
	window.getComputedStyle(elem).display === 'block') ? hide(elem) : show(elem)
};

hideMe.addEventListener('click', () => {
  hide(box);
});

showMe.addEventListener('click', () => {
  show(box);
});

toggleMe.addEventListener('click', () => {
  toggle(box);
});
