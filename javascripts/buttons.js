const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
    const navMenu = document.querySelector('.sp-menu');
    navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
    setTimeout(()=>{
        navMenu.style.transform = (navMenu.style.transform === 'translateY(0%)') ? 'translateY(-100%)' : 'translateY(0%)'
    }, 100);
});