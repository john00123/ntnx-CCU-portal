const pageData = `<div class="data-main-content">
  <article class="data-block">
    <h1>Acropolis License</h1>

    <div class="icon-group">
      <div class="img-license" style='transform:translateX(-10px);'> <code>Pro</code> </div>
    </div>

    <h5 class='exp' >Expires 12/12/2020</h5>
    <div class="separator"></div>

    <div class="multi-button">
      <div class="data-button-grouping">
        <button class='secondary reclaim-task2' style='margin-top:20px;'> Add Node </button><button class='primary reclaim-task2' style='margin-top:20px; margin-left:10px;'> Reclaim </button>
      </div>
    </div>
  </article>

  <article class="data-block">
    <h1>Add-On</h1>
    <div class="icon-group">
      <div class="img-license addon"> <code>File Server</code> </div>
    </div>
    <h5 class='exp'>Expires 12/12/2020</h5>
    <div class="separator"></div>
    <div class="multi-button">
      <div class="data-button-grouping">
        <button class='secondary' style='margin-top:20px;'> Change Add-ons </button>
      </div>
    </div>
  </article>
</div>`


const page = {
  title: ['Reclaim unused'],
  body: [
    `
    <p class='statement'><code class='option' style='padding: 2px 6.5px;'>1</code>Generate a <a class='summary' href='img/cluster-summary-file.xml' download> cluster summary file.</a></p></a>

    <p class='statement'><code class='option'>2</code>Reclaim it through the <a href='home.html' target='_blank'> license page</a> action menu.</p>
    <div class='preview'></div>

    <p class='statement' style='margin-top:10px;'><code class='option'>3</code>Once the license file has been generated <a class='add-file'>upload it.</a></p>
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
  selection(0);
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

function applyLicense() {
  $('.see-licenses').click(function() {
    banner(bannerData.license);
    $('.page-body').html(pageData);
    $('.reclaim-task2:eq(1)').click(function() {
      popupRender(0, 0, 0)
    });
    $('.reclaim-task2:eq(0)').click(function() {
      popupRender(0, 0, 0);
      $('.popup-header').text('Add Node');
      $('.popup-body p:eq(1)').html(`<code class='option'>2</code>Add node through the <a href='home.html' target='_blank'> license page </a> action menu.</p>`);
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
$('.license, .close').click(fullpage);
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
