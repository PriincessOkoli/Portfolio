let typed = new Typed('.auto-input',{strings: ['Web Developer','Web Designer','Frontend Developer'],
typeSpeed: 100,
backSpeed: 100,
loop: true,
});

const counters = document.querySelectorAll('.counter')

counters.forEach(counter =>{
    const updatecount = () =>{
        const target = counter.getAttribute('data-target')
        const count = +counter.innerText;

        const inc = 0.5

        if(count < target){
            counter.innerText = count + inc;
            setTimeout(updatecount, 1)
        }else{
            counter.innerText = target
        }
    
    }
    updatecount()

})


function myFun(){
    let hey = document.getElementById('arrowup')
    hey.style.color = 'black'
}



// const header = document.querySelector('.navbar');

// window.onscroll = function(){
//     var top = window.scrollY;
  

//     if (top >= 100){
//         header.classList.add('active');
 
//     }else{
//         header.classList.remove('active')
//     }
// }

$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    });

    $('.toggle-btn').click(function(){
        $('.navbar .nav').toggleClass('active');
        $('.toggle-btn i').toggleClass('active');
    }); 
    $('.nav').click(function(){
        $('.navbar .nav').removeClass('active');
        $('.toggle-btn i').removeClass('active');
    })


});



