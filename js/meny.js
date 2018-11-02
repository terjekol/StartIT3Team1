function showMeny() {
<<<<<<< HEAD
    document.getElementById('mainContent').innerHTML = `

        <div class="m1">Menu</div></br>
=======
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    <div class="m1">Menu</div></br>
>>>>>>> bc6bbcd07b352a6edc1a8f06a4e040248afeec27

        <button class="m2">Driver</button>
        <button onclick="showPassengerAppointment()" class="m3">Passanger</button></br></br>
        <button class="m4">Profile</button>
        <button class="m5">History</button></br>
        <a href="index.html"><button class="m6">Log out</button></a>

        `;
}
