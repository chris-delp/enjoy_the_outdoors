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
    console.log(clickCounter);
    
    
}

mountainNames.addEventListener("change",(event)=> {
    selectedMtn = document.getElementById('mtnSel').value;
    console.log(selectedMtn);
})

function getMountain(){
    let dropdownRef = document.getElementById('mtnSel');
    
    let dropdownValue = dropdownRef.value;
    
    console.log(dropdownValue);
}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}