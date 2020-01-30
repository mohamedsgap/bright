$(function(){
  // Initialize Zoom For First Image
  $('#zoom_01').elevateZoom({zoomType:'inner', cursor: "crosshair"});

  $('.clickSlide').on('click',function(){
    let slide_Percentage = $(this).attr('data-show');
    $(slide_Percentage).addClass('active').siblings().removeClass('active');
    $('.clickSlide').css('opacity','.4');
    $(this).css('opacity','1');

    $('#zoom_02').elevateZoom({zoomType:'inner', cursor: "crosshair"});
    $('#zoom_03').elevateZoom({zoomType:'inner', cursor: "crosshair"});
    $('#zoom_04').elevateZoom({zoomType:'inner', cursor: "crosshair"});
    $('#zoom_05').elevateZoom({zoomType:'inner', cursor: "crosshair"});
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



window.onscroll = function(){
// Show Or Hide Scroll To Top Button
  if(window.scrollY >= 600){
    $('.b-t-t').addClass('showbtn');
  }
  else{
    $('.b-t-t').removeClass('showbtn');
  }

  // Fixed Nav To Top
  if(window.scrollY > 100){
    $('nav').addClass('fixed-top');
    //document.getElementsByClassName('programs')[0].style.padding='20px 0';
  }
  else{
    $('nav').removeClass('fixed-top').addClass('border-bottom');
    //document.getElementsByClassName('programs')[0].style.padding='0';
  }
};


// Scroll To Top Button
$('.b-t-t').click(function(){
  document.documentElement.scrollTop = 0
});
