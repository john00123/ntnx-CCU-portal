//esc

$(document).keyup( e => {
  if (e.keyCode === 27) $('.popup-header').click(); //esc key
});


// creates cards

function cardsData() {
  var cards = cardData.cardInfo.length;
  var index = 0;
  $('aside h4').text(`${cardData.cardBody[1]} CCUs Available`)
  // function
  while (cards> 0){
    $('.deck').append(
      `<div class='card'>
        <div class='card-body'>
          <h4>${cardData.cardBody[index]}</h4>
          <p>${cardData.cardSecondary[index]}</p>
        </div>
      </div>`
    );

    cards--;
    index++;
  }
}


// creates table

function tableData(){
  for(let i=0; i<usageData.Type.length; i++){
    $('.usage').append(
      `<tr>
        <td> ${usageData.Name[i]}</td>
        <td> ${usageData.Type[i]}</td>
        <!--<td> ${usageData.Purchased[i]}</td>-->
        <td> ${usageData.Ammounts[i]}</td>
        <td> ${usageData.Expiration[i]}</td>
    </tr>`);
  }
}


//multiPopup

function multiPopup(){
  $('.redeem').click(function() {
    $('.popup').addClass('second');
    layer2(0);
  });


  $('.reclaim').click(function() {
    $('.popup').addClass('second');
    layer2(1);
    setTimeout(countNumbers(),600);
    cardData.cardBody[1] += 40000;
    $('.card:eq(1) h4').text(cardData.cardBody[1]);
    $('aside h4').text(`${cardData.cardBody[1]} CCUs Available`);
  });
}



//upload input component

function uploadFile(){ $("input[type='file']").change(uploadPath);}
function uploadPath(){
  let path = $(this).val().replace("C:\\fakepath\\",'');
  $('.path').val(path);
  $('button').removeClass('btn-disabled');
}


//popup data

function popupContent(i){
  $('body').append(
    `<div class="overlay" style='opacity:0'>
      <div class="popup" style='opacity:0'>
        <div class="popup-header">${popupData.title[i]}</div>
        <div class="popup-body">${popupData.body[i]}</div>
        <div class="popup-footer">${popupData.footer[i]}</div>
      </div>
    </div>`
  );
  multiPopup();
  uploadFile();
  popAnimate();
  // applyLicense();
  // countNumbers();
}


//popup animation

function popAnimate(){
  window.scroll(0, 0);
  $('.overlay').css('opacity','1');

  $('html').css('overflow','hidden');
  setTimeout(function(){
    $('.popup').addClass('appear');
  },200);



  $('.popup-header, .cancel, .see-licenses').click(function(){
    $('.popup').addClass('disappear');
    $('.overlay').fadeOut();
    $('.overlay').removeClass('show');
    $('html').css('overflow','');
    setTimeout(function(){
      $('.overlay').remove();
    },400);
  });
}


//checkout functions

function CheckoutData(){
  $('input:radio').change(function(){
    $('input:radio:checked').not(this).prop('checked', false);

    //starter price
    if($(this).val()==='starter'){
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[0].key}<code>${licensePrices[0].price}</code>`)
      Popurri.option = licensePrices[0].price;
    }

    if($(this).val()==='pro'){
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[1].key}<code>${licensePrices[1].price}</code>`)
      Popurri.option = licensePrices[1].price;
    }

    if($(this).val()==='ultimate'){
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[2].key}<code>${licensePrices[2].price}</code>`)
      Popurri.option = licensePrices[2].price;
    }
    sum = Popurri.option + Popurri.sw + Popurri.fs;
    $('.subt').text(sum);
  });
}


function CheckoutData3(){
$('#sw').change(function(){
  if($('#sw').is(':checked')){
    $('.prices').before(`
      <div class='flexbox-stretch sw-data'>
        <kbd>SW Encryption</kbd>
        <code>${licensePrices[0].price}</code>
      </div>
    `);
    Popurri.sw = licensePrices[0].price;

  } else{
    $('.sw-data').remove();
    Popurri.sw = null;
  }
  sum = Popurri.option + Popurri.sw + Popurri.fs;
  $('.subt').text(sum);
});
}


function CheckoutData2(){
$('#fs').change(function(){

  if($('#fs').is(':checked')){
    $('.prices').before(`
      <div class='flexbox-stretch fs-data'>
        <kbd>File Server</kbd>
        <code>${licensePrices[0].price}</code>
      </div>
    `);
    Popurri.fs = licensePrices[0].price;
  } else{
    $('.fs-data').remove();
    Popurri.fs = null;
  }
  sum = Popurri.option + Popurri.sw + Popurri.fs;
  $('.subt').text(sum);
});
}

// function sideBarSelection(){
//   $('li').click( function(){
//     $('li').removeClass('sidebar-selected');
//     $(this).addClass('sidebar-selected');
//   });
// }

function dropDown(){
  $('.primary').click(function(){
    $('.floater').hide();
  });

  $('.actions-dropdown').click(function(){
    $('span', this).toggleClass('black-span-btn');
    $('.floater').toggle();
  });
}

//counter
function countNumbers(){
  $('.layer2 .popup-body').before(`<div class='banner'>4000 CCUs have been credited to your account.</div>`);
  $('.banner').toggle();
  $('.money').css('color','#18BE5F');
  $('.popup-header').css('border-bottom','none');
  $('.banner').slideDown();
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text() },
        {
        duration: 1200,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

  });

  setTimeout(function(){
    $('.banner').slideUp();
    $('.popup-header').css('border-bottom','');

    setTimeout(function(){
      $('.banner').remove();
    },300);

  },7000);
}


function countNumbers2(){
  $('.layer2 .popup-body').before(`<div class='banner-info'>Capacity changes detected, additional CCU required. <span class=' tooltip-trigger3'>Why?</span></div>`);
  $('.banner-info').toggle();

  $('.popup-header').css('border-bottom','none');

  setTimeout(function(){
    $('.banner-info').slideDown();
  },800);
}

function tablePopup(){
  $('.tusage td:eq(0)').click(function(){
    popupContent(7);
  });
}


$(document).ready(function() {

  cardsData();
  // sideBarSelection();
  tableData();
  dropDown();
  tablePopup();
  $('.reclaim-popup').click(function(){popupContent(1)});
  $('.cluster-license').click(function(){popupContent(0)});
  $('.update-popup').click(function(){
    popupContent(0);
    $('.popup-footer').remove();
    $('.popup-body').after(`<div class="popup-footer">${popupData.footer[5]}</div>`);
    $('.add-node').click(function() {
      $('.popup').addClass('second');
      layer2(0);
      $('.overlay2 .popup-header').text('Additonal Node License');
      $('.panel1').html(addNodePopupBody);

      $('.panel1').append(fsChecked);
      CheckoutData2();
      $('#fs').trigger('click');
      countNumbers2();
      $('.panel2 h3').text(`Additional license costs`);
      $('.panel2').css('height','250px');
      $('.flexbox-stretch kbd:eq(0)').text('Pro');
    });
  });
  if($('body').hasClass('index')){
    popupContent(6);

  }

});
