//esc

$(document).keyup(e => {
  if (e.keyCode === 27) $('.popup-header').click(); //esc key
});


// creates cards

function cardsData() {
  var cards = cardData.cardBody.length;
  var index = 0;
  $('aside h4').text(`${cardData.cardBody[1]} Coins Available`)
  // function
  while (cards > 0) {
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

function cardsData2() {
  var cards = multiClusterData2.cardBody.length;
  var index = 0;
  // function
  while (cards > 0) {
    $('.deck2').append(
      `<div class='card'>
        <div class='card-body'>
          <h4>${multiClusterData2.cardBody[index]}</h4>
          <p>${multiClusterData2.cardSecondary[index]}</p>
        </div>
      </div>`
    );
    cards--;
    index++;
  }
}

// creates table

function tableData() {
  for (let i = 0; i < usageData.Type.length; i++) {
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

function purchaseData() {
  for (let i = 0; i < purchaseDataTable.id.length; i++) {
    $('.purchased').append(
      `<tr>
        <td> ${purchaseDataTable.id[i]}</td>
        <td> ${purchaseDataTable.purchased[i]}</td>
        <td> ${purchaseDataTable.use[i]}</td>
        <td>${purchaseDataTable.Expiration[i]}</td>
    </tr>`);
  }
}

function multiClusterData() {
  for (let i = 0; i < multiClusterDataTable.id.length; i++) {
    $('.multi-cluster').append(
      `<tr>
        <td> ${multiClusterDataTable.id[i]}</td>
        <td> ${multiClusterDataTable.type[i]}</td>
        <td> ${multiClusterDataTable.use[i]}</td>
        <td>${multiClusterDataTable.Expiration[i]}</td>
    </tr>`);
  }
}


//multiPopup

function multiPopup() {
  $('.redeem').click(function() {
    $('.popup').addClass('second');
    layer2(0);
  });


  $('.reclaim').click(function() {
    $('.popup').addClass('second');
    layer2(1);
    setTimeout(countNumbers(), 600);
    cardData.cardBody[1] += 40000;
    $('.card:eq(1) h4').text(cardData.cardBody[1]);
    $('aside h4').text(`${cardData.cardBody[1]} Coins Available`);
  });

  $('.manage-addons').click(() => {
    $('.popup').addClass('second');
    layer2(0);
    $('.popup-header').text('Manage Addons');
    $('.aos-data').remove();
  });
}



//upload input component

function uploadFile() {
  $("input[type='file']").change(uploadPath);
}

function uploadPath() {
  let path = $(this).val().replace("C:\\fakepath\\", '');
  $('.path').val(path);
  $('button').removeClass('btn-disabled');
}


//popup data

function popupContent(i) {
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

function popAnimate() {
  window.scroll(0, 0);
  $('.overlay').css('opacity', '1');

  $('html').css('overflow', 'hidden');
  setTimeout(function() {
    $('.popup').addClass('appear');
  }, 200);



  $('.popup-header, .cancel, .see-licenses').click(function() {
    $('.popup').addClass('disappear');
    $('.overlay').fadeOut();
    $('.overlay').removeClass('show');
    $('html').css('overflow', '');
    setTimeout(function() {
      $('.overlay').remove();
    }, 400);
  });
}


//checkout functions

function CheckoutData() {
  $('input:radio').change(function() {
    $('input:radio:checked').not(this).prop('checked', false);

    //starter price
    if ($(this).val() === 'starter') {
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[0].key}<code>${licensePrices[0].price}</code>`)
      Popurri.option = licensePrices[0].price;
    }

    if ($(this).val() === 'pro') {
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[1].key}<code>${licensePrices[1].price}</code>`)
      Popurri.option = licensePrices[1].price;
    }

    if ($(this).val() === 'ultimate') {
      $('.flexbox-stretch:eq(0)').html(`${licensePrices[2].key}<code>${licensePrices[2].price}</code>`)
      Popurri.option = licensePrices[2].price;
    }
    sum = Popurri.option + Popurri.sw + Popurri.fs;
    $('.subt').text(sum);
  });
}


function CheckoutData3() {
  $('#sw').change(function() {
    if ($('#sw').is(':checked')) {
      $('.prices').before(`
      <div class='flexbox-stretch sw-data'>
        <kbd>SW Encryption</kbd>
        <code>${licensePrices[0].price}</code>
      </div>
    `);
      Popurri.sw = licensePrices[0].price;

    } else {
      $('.sw-data').remove();
      Popurri.sw = null;
    }
    sum = Popurri.option + Popurri.sw + Popurri.fs;
    $('.subt').text(sum);
  });
}


function CheckoutData2() {
  $('#fs').change(function() {

    if ($('#fs').is(':checked')) {
      $('.prices').before(`
      <div class='flexbox-stretch fs-data'>
        <kbd>File Server</kbd>
        <code>${licensePrices[0].price}</code>
      </div>
    `);
      Popurri.fs = licensePrices[0].price;
    } else {
      $('.fs-data').remove();
      Popurri.fs = null;
    }
    sum = Popurri.option + Popurri.sw + Popurri.fs;
    $('.subt').text(sum);
  });
}


function dropDown() {
  $('.primary').click(function() {
    $('.floater').hide();
  });

  $('.actions-dropdown').click(function() {
    $('span', this).toggleClass('black-span-btn');
    $('.floater').toggle();
  });
}

//counter
function countNumbers() {
  $('.layer2 .popup-body').before(`<div class='banner'>4000 Coins have been credited to your account.</div>`);
  $('.banner').toggle();
  $('.money').css('color', '#18BE5F');
  $('.popup-header').css('border-bottom', 'none');
  $('.banner').slideDown();
  $('.count').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 1200,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });

  });

  setTimeout(function() {
    $('.banner').slideUp();
    $('.popup-header').css('border-bottom', '');

    setTimeout(() => {
      $('.banner').remove()
    }, 300);

  }, 7000);
}


function countNumbers2() {
  $('.layer2 .popup-body').before(`<div class='banner-info'>Capacity changes detected, additional coins required. <span class=' tooltip-trigger3'>Why?</span></div>`);
  $('.banner-info').toggle();

  $('.popup-header').css('border-bottom', 'none');

  setTimeout(function() {
    $('.banner-info').slideDown();
  }, 800);
}

function tablePopup() {
  $('.tusage td:eq(0)').click(() => popupContent(7));
}

function firstTime() {
  $('.first-time').click(() => popupContent(6));
}



$(document).ready(function() {
  firstTime();
  cardsData();
  cardsData2();
  tableData();
  dropDown();
  tablePopup();
  purchaseData();
  multiClusterData();
  $('.reclaim-popup').click(() => {
    popupContent(1)
    $('.popup-header').after(`<div class='mutli-line-info'><p style='line-height:1.5;'> Make sure you update Prism Central licenses too, in order to retrieve all available coins.</p></div>`);
    $('.banner').toggle();
    $('.popup-header').css('border-bottom', 'none');
    $('.banner').slideDown();
  });

  $('.unlicense-cluster-popup').click(() => {
    popupContent(1);
    $('.popup-header').text('Unlicense Cluster');
  });

  $('.cluster-license').click(() => popupContent(0));

  //adons
  $('.manage-addons-popup').click(() => {
    popupContent(0);
    $('.popup-header').text('Manage Addons');
    $('.popup-footer').html(`${popupData.footer[8]}`);
    $('.manage-addons').click(() => {
      $('.popup').addClass('second');
      layer2(0);
      Popurri.option = 0;
      $('#fs').click();
      $('.popup-header').text('Manage Addons');
      $('.aos-data').hide();
      $('.flexbox-stretch:eq(0)').hide();
    });
  });


  $('.update-popup').click(() => {
    popupContent(0);
    $('.popup-footer').html(`${popupData.footer[5]}`);
    $('.add-node').click(() => {
      $('.popup').addClass('second');
      layer2(0);
      $('.overlay2 .popup-header').text('Additonal Node License');
      $('#acropolis-pro').click();
      $('#fs').click();
      $('#sw').click();
      $('.aos-data:eq(1), .aos-data:eq(3), .addon-data:eq(1), .addon-data:eq(2)').css({
        'opacity': '0.3',
        'pointer-events': 'none'
      });

      // $('.overlay2 .popup-header').text('Additonal Node License');
      // $('.panel1').html(addNodePopupBody);
      // $('.panel1').append(fsChecked);
      // CheckoutData2();
      // $('#fs').trigger('click');
      // countNumbers2();
      // $('.panel2 h3').text(`Additional coins required`);
      // $('.panel2').css('height','250px');
      // $('.flexbox-stretch kbd:eq(0)').text('Pro');
    });
  });


  //initial popup
  if ($('body').hasClass('index')) {
    if (!sessionStorage.alreadyClicked) {
      popupContent(6);
      sessionStorage.alreadyClicked = 1;
    }
  }

});
