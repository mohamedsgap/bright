$(function(){
  'use strict';

  // Set Slider height
  let windowH = $(window).innerHeight(),
      navH = $('nav').innerHeight(),
      headerH = $('header').innerHeight();


  $('.home3-panner').height(windowH - navH - headerH);

  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
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

// data Counter
var fd = document.getElementById('first-data'),
    sd = document.getElementById('second-data'),
    td = document.getElementById('third-data'),
    fsd = document.getElementById('fourth-data'),
    data = document.getElementsByClassName('data');

var fdn = 0, sdn = 0, tdn = 0, fsdn = 0;

window.onscroll = function(){

  // Speeder Counter
  if(window.scrollY >= data[0].offsetTop - 500){
    setInterval(function(){

      switch (fdn){
        case 500: break;
        default: fdn++; fd.textContent = fdn;
      }

      switch (sdn){
        case 600: break;
        default: sdn++; sd.textContent = sdn;
      }

      switch (tdn){
        case 300: break;
        default: tdn++; td.textContent = tdn;
      }

      switch (fsdn){
        case 450: break;
        default: fsdn++; fsd.textContent = fsdn;
      }

    },200);
  }

  // Show Or Hide Scroll To Top Button
  if(window.scrollY >= 600){
    $('.b-t-t').addClass('showbtn');
  }
  else{
    $('.b-t-t').removeClass('showbtn');
  }

  // Fixed Nav To Top
  if(window.scrollY > $('header').height()){
    $('nav').addClass('fixed-top');
    document.getElementsByClassName('fac-features')[0].style.padding='20px 0';
  }
  else{
    $('nav').removeClass('fixed-top').addClass('border-bottom');
    document.getElementsByClassName('fac-features')[0].style.padding='0';
  }
};

// Scroll To Top Button
$('.b-t-t').click(function(){
  document.documentElement.scrollTop = 0
});


// Show And Hide Short Intro Video
var poster = document.getElementById('video-poster'),
    video_overlay = document.getElementById('intro-video');

poster.onclick = function(){
  video_overlay.classList.add('show-video');
  document.getElementsByClassName('embed-responsive-item')[0].play()
};

video_overlay.onclick = function(){
  video_overlay.classList.remove('show-video');
  document.getElementsByClassName('embed-responsive-item')[0].pause()
};
