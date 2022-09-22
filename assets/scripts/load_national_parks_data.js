"use strict"

let locationsArray = []
let nationalParksArray = []
let parkTypesArray = []
let tableCounter = 0;

let dropdownRef = document.getElementById('parkSel');
let dropdownValue = dropdownRef.value;

let parkTable = document.getElementById('parkData');

window.onload = function () {

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
        for (let i = 0; i < locationsArray.length; i++) {
            parkDDL.innerHTML = parkDDL.innerHTML + '<option>' + locationsArray[i] + '</option>';
        }
    }

    else if (document.getElementById('parktype').checked == true) {
        parkDDL.innerHTML = "<option>-- Select --</option>";
        for (let i = 0; i < parkTypesArray.length; i++) {
            parkDDL.innerHTML = parkDDL.innerHTML + '<option>' + parkTypesArray[i] + '</option>';

        }
    }
    else if (document.getElementById('displayAll').checked == true) {
        displayAllParksData();
    }
    //clearParksTable();
}

function populateParksTable() {
    clearParksTable();
    let dropdownRef = document.getElementById('parkSel');

    let dropdownValue = dropdownRef.value;
    let parkTable = document.getElementById('parkData');
    //console.log(parkTable);
    let dropdownSelect = (document.getElementById('location').checked == true);
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
    headerCell5.innerHTML = "<b>Location ID</b>";
    //tableCounter++;

    if (dropdownSelect) {
        for (let i = 0; i < nationalParksArray.length; i++) {
            if (dropdownValue === nationalParksArray[i]['State']) {
                //console.log(nationalParksArray[i]['LocationID']);
                var row1 = parkTable.insertRow(-1);
                var cell1 = row1.insertCell(0);
                var cell2 = row1.insertCell(1);
                var cell3 = row1.insertCell(2);
                var cell4 = row1.insertCell(3);
                var cell5 = row1.insertCell(4);

                cell1.innerHTML = nationalParksArray[i]['LocationName'];
                cell2.innerHTML = nationalParksArray[i]['Address'];
                cell3.innerHTML = nationalParksArray[i]['City'];
                cell4.innerHTML = nationalParksArray[i]['State'];
                cell5.innerHTML = nationalParksArray[i]['LocationID'];
            }

        }
    }
    else {
        for (let i = 0; i < nationalParksArray.length; i++) {
            if (nationalParksArray[i]['LocationName'].includes(dropdownValue)) {
                //console.log(nationalParksArray[i]['LocationID']);
                var row1 = parkTable.insertRow(-1);
                var cell1 = row1.insertCell(0);
                var cell2 = row1.insertCell(1);
                var cell3 = row1.insertCell(2);
                var cell4 = row1.insertCell(3);
                var cell5 = row1.insertCell(4);

                cell1.innerHTML = nationalParksArray[i]['LocationName'];
                cell2.innerHTML = nationalParksArray[i]['Address'];
                cell3.innerHTML = nationalParksArray[i]['City'];
                cell4.innerHTML = nationalParksArray[i]['State'];
                cell5.innerHTML = nationalParksArray[i]['LocationID'];
            }
        }

    }
}

function clearParksTable() {
    let parkTable = document.getElementById('parkData');
    var rowCount = parkTable.rows.length;
    for (var i = rowCount - 1; i >= 0; i--) {
        parkTable.deleteRow(i);
    }
}

function displayAllParksData() {

    clearParksTable();
    //attempting to add table improvements with bootstrap through innerhtml
    //let tableCreate = document.getElementById('tableContainer');
    //tableCreate.innerHTML = `<table id="parkData" class="table table-hover">`;

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

    for (let i = 0; i < nationalParksArray.length; i++) {

        //console.log(nationalParksArray[i]['LocationID']);
        var row1 = parkTable.insertRow(-1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        var cell4 = row1.insertCell(3);
        var cell5 = row1.insertCell(4);

        cell1.innerHTML = nationalParksArray[i]['LocationName'];
        cell2.innerHTML = nationalParksArray[i]['Address'];
        cell3.innerHTML = nationalParksArray[i]['City'];
        cell4.innerHTML = nationalParksArray[i]['State'];
        cell5.innerHTML = nationalParksArray[i]['LocationID'];

    }
    //tableCreate.innerHTML = tableCreate.innerHTML + `</table>`;
    let radioSel1 = document.getElementById('location');
    radioSel1.checked = false;
    let radioSel2 = document.getElementById('parktype');
    radioSel2.checked = false;
    let dropdownReset = document.getElementById('parkSel');
    dropdownReset.innerHTML = "<option>-- Select --</option>";

}

let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}