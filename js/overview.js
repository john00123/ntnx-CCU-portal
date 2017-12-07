// const widgetData = [
//   {
//   Unique: 'coin',
//   Title:'Coin Summary',
//   Subtitle:'8000 Coins'
//   },
//
//   {
//   Unique: 'exp',
//   Title:'Expiring soon',
//   Subtitle:'Per entity'
//   },
//
//   {
//   Unique: 'trend',
//   Title:'Usage Trend',
//   Subtitle:'Per entity'
//   },
// ];
//
//
// widgetData.map(title => $('.container').append(
//     `<div class = 'card ${title.Unique}'>
//       <div class = 'card-header'>
//        <h5>${title.Title}</h5>
//        <h3 class='dropdown'>${title.Subtitle}</h3>
//       </div>
//     </div>`
//   )
// );
//
// const coinData = [{
//   image : './img/donut.svg',
//   values:[
//     {
//       name:'Consumed',
//       value: 8000,
//       color: '#456EE6'
//     },
//     {
//       name:'Available',
//       value: 22000,
//       color: '#46D477'
//     },
//   ]
// }]
//
// $('.coin h3').removeClass('dropdown');
//
//
// //coin widget
//
// $('.coin').append(
//   `<div class='card-body coin-body'>
//     <img src = ${coinData[0].image}></img>
//     <div>${coinData[0].values.map(data =>`<h3 style='color:${data.color} '>●</h3><p style=''>${data.name}</p>`)}</div>
//   <div>`
// );
//
// $('.coin-body').str.replace(",", "");

const pie= $('.graph:eq(0)');
const trend= $('.graph:eq(1)');
let index = 0;
let indext = 0;

pie.click(function(){
  if(index <= 0){
  this.src = "./img/w1-2.png";
  }

  if(index === 1){
    this.src = "./img/w1-3.png";
  }

  if(index === 2){
    this.src = "./img/w1.png";
    index = -1;
  }

  index ++;

})


trend.click(function(){
  if(indext <= 0){
  this.src = "./img/w3-2.png";
  }

  if(indext === 1){
    this.src = "./img/w3.png";
    indext = -1;
  }

  indext ++;

})
