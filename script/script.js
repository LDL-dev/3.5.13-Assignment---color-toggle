const navBtn = document.querySelector('.nav__btn');
const navMenu = document.querySelector('.nav__menu');
const navItems = document.querySelectorAll('.nav__item');
const colorText = document.querySelector('.color-text')
const bodyInitialClasses = document.body.classList.value;

// toggleNav() toggles the menu. 
const toggleNav = function() {
  navMenu.classList.toggle('nav__menu--expanded');
};

// toggleColor() toggles the body's background-color and displays it in the body as text.
const toggleColor = function(navItem) {
  const navItemBgColor = navItem.classList[1];
  const navItemText = navItem.firstChild;
  const colorText = navItemText.innerHTML;
  document.body.classList = bodyInitialClasses; 
  document.body.classList.add(navItemBgColor);
  document.querySelector('.body__color-text').innerHTML = colorText;
};

// Add an EventListener to the navBtn.
// When the navBtn is clicked, it will toggle the menu.
navBtn.addEventListener('click', function() {
  toggleNav();
});

// Add an EventListener to each navItem.
// When the navItem is clicked, it will toggle the body background color and the menu.
Array.from(navItems).forEach(function(navItem, index) {
  navItem.addEventListener('click', function() {
    toggleColor(navItem);
    toggleNav();
  });
});

// Add an EventListener to the document.
// When a number from 1 to 5 is pressed the body changes its background color.
document.addEventListener('keydown', function(keyDown) {
  if (keyDown.key >= '1' && keyDown.key <='5') {
    toggleColor(navItems[keyDown.key - 1]);
  }
});