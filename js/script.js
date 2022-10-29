const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');
const menuLink = document.getElementById('menu-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navigation.classList.remove('active');
}));