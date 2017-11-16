const cardData ={
  cardInfo : [,`<kbd class='tooltip-trigger2'>CCUs</kbd> Consumed`,'Enviroment information'],
  cardBody :[13000,50000 ,50 + ' Clusters Licensed', ],
  cardSecondary : ['Consumed CCUs',`Available CCUs`,'Last updated Oct 2016'],
}

const fsChecked = `
  <input type='checkbox'
  style='display:none;'
  id='fs'
  value='fs'>`

const usageData ={
  Name :['Ntnx_Marketing_001','Ntnx_test_001','Ntnx_test_002','Sql_databse_Product','Prosql_3002','Apex_deploy','Backup_Product_07747','Exchange-server-production','Ntnx_Marketing_001', 'Backup_Product_07747','Apex_deploy','Exchange-server-production'],

  Type :['Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropolis Pro','Acropollis Ultimate','Acropollis Ultimate','Acropollis Ultimate','File Server','File Server', 'Software Encryption','Software Encryption'],

  Purchased :['750','600','135','750','600','600','135','750','600','135','750','600','135'],

  Ammounts :['750','600','135','750','600','135','750','135','750','135','750','600','135'],

  Expiration :['12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022','12/12/2022'],
}

const licensePrices=[
  {key: 'Starter', price:9000},
  {key: 'Pro', price:12000},
  {key: 'Ultimate', price:16000},
]


const purchaseDataTable ={
  id:['LIC-269169072133540','LIC-453717307588536','LIC-318528969756233','LIC-445740587946243','LIC-665093688564216','LIC-760632049862022','LIC-581499593621007','LIC-738683477922200','LIC-269169072133540','LIC-453717307588536','LIC-318528969756233','LIC-445740587946243','LIC-665093688564216','LIC-760632049862022','LIC-581499593621007','LIC-738683477922200'],
  purchased:[9246,11383,7436,5400,7966,9328,6373,10253,9246,11383,7436,5400,7966,9328,6373,10253],
  use:[9046,11383,7436,5400,7966,9328,6373,10253,9046,11383,7436,5400,7966,9328,6373,10253],
  Expiration:['12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020','12/12/2020']
}

//
const capacityData = {
  "Nodes" : 12,
  "Cores" : 192,
  "HDD" : 360,
  "SSD" : 23.04
}

let Popurri = {
  option : 9000,
  sw: null,
  fs: null
}

let sum = Popurri.option + Popurri.sw + Popurri.fs;
