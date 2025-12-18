const crowdedSiteInvite = document.querySelector('nav.crowded-site-invite a');

crowdedSiteInvite.addEventListener('mouseover', () => {
    const crowdedSiteInviteH3 = crowdedSiteInvite.querySelector('h3');
    crowdedSiteInviteH3.style.fontSize = '3em';
});

crowdedSiteInvite.addEventListener('mouseout', () => {
    const crowdedSiteInviteH3 = crowdedSiteInvite.querySelector('h3');
    crowdedSiteInviteH3.style.fontSize = '2em';
});
