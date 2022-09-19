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
    
    console.log(dropdownSelect);

    if (document.getElementById('location').checked == true) {
        for(let i=0; i<locationsArray.length; i++){
         parkDDL.innerHTML = parkDDL.innerHTML + '<option>' + locationsArray[i] + '</option>';
        }
    }    
    
    else {
            for(let i=0; i<parkTypesArray.length; i++){
                 parkDDL.innerHTML = parkDDL.innerHTML + '<option>' + parkTypesArray[i] + '</option>';
         
               }
               console.log(parkDDL);
        }
        
}

let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}