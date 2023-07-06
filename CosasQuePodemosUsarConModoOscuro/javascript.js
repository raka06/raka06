var darkModeToggle = document.getElementById('modo-oscuro');
var htmlElement = document.documentElement;

darkModeToggle.addEventListener('click', function() {
if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
    htmlElement.setAttribute('data-bs-theme', 'light');
} else {
    htmlElement.setAttribute('data-bs-theme', 'dark');
}
});