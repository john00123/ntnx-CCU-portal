
// Popup
const addNodePopupBody= `
  <!--<h4 style='margin-bottom:15px;'>Capacity Changes</h4>

<p style='margin-bottom:20px;'> This cluster has dected an additional ammount of resources, to be licensed to keep a valid licenses state.</p>

<div class='license-pair current-consumption' style='margin-left: 20px;'>
  <h3> Cores  <code> 30 </code></h3>
  <h3> HHD  <code> 300 </code></h3>
  <h3> SSD  <code> 300 </code></h3>
</div>  -->

<h4 style='margin-top:2px; margin-bottom:15px;'>Current license costs</h4>
<p style='margin-bottom:20px;'> Cluster has in file the following licenses.</p>

<div class='license-pair current-consumption' style='margin-left: 20px;'>
  <h3> Acropolis Pro  <code> 3000 Coins </code></h3>
  <h3> File Server  <code> 3000 Coins </code></h3>
</div>`


const popupData ={
  title :[
    'License Cluster',
    'Reclaiming licenses',
    'Next Steps',
    'Licenses Reclaimed',
    'Upload License File',
    '',
    'New! Cloud consumption units',
  ],

  body: [

    // License Cluster
    `
    <h3 style='margin-bottom:0px'>
      Select your cluster summary file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This has the data needed to license your cluster.
    </p>

    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,


    //Reclaim data
    `
    <h3 style='margin-bottom:0px'>
      Select your license summary file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This has the data needed to license your cluster.
    </p>

    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,


    // change plan
    `
    <h2>Congratulations</h2>
    <p style='color:#22272E; margin-bottom:10px;' > Your license changes have been successfully saved.</p><p> Use the new license summary file to update the license state of your cluster.</p>
      `,

    `
    <h3 style='margin-bottom:0px'>
      Select your license summary file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This has the data needed to license your cluster.
    </p>

    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,
    `  <h3 style='margin-bottom:0px'>
        Select your license summary file
      </h3>

      <p style='margin-bottom:20px; width:100%'>
        This has the data needed to license your cluster.
      </p>

      <input type="file" id='file'>
      <label for='path2'>Select file</label>

      <div class='upload-file'>
        <input class='path' readonly type='text' id='path2'></input>
        <label class='file-button' for='file'>Select File</label>
      </div>`,
    `
    <h3 style='margin-bottom:0px'>
      Select your license file
    </h3>

    <p style='margin-bottom:20px; width:100%'>
      This will update your cluster licensing state
    </p>

    <input type="file" id='file'>
    <label for='path2'>Select file</label>

    <div class='upload-file'>
      <input class='path' readonly type='text' id='path2'></input>
      <label class='file-button' for='file'>Select File</label>
    </div>`,

    `
    <video class='video' id='myvideo' controls>
      <source src="img/ccu.mp4" type="video/mp4">
      Your browser does not support the video tag.

    </video>

    <a class='link' href='img/ccu.mp4' target='_blank'>Watch fullscreen</a>


    `
  ],

  footer:[
    `<button class="primary redeem btn-disabled">Next</button>`,

    `<button class="primary reclaim btn-disabled">Reclaim</button>`,

    `<button class="primary"><a href='img/license-file.xml' download> Download </a></button>`,

    `<button class="secondary cancel"> Cancel </button>
     <button class="primary congrats"> Save Changes </button>`,

    `<button class="primary see-licenses btn-disabled"> Apply </button>`,

    `<button class="primary add-node btn-disabled">Next</button>`,

    `<button class="secondary cancel" style="margin-right:0"> Done </button>`,


  ]
}


const layer2Data = {
  body:[
  `
    <div class="popup-header">${popupData.title[0]}</div>

      <div class="popup-body panels">

        <div class='panel1'>
        <p style='margin-bottom:20px; margin-top:-3px; color:#22272E'> Licensing costs have been calculated based on <kbd class='tooltip-trigger'>this cluster's capacity </kbd></p>

        <h4 style='margin-bottom:15px;'>Acropolis License </h4>

          <div class='license-pair'>

            <input
            type='radio'
            checked='checked'
            value='starter'
            style='margin-right: 10px;
            id='acropolis-starter'>

            Starter

          </div>
          <div class='license-pair'>
            <input
            type='radio'
            value='pro'
            style='margin-right: 10px;'
            id='acropolis-pro'>
            Pro
          </div>
          <div class='license-pair' style='margin-bottom:30px;'>
          <input
           type='radio'
           value='ultimate'
           style='margin-right: 10px;'
           id='acropolis-ultimate'>
           Ulitmate
          </div>

        <div class='separator'></div>

        <h4 style='margin-bottom:15px;'>Additional Licenses </h4>
          <div class='license-pair'>

            <input type='checkbox'
            style='margin-right: 10px;
            margin-bottom:10px;'
            id='fs'
            value='fs''>
            File Server <br>

            <input
            type='checkbox'
            style='margin-right: 10px;'
            id='sw'
            value='sw'>
            Software Encryption<br>

          </div>
        </div>

        <div class='panel2'>
          <h3 style='margin-bottom:19px;''>Cluster licensing costs in <kbd class='tooltip-trigger2'>s </kbd></h3>

          <div class=flexbox-stretch>
            <kbd>${licensePrices[0].key}</kbd> <code>${licensePrices[0].price}</code>
          </div>


          <div class='separator prices'></div>

          <div class=flexbox-stretch>
            <kbd>Total</kbd>
            <code class='subt'>${sum}</code>
          </div>

          <div class=flexbox-stretch>
            <kbd>Available</kbd>
            <code class='av'>${cardData.cardBody[1]} </code>
          </div>
              <div class='grower'></div>
          <div class='separator' style='margin-top:0px;'></div>

          <p>Licensed until 12/12/20<br>based on  validity dates.</p>
        </div>

      </div>

    <div class="popup-footer">${popupData.footer[3]}</div>
`,

`
  <div class="popup-header">${popupData.title[3]}</div>
  <div class="popup-body">
    <span class='count money'>4000</span>
    <p style='margin-bottom:30px;'> Their expiration date is 12/12/2020</p>
    <h3 style='text-align:center; margin-bottom:0;'> Your unused licenses available on this cluster have freed up s. These have been credited to your account.</h3>
  </div>
  <div class="popup-footer">${popupData.footer[6]}</div>
`,]
}

// Cluster license

function layer2(i){
  $('body').append(
    `<div class="overlay overlay2" style='background-color:transparent;'>
      <div class="popup layer2" style='opacity:0; width:500px;'>
      <div> ${layer2Data.body[i]}</div>
      </div>
    </div>`
  );

  $('.back, .popup-header2').click(function(){
    $('.layer2').addClass('disappear');
    $('.popup:not(.layer2)').css('animation','reverse-layer 600ms forwards');
    $('.popup:not(.layer2)').removeClass('second');
    $('.layer2, .overlay2').remove();
  });

  if (i===1){
    $('.layer2').css('width','400px');
  }

  popAnimate();
  CheckoutData();
  CheckoutData2();
  CheckoutData3()

  $('.congrats').click(function(){
    $('.popup').addClass('disappear');
    $('.overlay').removeClass('show');
    $('html').css('overflow','');
    setTimeout(function(){
      $('.overlay').fadeOut('slow');
      setTimeout(function(){popupContent(2).fadeIn();},200);
    },600);

  });
}
