
// dark mood-------------------------------------------------

const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  

// WOW -------------------------------------------------

new WOW().init();


// 


$(document).ready(function(){
  $('.icons,.overlay,.overlay-menu ul li a').click(function() {
      $('.overlay').fadeToggle();
      $('.overlay-menu').fadeToggle();
      $('.close-icon').fadeToggle();
  });
  $(window).scroll(function(){
      if($(window).scrollTop() > 50) {
          $('.top-nav-container').addClass("fixed")
          $('.icon-top').fadeIn();
      }else{
          $('.top-nav-container').removeClass("fixed")
          $('.icon-top').fadeOut();
      }
  });

  $(window).scroll(function() {
      $('.section').each(function() {
          if($(window).scrollTop() > $(this).offset().top - 1) {
              let sectionID = $(this).attr('id');
              $('nav li a, .overlay-menu ul li a').removeClass('active');
              $('nav li a[data-scroll="' + sectionID + '"]').addClass('active');
              $('.overlay-menu ul li a[data-scroll="' + sectionID + '"]').addClass('active');
          }
      });
  });

  $('.color-faq').click(function() {
      $('.color-faq').removeClass('active');
      $(this).addClass('active');
  });
  $('.faq-text .item').first().show();
  $('.color-faq').click(function(){
      let indexofColorfaq = $(this).index();
      $('.faq-text .item').hide();
      $('.faq-text .item').eq(indexofColorfaq).show();
  });
});
