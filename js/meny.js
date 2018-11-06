function showMeny() {
    mainContentDiv.innerHTML = `

    <div class="m1"></div>
    <div class="m11">Menu</div>

    <button class="m2">Driver</button>
    <button onclick="showPassengerAppointment()" class="m3">Passanger</button><br>
    <button onclick="showprofilePage()" class="m4">Profile</button>
    <button onclick="showTheHistory()" class="m5">History</button><br>

    <button onclick="showfrontPage()" class="m6">Log out</button>

        `;
}
