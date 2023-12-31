$(function() {

  // Menu Toggle

  $('#MenuButton').on('click', function () {
    $(this).toggleClass('open');
    $('#MenuList').slideToggle();
  });

  $('#MenuList a').on('click', function () {
    if( window.innerWidth <= 768){
      $('#MenuButton').removeClass('open');
      $('#MenuList').slideToggle();
    }
  });

  // loading

  window.onload = function() {
    const spinner = document.getElementById('loading');

    // Add .loaded to .loading
    spinner.classList.add('loaded');
  }

    // SOUND
    
    const video = document.querySelector('#video');
const video_btn = document.querySelector('#video-btn');
let is_playing = false;

video_btn.addEventListener('click', () => {
  if (!is_playing) {
    video.play();
    is_playing = true;
  } else {
    video.pause();
    is_playing = false;
  }
});

  // Window Resize Function

  $(window).resize(function(){

    if( window.innerWidth <= 768){

      $('#MenuList').hide();
      $('#MenuButton').show();
      $('#MenuButton').removeClass('open');

    } else {

      $('#MenuButton').hide();
      $('#MenuList').show();

    }

  });


  // Smooth Scrool

  $('a[href^="#"]').click(function() {

    // 初期設定：移動時間(ms)と頭出し位置
    var speed = 500;
    var offset = -96;

    // アンカーを取得
    var anchor = $(this).attr("href");

    // ターゲットの位置を取得
    var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
    var position = target.offset().top + offset;

    // スクロール（アニメーション）
    $('body,html').animate({scrollTop:position}, speed, 'swing');

    return false;

   });

});
