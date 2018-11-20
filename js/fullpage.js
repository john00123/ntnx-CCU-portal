const pageData = `
  <div class='data-main-container'>
    <div class="data-main-content">
      <article class="data-block">
        <h1>Acropolis License</h1>
        <div class="icon-group">
          <div class="img-license" style='transform:translateX(-10px);'> <code>Pro</code> </div>
        </div>

        <h5 class='exp' >Expires 12/12/2020</h5>
        <div class="separator"></div>
      </article>

      <article class="data-block">
        <h1>Add-On</h1>
        <div class="icon-group">
          <div class="img-license addon"> <code>File Server</code> </div>
        </div>
        <h5 class='exp'>Expires 12/12/2020</h5>
        <div class="separator"></div>
      </article>
    </div>

    <div class='fw flex' ><button class='primary reclaim-task2' style='margin:auto;'> Manage Licenses </button></div>
  </div>
`


const page = {
  title: ['Manage Licenses'],
  body: [
    `
    <p class='statement'><code class='option' style='padding: 2px 6.5px;'>1</code>Generate a <a class='summary' href='img/cluster-summary-file.xml' download> cluster summary file.</a></p>

    <p class='statement'><code class='option'>2</code>Access it through the <a href='/ntnx-attribute/overview.html' target='_blank'> license page</a> action menu.</p>

    <p class='statement'><code class='option'>3</code>Once the license file has been generated <a class='add-file'>upload it.</a></p>
    `

  ],
  footer: [`<button class="secondary cancel" style="margin-right:0"> Done </button>`],
}


function popupRender(i, j, k) {
  $('.page-body').append(
    `<div class="overlay" style='opacity:0'>
      <div class="popup" style='opacity:0'>
        <div class="popup-header">${page.title[i]}</div>
        <div class="popup-body">${page.body[j]}</div>
        <div class="popup-footer">${page.footer[k]}</div>
      </div>
    </div>`
  );
  multiPopup();
  uploadFile();
  popAnimate();
  intermission();
  applyLicense();
  // countNumbers();
}

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
  applyLicense();
  // countNumbers();
}

function dropdown() {
  $('.blackbox').toggle()
}

function fullpage() {
  $('.page').fadeToggle();
  selection(1);
  $('.page-body').html(pageData);
  $('.reclaim-task2').click(()=>popupRender(0, 0, 0));

  $(document).keyup(e => {
    if (e.keyCode === 49) {
      $('.banner').remove();
      banner2('Cluster needs additional licenses');

      $('.flex').html(`<button class='primary expand-task' style='margin:auto;'> License </button>`);
      $('.expand-task').click(function() {
        popupRender(0, 0, 0);
        $('.popup-header').text('Manage License');
        $('.popup-body p:eq(0)').html(`<code class='option' style='padding: 2px 6.5px;'>1</code>Generate a <a class='summary' href='./img/cluster-summary-expand.xml' download> cluster summary file.</a>`);
      });
    }//esc key
  });

  $('html').toggleClass('overflow');
}

const bannerData = {
  license: 'Congratulations your cluster license state has been successfully updated.',
}

function banner(i) {
  $('.page-header').after(`<div class='banner'>${i}</div>`);
  $('.banner').css('height', '50px');
  $('.banner').toggle();
  setTimeout(function() {
    $('.banner').slideDown();
  }, 400);
  $('.banner').css('border-top', '1px solid #CEF6DE');
  setTimeout(function() {
    $('.banner').slideUp();
    setTimeout(function() {
      $('.banner').remove();
    }, 300);
  }, 5000);
}

function banner2(i) {
  $('.page-header').after(`<div class='banner critical'>${i}</div>`);
  $('.banner').css('height', '50px');
  $('.banner').toggle();
  setTimeout(function() {
    $('.banner').slideDown();
  }, 400);
}

//applied license
function applyLicense() {
  $('.see-licenses').click(function() {
    banner(bannerData.license);

    $('.page-body').html(pageData);
    $('.reclaim-task2').text('Manage Licenses');
    $('.critical').remove();
    $('.reclaim-task2:eq(1)').click(function() {
      popupRender(0, 0, 0)
    });
    $('.reclaim-task2:eq(0)').click(function() {
      popupRender(0, 0, 0);
      $('.popup-header').text('Manage Licenses');
      $('.popup-body p:eq(1)').html(`<code class='option'>2</code>Manage License through the <a href='./overview.html' target='_blank'> license page </a> action menu.</p>`);
    });
  });
}

function selection(i) {
  if (i == 0) {
    $(`.circle p code:not(${i})`)
      .removeClass('current-option past-option').addClass('future-option');
  }

  if (i == 1) {
    $(`.circle p code:eq(${i-1})`)
      .removeClass('current-option future-option').addClass('past-option');

    $(`.circle p code:eq(${i+1})`)
      .removeClass('current-option past-option').addClass('future-option');
  }
  if (i == 2) {
    $(`.circle p code:not(${i})`)
      .removeClass('current-option future-option').addClass('past-option');
  }
  $(`.circle p code:eq(${i})`)
    .removeClass('future-option past-option').addClass('current-option');
}

dropdown();
fullpage();
// //
//   $('.page-body').html(pageData);
// //
// popupRender(0,0,0);

$('html').toggleClass('overflow');
$('.gear').click(dropdown);
$('.license, .close').click(()=>{
  fullpage();
  $('header').fadeToggle();
});
$('.license').click(dropdown);
selection(0);

$('.summary').click(function() {
  selection(1)
});
$('.portal').click(function() {
  selection(2)
});
$('.up-file').click(function() {
  popupContent(4)
});

function intermission() {
  $('.add-file').click(function() {
    $('.overlay').remove();
    popupContent(4);
  });
}
