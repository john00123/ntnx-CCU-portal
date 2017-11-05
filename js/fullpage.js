function dropdown(){$('.blackbox').toggle()}
function fullpage(){
  $('.page').fadeToggle();
  $('html').toggleClass('overflow');
  selection(0);
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
// fullpage()
$('.gear').click(dropdown);
$('.license, .close').click(fullpage);
$('.license').click(dropdown);

selection(0);
$('.summary').click(function(){selection(1)});
$('.portal').click(function(){selection(2)});
