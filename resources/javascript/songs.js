const arrow = document.getElementById('arrow');

const arrow1 = document.getElementById('arrow1');

const nlinks = document.getElementById('nlinks');

const headerH1 = document.getElementById('headerh1');

var x = window.matchMedia("(max-width: 786px)")
ipad(x) 
x.addListener(ipad)

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

//media quary ipad
function ipad(x) {
  if (x.matches) { 
    nlinks.style.display='none';
    arrow.style.display='none';
    arrow1.style.display='inline';
    arrow.style.right='16rem';
  }
}