//local storage theme store
//local storage theme get
function loadThisThing() {
  if(localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark-theme");
  }
}

//check which theme is in local


function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains("dark-theme")) {
      localStorage.setItem("dark", "true");
    }
    else {
      localStorage.setItem("dark","false");
    }
    let sbarBtn = document.querySelector(".menu-btn-sidebar");
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