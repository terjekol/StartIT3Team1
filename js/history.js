
function showTheHistory() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

<div class="backtop"></div>
    <div onclick="showMeny()" class="backbuttonsymbol">&lt;&lt</div>
    <div onclick="showMeny()" class="backbutton"></div>


    <div id="History">History</div>
    <hr id="line" />

    <button class="driverHistory" onclick="driverHistory()">Driver</button>
    <button class="PassengerHistory" onclick="passengerHistory()">Passenger</button>
    <button class="ContributorsHistory" onclick="contributorsHistory()">Top Contributors</button>
`;
}
