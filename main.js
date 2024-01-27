function toggleTheme() {
    
    document.body.classList.toggle('dark-theme');

}
/*
function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var pagesLinks = document.querySelector('.pages-links');

    mobileMenu.classList.toggle('visible');
    pagesLinks.classList.toggle('visible');
}
*/
function toggleMobileMenu() {
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownMenu.classList.toggle('visible');
}