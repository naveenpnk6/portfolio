const toggleBtn=document.getElementsByClassName("toggle-btn")[0];
const navbarLinks=document.getElementsByClassName("navbar-links")[0];
const toggleBar=document.querySelectorAll('.link-tags li');
toggleBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
    
})