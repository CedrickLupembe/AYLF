let navigation = document.querySelector('.navbar');
let colorLinks = document.querySelector('.nav-link');
let hambourger = document.querySelector('.line');

// on scroll menu 

    window.addEventListener('scroll', kupanda)

        function kupanda(){
            if(window.scrollY > 30){
                navigation.classList.add('anniv_bar');
                // anniv_bar.style('-moz-background-color: #ffff !important;');
                
                
            }else{
                navigation.classList.remove('anniv_bar');
            }
        }

// onClick sur le bouton hambourger sur mobile


// testimonial animation

 let block = document.querySelector('.BlocIcon');
 let block2 = document.querySelector('.BlocIcon2');
 let block3 = document.querySelector('.BlocIcon3');

//  declare le bloc message testimo bloc
let message = document.querySelector('.BlocTestContents');
let message2 = document.querySelector('.BlocTestContents2');
let message3 = document.querySelector('.BlocTestContents3');

        // 

        block.addEventListener('click', ()=> {
            
            block.style.borderBottom = '3px solid #F07661';
            message.style.display = 'flex';
            message.style.opacity = '1';
            message.style.transition = 'all .6s easi-in-out';
    
          // none pour le deuxieme block
            block2.style.borderBottom = 'none';
            message2.style.display = 'none';
            
          
    
          //   none pour troiseme block
          block3.style.borderBottom = 'none';
            message3.style.display = 'none';
            
       })




 block2.addEventListener('click', ()=> {
          block2.style.borderBottom = '3px solid #F07661';
          message2.style.display = 'flex'; 

        // none pour le deuxieme block
          block.style.borderBottom = 'none';
          message.style.display = 'none';

        //   none pour troiseme block
        block3.style.borderBottom = 'none';
          message3.style.display = 'none';
          
     })

    block3.addEventListener('click', ()=> {
        block3.style.borderBottom = '3px solid #F07661';
        message3.style.display = 'flex'; 

      // none pour le deuxieme block
        block2.style.borderBottom = 'none';
        message2.style.display = 'none';

      //   none pour le premier block
      block.style.borderBottom = 'none';
        message.style.display = 'none';
        
   })