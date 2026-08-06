
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', function(event){
  event.preventDefault();
  const value = id => document.getElementById(id).value || 'Not supplied';
  const message = `Hi Real BoneZ, I would like a quote.

Name: ${value('name')}
Phone: ${value('phone')}
Vehicle: ${value('vehicle')}
VIN/Registration: ${value('vin')}
Service: ${value('service')}
Location: ${value('location')}
Details: ${value('details')}`;
  window.open('https://wa.me/27722860769?text=' + encodeURIComponent(message), '_blank');
});
