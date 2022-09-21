"use strict"

let mountainsArray = []
let clickCounter = 0;
let selectedMtn = "";
let mountainNames = document.querySelector("#mtnSel");

window.onload = function(){

    loadJsonData("./assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
        
    })

}
function populateSelect() {
    let mountainDropdownList = document.getElementById('mtnSel');
    if(clickCounter === 0) {
        for(let i=0; i<mountainsArray.length; i++){
            mountainDropdownList.innerHTML = mountainDropdownList.innerHTML + '<option>' + mountainsArray[i]['name'] + '</option>';
        }
    }
    clickCounter++;
    //console.log(clickCounter);
}

mountainNames.addEventListener("change",(event)=> {
    selectedMtn = document.getElementById('mtnSel').value;
    // console.log(selectedMtn);
    let selectedMtnData = loadMountain(selectedMtn);
    let mountain = document.getElementById('mountainCard');
   
    //var mtnName = mountain;
    //var mtnHt = mountain;
    let imgLink = "assets/images/mountains/";
    //for(let i=0;i<mountainsArray.length; i++){
    //    let imgSearch =    
    //}
         
    mountain.innerHTML = "<img src= <q>" + imgLink + "</q>" +
    "<p>" + "Name: " + selectedMtnData['name'] + "<br>" 
    + "Elevation: " +  selectedMtnData['elevation'] + " feet" + "<br>" 
    + "Effort Level: " + selectedMtnData['effort'] + "<br>" 
    + "Description: " + selectedMtnData['desc'] + "</p>";
    //mtnHt.innerHTML = "<p>" + selectedMtnData['elevation'] + "</p>";
    //console.log(mountain, mtnName);
})

function loadMountain(selectedMtn){
    for(let i=0; i<mountainsArray.length; i++){
        if(mountainsArray[i]['name'].match(selectedMtn)) {
        return mountainsArray[i];
        //console.log(mountainsArray[i]);
        }
    }
    //console.log(mountainsArray[i])
    return -1;
}


//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}