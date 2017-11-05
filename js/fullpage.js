function dropdown(){$('.blackbox').toggle()}
function fullpage(){
  $('.page').fadeToggle();
  selection(0);
  $('html').toggleClass('overflow');
}

function applyLicense(){
  $('.see-licenses').click(function(){
    $('.page-header').after(`<div class='banner'>License has been successfully applied.</div>`);
    $('.banner').css('height','50px');
    $('.banner').toggle();
    $('.banner').slideDown();
    $('.banner').css('border-top','1px solid #CEF6DE')

    setTimeout(function(){
      $('.banner').slideUp(); setTimeout(function(){ $('.banner').remove();},300);
    },7000);

    $('.page-body').html('<h1>This is something else</h1>');
  });
}

function selection(i){
  if(i == 0){
    $(`.circle p code:not(${i})`)
    .removeClass('current-option past-option').addClass('future-option');
  }

  if(i == 1){
    $(`.circle p code:eq(${i-1})`)
    .removeClass('current-option future-option').addClass('past-option');

    $(`.circle p code:eq(${i+1})`)
    .removeClass('current-option past-option').addClass('future-option');
  }
  if(i == 2){
    $(`.circle p code:not(${i})`)
    .removeClass('current-option future-option').addClass('past-option');
  }
  $(`.circle p code:eq(${i})`)
  .removeClass('future-option past-option').addClass('current-option');
}

dropdown()
fullpage()
$('html').toggleClass('overflow');
$('.gear').click(dropdown);
$('.license, .close').click(fullpage);
$('.license').click(dropdown);
selection(0);

$('.summary').click(function(){selection(1)});
$('.portal').click(function(){selection(2)});
$('.up-file').click(function(){popupContent(4)});
