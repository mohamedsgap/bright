$(function(){
  'use strict';

  // Set Slider height
  let windowH = $(window).innerHeight(),
      navH = $('nav').innerHeight(),
      headerH = $('header').innerHeight();

  $('#slider').height(windowH - navH - headerH);


  $('.home2-panner').height(windowH - navH - headerH);


});
// Search Overlay
var searchBtn = document.getElementsByClassName('search-btn')[0],
    searchOverlay = document.getElementsByClassName('search-overlay')[0],
    closeSearchOverlay = document.getElementsByClassName('close-search-overlay')[0];

searchBtn.onclick = () =>{
  searchOverlay.classList.add('show-search-overlay');
};

closeSearchOverlay.onclick = () =>{
  searchOverlay.classList.remove('show-search-overlay');
};


  // Fixed Nav To Top
  window.onscroll = function(){

    // Show Or Hide Scroll To Top Button
      if(window.scrollY >= 600){
        $('.b-t-t').addClass('showbtn');
      }
      else{
        $('.b-t-t').removeClass('showbtn');
      }

    if(document.documentElement.scrollTop > $('header').height()){
      $('nav').addClass('fixed-top');
    }
    else{
      $('nav').removeClass('fixed-top').addClass('border-bottom');
    }
  };


// Scroll To Top Button
$('.b-t-t').click(function(){
  document.documentElement.scrollTop = 0
});

var isOpen = true;
// Student Say Accordion
function changePlus(event){
    
    if(event.target.nextElementSibling.innerHTML == '+'){
      event.target.nextElementSibling.innerHTML = '-';
    }
    else{
      event.target.nextElementSibling.innerHTML = '+';
    }

}
