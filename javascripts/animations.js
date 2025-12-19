const crowdedSiteInvite = document.querySelector('nav.invite-box a');

crowdedSiteInvite.forEach((elem)=>
    {
        elem.addEventListener('mouseover', () => {
        const crowdedSiteInviteH3 = crowdedSiteInvite.querySelector('h3');
        crowdedSiteInviteH3.style.fontSize = '3em';
    })
});

crowdedSiteInvite.forEach((elem)=>{
    elem.addEventListener('mouseout', ()=>{
        const crowdedSiteInviteH3 = crowdedSiteInvite.querySelector('h3');
        crowdedSiteInviteH3.style.fontSize = '2em';
    })
})
