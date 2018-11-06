
function showTheHistory() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

    <div class="backtop"></div>
    <div onclick="showMenu()" class="backbuttonsymbol">&lt;&lt</div>
    <div onclick="showMenu()" class="backbutton"></div>

    <div class="backheaddriverapp">History</div>

    <button class="driverHistory" onclick="driverHistory()">Driver</button>
    <button class="PassengerHistory" onclick="passengerHistory()">Passenger</button>
    <button class="ContributorsHistory" onclick="contributorsHistory()">Top Contributors</button>
`;
}
