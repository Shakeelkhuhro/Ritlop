// For Search Button functionalty
/* const form = document.getElementById('search-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = form.elements['search-term'].value;

  // TODO: Add code to perform search with searchTerm
});
*/

// setting navbar
// When a navbar link is clicked,hide the navbar by removing the show class from the navbar - collapse element.
// When the document is clicked, you can hide the navbar if it is visible

// Get the navbar element and the collapse button
const navbar = document.querySelector('.navbar');
const collapseButton = navbar.querySelector('.navbar-toggler');

// Get the navbar links and attach a click event listener to them
const navbarLinks = navbar.querySelectorAll('.nav-link');
navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.querySelector('.navbar-collapse').classList.remove('show');
  });
});

// Attach a click event listener to the document to hide the navbar when clicked outside
document.addEventListener('click', (event) => {
  const isNavbarOpen = navbar.querySelector('.navbar-collapse.show');
  const isNavbarClicked = navbar.contains(event.target) || collapseButton.contains(event.target);
  if (isNavbarOpen && !isNavbarClicked) {
    navbar.querySelector('.navbar-collapse').classList.remove('show');
  }
});
