

window.addEventListener('scroll', function(e){
     
    const target=document.querySelector('.scrol');
   

    var scrolled = window.pageYOffset
    var rate = scrolled * -0.4;

    target.style.transform='translate3d(0px, '+rate+'px, 0px)';

});

window.addEventListener('scroll', function(e){

    const target=document.querySelector('.webdev');

    var secondScrolled =window.pageYOffset
    var rate =secondScrolled * -0.2;

    target.style.transform ='translate3d(0px,'+rate+'px,0px)';


});

window.addEventListener('scroll', function(e){

    const target =document.querySelector('.bkg');

    var bkgScrolled = window.pageYOffset
    var rate =bkgScrolled * -1;
    target.style.transform = 'translate3d(0px, '+rate+'px,0px)';

});
window.addEventListener('scroll', function(e){

    const target =document.querySelector('.cloud');

    var cloudScrolled= window.pageYOffset
    var rate = cloudScrolled * 0.2;
    target.style.transform = 'translate3d(10px, '+rate+'px,0px)';

});
window.addEventListener('scroll', function(e){

    const target =document.querySelector('.mountain');

    var cloudScrolled= window.pageYOffset
    var rate = cloudScrolled * -0.3;
    target.style.transform = 'translate3d(10px, '+rate+'px,0px)';

});
window.addEventListener('scroll', function(e){

    const target =document.querySelector('.middle-container');

    var middleScrolled= window.pageYOffset
    var rate = middleScolled * -1;
    target.style.transform = 'translate3d(10px, '+rate+'px,0px)';

});
