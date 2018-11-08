function ShowDriverAppointments() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

    <div class="backtop"></div>
    <div onclick="showMenu()" class="backbuttonsymbol">&lt;&lt</div>
    <div onclick="showMenu()" class="backbutton"></div>
    <div id="sjaforforheader">Active Passangers</div>

    <div class="sjaforformaindiv">
        <div class="sjaforforcontainer">
            <div id="sjaforfor1">
                <h1 class="sjaforfortest123">Navn Navnesen</h1>
                <p class="sjaforfortlfnumber1">99 13 37 99</p>
                <p id="sjaforforavstand1">Distance: 2km</p>
                <div id="sjaforforgooglemaps1">Google Maps</div>
                <div onclick="cancelYesNO()" class="sjaforforAvlys1">Cancel</div>
            </div>

            <div id="sjaforfor2">
                <h1 class="sjaforfornavn2">Navn Navnesen</h1>
                <p class="sjaforfortlfnumber2">13 99 99 37</p>
                <p id="sjaforforavstand2">Distance: 4km</p>
                <div id="sjaforforgooglemaps2">Google Maps</div>
                <div onclick="cancelYesNO()" class="sjaforforAvlys2">Cancel</div>
            </div>
        </div>
    </div>
    
    
    `;
}
