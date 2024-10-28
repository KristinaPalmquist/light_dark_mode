const toggle = document.querySelector('.toggle');
const knob = document.querySelector('.knob');
const icon = document.querySelector('.icon');
const body = document.body;

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');

  if (toggle.classList.contains('active')) {
    body.style.backgroundColor = '#1e1e2e';
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    body.style.backgroundColor = '#ffebcd';
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});
