const crowdedSiteInvite = document.querySelectorAll('nav.invite-box a');

crowdedSiteInvite.forEach((elem)=>{
    elem.addEventListener('mouseover', () => {
    const crowdedSiteInviteH3 = elem.querySelector('h3');
    crowdedSiteInviteH3.style.fontSize = '3em';
})});

crowdedSiteInvite.forEach((elem)=>{
    elem.addEventListener('mouseout', () => {
    const crowdedSiteInviteH3 = elem.querySelector('h3');
    crowdedSiteInviteH3.style.fontSize = '2em';
})});

//ヘッダーを遅れて表示
const headerRug = 500;
setTimeout(() => {
    const header = document.querySelector('.fixed-header');
    header.style.transform = 'translateY(0)';
}, headerRug);

document.addEventListener('DOMContentLoaded', () => {
    const kasukoGif = document.querySelector('.kasuko-gif');
    kasukoGif.style.opacity = '1';
    kasukoGif.src = "";
    kasukoGif.src = "./images/春高祭ll.gif";
});