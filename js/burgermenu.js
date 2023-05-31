const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', function() {
  menu.classList.toggle('show-menu');
});
window.addEventListener('resize', function() {

const screenWidth = window.innerWidth;
  
if (screenWidth > 768 && menu.classList.contains('show-menu')) {
  
menu.classList.remove('show-menu');
  
}
  
});