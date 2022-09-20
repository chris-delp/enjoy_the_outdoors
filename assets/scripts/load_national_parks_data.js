"use strict"

let locationsArray = []
let nationalParksArray = []
let parkTypesArray = []

window.onload = function(){

    loadJsonData("assets/data/locations.json").then((locations) => {
        locationsArray = locations;
    })

    loadJsonData("assets/data/nationalparks.json").then((nationalParks) => {
        nationalParksArray = nationalParks.parks;
    })

    loadJsonData("assets/data/parktypes.json").then((parkTypes) => {
        parkTypesArray = parkTypes;
    })

}

function populateParkSelect() {
    
    let dropdownSelect = (document.getElementById('location').checked == true);
    let parkDDL = document.getElementById('parkSel');
      
    if (document.getElementById('location').checked == true) {
        parkDDL.innerHTML = "<option>-- Select --</option>";
        for(let i=0; i<locationsArray.length; i++){
         parkDDL.innerHTML = parkDDL.innerHTML + '<option>' + locationsArray[i] + '</option>';
        }
    }    
    
    else {
        parkDDL.innerHTML = "<option>-- Select --</option>";
            for(let i=0; i<parkTypesArray.length; i++){
                 parkDDL.innerHTML = parkDDL.innerHTML + '<option>' + parkTypesArray[i] + '</option>';
         
               }
              
        }
        
}

function populateParksTable() {
    
    let dropdownRef = document.getElementById('parkSel');
    let dropdownValue = dropdownRef.value;
   
    let parkTable = document.getElementById('parkData');
    var header = parkTable.createTHead();
    var row = header.insertRow(0);
    var headerCell1 = row.insertCell(0);
    var headerCell2 = row.insertCell(1);
    var headerCell3 = row.insertCell(2);
    var headerCell4 = row.insertCell(3);
    var headerCell5 = row.insertCell(4);
    headerCell1.innerHTML = "<b>Location Name</b>";
    headerCell2.innerHTML = "<b>Address</b>";
    headerCell3.innerHTML = "<b>City</b>";
    headerCell4.innerHTML = "<b>State</b>";
    headerCell5.innerHTML = "<b>Location ID</b>"

    for(let i=0; i<nationalParksArray.length; i++){
        if(dropdownValue === nationalParksArray[i]['State']){
            console.log(nationalParksArray[i]['LocationID']);
            var row1 = parkTable.insertRow(-1);
            var cell1 = row1.insertCell(0);
            var cell2 = row1.insertCell(1);
            var cell3 = row1.insertCell(2);
            var cell4 = row1.insertCell(3);
            var cell5 = row1.insertCell(4);
            //cell1.innerHTML = '<th>' + 'Location Name' + '</th>';
            
            cell1.innerHTML = nationalParksArray[i]['LocationName'];
            cell2.innerHTML = nationalParksArray[i]['Address'];
            cell3.innerHTML = nationalParksArray[i]['City'];
            cell4.innerHTML = nationalParksArray[i]['State'];
            cell5.innerHTML = nationalParksArray[i]['LocationID'];
        }
        
    }
    //console.log(dropdownValue);
    

}

let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}