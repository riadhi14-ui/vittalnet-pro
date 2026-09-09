const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const form = document.querySelector('#quote-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;
  form.querySelectorAll('[required]').forEach((field) => {
    const label = field.closest('label');
    const hasValue = field.value.trim().length > 0;
    label.classList.toggle('invalid', !hasValue);
    if (!hasValue) valid = false;
  });
  if (!valid) {
    form.querySelector('.invalid input, .invalid select, .invalid textarea').focus();
    return;
  }
  const data = new FormData(form);
  const message = `Bonjour Vittal'Net Pro, je souhaite un devis gratuit.\n\nPrestation : ${data.get('prestation')}\nVille : ${data.get('ville')}\nNom : ${data.get('nom')}\nTéléphone : ${data.get('telephone')}\n\nMon besoin :\n${data.get('message')}`;
  window.open(`https://wa.me/33658295783?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

form.querySelectorAll('[required]').forEach((field) => field.addEventListener('input', () => {
  field.closest('label').classList.remove('invalid');
}));
