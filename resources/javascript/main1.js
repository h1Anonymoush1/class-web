            const arrow = document.getElementById('arrow');

            const arrow1 = document.getElementById('arrow1');

            const nlinks = document.getElementById('nlinks');

            const headerH1 = document.getElementById('headerh1');

            var x = window.matchMedia("(max-width: 786px)")
            ipad(x) // Call listener function at run time
            x.addListener(ipad) // Attach listener function on state changes

            /*var y = window.matchMedia("(max-width: 480px)")
            mobile(y) // Call listener function at run time
            x.addListener(mobile) // Attach listener function on state changes*/

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
                var password = 2007;
                var x = prompt("Enter in the password "," ");
                if (x.toLowerCase() == password) {
                //alert("Come right in \n \n You've entered in the right password");
                chatS.style.display='block';;
                } else {
                //alert("please try again")
                hideChat();
                }
            }

            hideButton.addEventListener('click', hideChat);
            showButton.addEventListener('click', showChat);

            //media quary ipad
            function ipad(x) {
                if (x.matches) { 
                  nlinks.style.display='none';
                  arrow.style.display='none';
                  arrow1.style.display='inline';
                  arrow.style.right='16rem';
                }
              }

