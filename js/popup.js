// Popup
const addNodePopupBody = `
  <!--<h4 style='margin-bottom:15px;'>Capacity Changes</h4>

  <p style='margin-bottom:20px;'> This cluster has dected an additional ammount of resources, to be licensed to keep a valid licenses state.</p>

  <div class='license-pair current-consumption' style='margin-left: 20px;'>
    <h3> Cores  <code> 30 </code></h3>
    <h3> HDD  <code> 300 </code></h3>
    <h3> Flash  <code> 300 </code></h3>
  </div>  -->

  <h4 style='margin-top:2px; margin-bottom:15px;'>Current Coin usage</h4>

  <div class='license-pair current-consumption' style='margin-left: 20px; margin-top:20px;'>
    <h3><kbd> Acropolis Pro  12000 Coins</kbd> </h3>
    <h3><kbd> File Server 12000 Coins</kbd> </h3>
  </div>`

const popupData = {
  title: [
    'Manage License',
    'Manage License',
    'Next Steps',
    'Licenses Reclaimed',
    'Manage License',
    '',
    'Introducing Coins',
    'License Details',
    'Cheat Sheet'
  ],

  body: [
    //0 Upload
    ` <!-- <div class='steps-popup'>
        <h3><p class='active badge'>1</p>Upload</h3>
        <h3><p class='inactive badge'>2</p>Manage</h3>
      </div> -->
      <h3 style='margin-bottom:0px'>
        Upload summary file downloaded from Prism element or Prism Central
      </h3>

      <p style='margin-bottom:20px; width:100%'>
        This file has the data needed to license your cluster or license other Prism products.
      </p>

      <input type="file" id='file'>
      <label for='path2'>Select file</label>

      <div class='upload-file'>
        <input class='path' readonly type='text' id='path2'></input>
        <label class='file-button' for='file'>Select File</label>
      </div>`,

    //1 Upload
    `
      <h3 style='margin-bottom:0px'>
        Upload summary file downloaded from Prism element or Prism Central
      </h3>

      <p style='margin-bottom:20px; width:100%'>
        This file has the data needed to license your cluster or license other Prism products.
      </p>

      <input type="file" id='file'>
      <label for='path2'>Select file</label>

      <div class='upload-file'>
        <input class='path' readonly type='text' id='path2'></input>
        <label class='file-button' for='file'>Select File</label>
      </div>`,

    //2 Congratulations
    `
      <h2>Congratulations</h2>
      <p style='color:#22272E; margin-bottom:10px;' > Your license changes have been successfully saved.</p><p> Use the new license summary file to update the license state of your cluster.</p>`,

    //3 Upload
    `
      <h3 style='margin-bottom:0px'>
        Upload summary file downloaded from Prism element or Prism Central
      </h3>

      <p style='margin-bottom:20px; width:100%'>
        This file has the data needed to license your cluster or license other Prism products.
      </p>

      <input type="file" id='file'>
      <label for='path2'>Select file</label>

      <div class='upload-file'>
        <input class='path' readonly type='text' id='path2'></input>
        <label class='file-button' for='file'>Select File</label>
      </div>`,

    //4 Upload
    `
      <h3 style='margin-bottom:0px'>
        Upload summary file downloaded from Prism element or Prism Central
      </h3>

      <p style='margin-bottom:20px; width:100%'>
        This file has the data needed to license your cluster or license other Prism products.
      </p>

      <input type="file" id='file'>
      <label for='path2'>Select file</label>

      <div class='upload-file'>
        <input class='path' readonly type='text' id='path2'></input>
        <label class='file-button' for='file'>Select File</label>
      </div>`,

    //5 Upload
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

    //6 First Time
    `
      <div class='coin-image'>

        <div class='sp'>
          <div class='coin-holder'>
            <div class='coin-shadow'></div>
            <img class='coin' src='./img/coins.svg'/>
            <img class='coin' src='./img/coins.svg'/>
            <img class='coin' src='./img/coins.svg'/>
            <img class='coin' src='./img/coins.svg'/>
          </div>
        </div>
        <h2 id='coin-title'>
          A new way to license Nutanix products
        </h2>
        <p class='coin-text'> Here's why they are great </p>
      </div>
      `,

    //7 Cluster Details
    `
      <h3 style='font-weight:500;'>Ntnx_Marketing_001<br><kbd style='font-weight:400;'>UUID : 123231231232132<br>  ${capacityData.Nodes} Nodes</kbd></h3>
      <a class='pop-link'> See licensing History </a>

      <h3 style='margin-top:10px;'>Capacity</h3>
      <div class='deck' style='margin-bottom:20px;'>
      <div class='popup-card'> <h3>${capacityData.Cores} <kbd>cores </kbd></h3></div>

      <div class='popup-card'> <h3>${capacityData.HDD} <kbd>TiB HHD </kbd></h3></div>

      <div class='popup-card'> <h3>${Math.round(capacityData.SSD)} <kbd>TiB Flash </kbd></h3></div>
      </div>

      <div class='separator'></div>

      <h3>Cluster Licenses <kbd>&nbsp; 920 Coins</kbd></h3>
      <div class='deck' style='margin-bottom:30px;'>
      <div class='popup-card' style='width:100%;'> <h3 style='text-align:left; margin-left:15px;'>Acropolis Pro <kbd>&nbsp;120 Coins </kbd></h3></div>

      <div class='popup-card' style='width:100%; margin-top:10px;'> <h3 style='text-align:left; margin-left:15px;'>File Server <kbd>&nbsp;800 Coins </kbd></h3>
      </div>

      </div>


      <h3 style='margin-top:60px;'>Cluster Coin consumption<kbd>&nbsp; 920 Coins</kbd></h3>
      <div class='deck'>
      <div class='popup-card' style='width:100%;'> <h3 style='text-align:left; margin-left:15px;'>LIC-123123123 <kbd>&nbsp;&nbsp;460 Coins &nbsp; exp.12/12/2020</kbd></h3></div>

      <div class='popup-card' style='width:100%; margin-top:10px;'> <h3 style='text-align:left; margin-left:15px;'>LIC-123123123 <kbd>&nbsp;&nbsp;450 Coins &nbsp; exp.12/12/2020</kbd></h3></div>

      </div>`

    ,
    //8 cheatSheet
    `
    <h3> Trigger initial flow by using <a style='color:#22A5F7;' href='http://ntnx.design/new-orleans' target='_blank'>Registration</a></h3>

    <p style='margin-bottom:20px;'> 1. Use the cluster.xml file downloaded from the registration flow to trigger cluster licensing flow </p>

    <p style='margin-bottom:20px;'> 2. Use the cluster-summary-file.xml file downloaded from the reclaim flow to trigger reclaim flow </p>

    <p style='margin-bottom:20px;'> 3. Use the cluster-summary-expand.xml file downloaded from the license flow to trigger the expand flow </p>

    <code style='font-size:14px; line-height:1.5; padding: 8px 16px;'> Once the reclaim flow has been completed </br> <span style='font-weight:500; color: #2068CA; margin: 10px 0;'>(PRESS 1 on the keyboard)</span> to move to the expand flow in the licesing page in Prism Element</code>
    `
  ],

  footer: [
    //0
    `<button class="primary redeem btn-disabled">Next</button>`,

    //1
    `<button class="primary reclaim btn-disabled">Reclaim</button>`,

    //2
    `<button class="primary"><a href='img/license-file.xml' download> Download </a></button>`,

    //3
    `<button class="secondary cancel"> Cancel </button>
     <button class="primary congrats"> Save Changes </button>`,

    //4
    `<button class="primary see-licenses btn-disabled"> Apply </button>`,

    //5
    `
      <button class="primary add-node btn-disabled">Next</button>`,

    //6
    `<div class='sp'>
      <button class="secondary back"> Back </button>

      <div><button class="secondary cancel"> Cancel </button>
      <button class="primary next-coin"> Next</button></div>
     </div>`,

    //7
    `<button class="secondary cancel" style="margin-right:0"> Done </button>`,

    //8
    `<button class="primary manage-addons btn-disabled">Next</button>`,
  ]
}
const layer2Data = {
  body: [
    //0
    `
    <div class="popup-header">${popupData.title[0]}</div>
        <!-- <div class='steps-popup2'>
        <h3><p class='completed badge'>1</p>Upload</h3>
        <h3><p class='active badge'>2</p>Manage</h3>
      </div>-->
      <div class="popup-body panels">

        <div class='panel1'>
        <p style='margin-bottom:20px; margin-top:-3px; color:#22272E'> Licensing costs have been calculated based on <kbd class='tooltip-trigger'>this cluster's capacity </kbd></p>

        <h4 class= 'aos-data'style='margin-bottom:15px;'>Acropolis License </h4>

          <div class='license-pair aos-data'>

            <input
            type='radio'
            checked='checked'
            value='starter'
            style='margin-right: 10px;'
            id='acropolis-starter'>

            Starter

          </div>
          <div class='license-pair aos-data'>
            <input
            type='radio'
            value='pro'
            style='margin-right: 10px;'
            id='acropolis-pro'>
            Pro
          </div>
          <div class='license-pair aos-data' style='margin-bottom:30px;'>
          <input
           type='radio'
           value='ultimate'
           style='margin-right: 10px;'
           id='acropolis-ultimate'>
           Ultimate
          </div>

        <div class='separator aos-data'></div>

        <h4 style='margin-bottom:15px;' class='addon-data'>Additional Licenses </h4>
          <div class='license-pair addon-data'>
            <input type='checkbox'
            style='margin-right: 10px;
            margin-bottom:10px;'
            id='fs'
            value='fs'>
            File Server <br>
          </div>

          <div class='license-pair addon-data'>
            <input
            type='checkbox'
            style='margin-right: 10px;'
            id='sw'
            value='sw'>
            Software Encryption<br>
          </div>
        </div>

        <div class='panel2'>
          <h3 style='margin-bottom:19px;''>Cluster licensing costs in <kbd class='tooltip-trigger2'>Coins </kbd></h3>

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

          <p>Licensed until 12/12/20<br>based on Coin validity dates.</p>
        </div></div>
    <div class="popup-footer">${popupData.footer[3]}</div>`,

    //1
    `
      <div class="popup-header">${popupData.title[3]}</div>
        <!-- <div class='steps-popup2'>
        <h3><p class='completed badge'>1</p>Upload</h3>
        <h3><p class='active badge'>2</p>Manage</h3>
      </div> -->
      <div class="popup-body">
        <span class='count money'>4000</span>
        <p style='margin-bottom:30px;'> Their expiration date is 12/12/2020</p>
        <h3 style='text-align:center; margin-bottom:0;'> Your unused licenses have been credited coins to your account.</h3>
      </div>
      <div class="popup-footer">${popupData.footer[7]}</div>
    `,

    //2
    `<p class='statement'><code class='option' style='padding: 2px 6.5px;'>1</code>Generate a <a class='summary' href='img/cluster-summary-file.xml' download> cluster summary file.</a></p></a>

    <p class='statement'><code class='option'>2</code>Reclaim it through the <a href='home.html' target='_blank'> license page</a> action menu.</p>

    <p class='statement' style='margin-top:10px;'><code class='option'>3</code>Once the license file has been generated <a class='add-file'>upload it.</a></p>`,

    //3 expand
    `
    <div class="popup-header">${popupData.title[0]}</div>
        <!-- <div class='steps-popup2'>
        <h3><p class='completed badge'>1</p>Upload</h3>
        <h3><p class='active badge'>2</p>Manage</h3>
      </div>-->
      <div class="popup-body panels">

        <div class='panel1'>
        <p style='margin-bottom:20px; margin-top:-3px; color:#22272E'> Licensing costs have been calculated based on <kbd class='tooltip-trigger'>this cluster's capacity </kbd></p>

        <h4 class= 'aos-data'style='margin-bottom:15px;'>Acropolis License </h4>

          <div class='license-pair aos-data'>
            <input
            checked='checked'
            type='radio'
            value='pro'
            style='margin-right: 10px;'
            id='acropolis-pro'>
            Pro
          </div>

        <div class='separator aos-data'></div>

        <h4 style='margin-bottom:15px;' class='addon-data'>Additional Licenses </h4>
          <div class='license-pair addon-data'>
            <input type='checkbox'
            style='margin-right: 10px;
            margin-bottom:10px;'
            id='fs'
            value='fs'>
            File Server <br>
          </div>

        </div>

        <div class='panel2'>
          <h3 style='margin-bottom:19px;''>Cluster licensing costs in <kbd class='tooltip-trigger2'>Coins </kbd></h3>

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

          <p>Licensed until 12/12/20<br>based on Coin validity dates.</p>
        </div></div>
    <div class="popup-footer">${popupData.footer[3]}</div>`,

  ]
}

// Cluster license



function layer2(i) {
  $('body').append(
    `<div class="overlay overlay2" style='background-color:transparent;'>
      <div class="popup layer2" style='opacity:0; width:500px;'>
      <div> ${layer2Data.body[i]}</div>
      </div>
    </div>`
  );

  $('.back, .popup-header2').click(function() {
    $('.layer2').addClass('disappear');
    $('.popup:not(.layer2)').css('animation', 'reverse-layer 600ms forwards');
    $('.popup:not(.layer2)').removeClass('second');
    $('.layer2, .overlay2').remove();
  });

  if (i === 1) {
    $('.layer2').css('width', '400px');
  }

  popAnimate();
  CheckoutData();
  CheckoutData2();
  CheckoutData3();

  $('.congrats').click(function() {
    $('.popup').addClass('disappear');
    $('.overlay').removeClass('show');
    $('html').css('overflow', '');
    setTimeout(function() {
      $('.overlay').fadeOut('slow');
      setTimeout(function() {
        popupContent(2).fadeIn();
      }, 200);
    }, 600);

  });
}
var ani = [page0, page1,page2,page3,page4];
