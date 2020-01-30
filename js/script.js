$(function(){
  'use strict';

  // Set Slider height
  let windowH = $(window).innerHeight(),
      navH = $('nav').innerHeight(),
      headerH = $('header').innerHeight();

  $('#slider').height(windowH - navH - headerH);


  $('.home2-panner').height(windowH - navH - headerH);


  $('.drop-link').on('click',function(e){
    $('.drop-link').removeClass('active');
    $(this).addClass('active');
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

// Free Training Counter
var days = 10,
    hours = 13,
    minutes = 40,
    seconds = 50;
var daysspan = document.getElementById('days'),
    hoursspan = document.getElementById('hours'),
    minutesspan = document.getElementById('minutes'),
    secondsspan = document.getElementById('seconds');

daysspan.textContent = days;
hoursspan.textContent = hours;
minutesspan.textContent = minutes;
secondsspan.textContent = seconds;

setInterval(function(){
  if(seconds != 0){ seconds--; }

  else{
    seconds = 59;
    if(minutes != 0){ minutes--; }
    else{ minutes = 59; hours--; }
    if(hours == 0 ){ hours = 23; days--; }
  }

  secondsspan.textContent = seconds;
  minutesspan.textContent = minutes;
  hoursspan.textContent = hours;
  daysspan.textContent = days;
},1000);

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
    document.getElementsByClassName('programs')[0].style.padding='20px 0';
  }
  else{
    $('nav').removeClass('fixed-top').addClass('border-bottom');
    document.getElementsByClassName('programs')[0].style.padding='0';
  }
};

// Scroll To Top Button
$('.b-t-t').click(function(){
  document.documentElement.scrollTop = 0
});
