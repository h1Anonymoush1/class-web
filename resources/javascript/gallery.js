const arrow = document.getElementById('arrow');

const arrow1 = document.getElementById('arrow1');

const nlinks = document.getElementById('nlinks');

function hideLinks(){
    nlinks.style.display='none';
    arrow.style.display='none';
    arrow1.style.display='inline';
}

function showLinks(){
    nlinks.style.display='flex';
    arrow.style.display='inline';
    arrow1.style.display='none';
}

arrow.addEventListener('click', hideLinks);
arrow1.addEventListener('click', showLinks);