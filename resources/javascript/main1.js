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



            //chat js hide and show
            const chatS = document.getElementById('scriptchat');

            const showButton = document.getElementById('showc');

            const hideButton = document.getElementById('hidec');

            function hideChat(){
                showButton.style.display='inline';
                hideButton.style.display='none';
                chatS.style.display='none';

            }

            function showChat(){
                showButton.style.display='none';
                hideButton.style.display='inline';
                chatS.style.display='block';
            }

            hideButton.addEventListener('click', hideChat);
            showButton.addEventListener('click', showChat);