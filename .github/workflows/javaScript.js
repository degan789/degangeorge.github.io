$(document).ready(function(){

$('#menu').click(function(){
  $(this).toggleClass('fa-times');
  $('header').toggleClass('toggle');


  $(window).on('scroll load' ,function(){

$('#menu').removeClass('fa-times');
  $('header').removeClass('toggle'); 
  });
});
});

const display = document.querySelector(".about")

const change = document.querySelector(".btn")

change.addEventListener("click",function(){

  display.classList.toggle("aboutShow")
});

