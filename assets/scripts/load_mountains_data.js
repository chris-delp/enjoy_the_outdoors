"use strict"

let mountainsArray = []

window.onload = function(){

    loadJsonData("./assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
        
    })

}
function populateSelect() {
          
    let mountainDropdownList = document.getElementById('sel');
        for(let i=0; i<mountainsArray.length; i++){
            mountainDropdownList.innerHTML = mountainDropdownList.innerHTML + '<option>' + mountainsArray[i]['name'] + '</option>';
    }
} 

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}