function toggleTheme() {
    
    document.body.classList.toggle('dark-theme');

}
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
    const btn = document.querySelector(".menu-btn-sidebar");
  btn.style.display = "none";
}
function hideSidebar() {
    const hidebar = document.querySelector('.sidebar');
    hidebar.style.display = 'none';
    const btn = document.querySelector(".menu-btn-sidebar");
  btn.style.display = "block";
}