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
    //console.log(selectedMtn);
    let selectedMtnData = loadMountain(selectedMtn);
    let mountain = document.getElementById('mountainCards');
    //var mtnName = mountain;
    //var mtnHt = mountain;
    //let imgLink = "assets/images/mountains/";
    //for(let i=0;i<mountainsArray.length; i++){
    //    let imgSearch =    
    //}
    //assets\images\mountains\Adams-StoryImage_2.jpg
    if(selectedMtn !="-- Select --"){
    mountain.innerHTML = `<article class="card" id="mountainCard">              
    <img src="assets/images/mountains/${selectedMtnData['img']}" style="border-radius:10px; margin-bottom:1em"<br>
    <p><b>Name: </b> ${selectedMtnData['name']}<br><b>Elevation: </b> ${selectedMtnData['elevation']} feet<br>
    <b>Effort Level: </b>${selectedMtnData['effort']}<br><b>Description: </b><br>${selectedMtnData['desc']}</p></article>`;
    }
    else {
        mountain.innerHTML = ``;
    }
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
    //return -1;
}


//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}