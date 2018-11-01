function showUserTypeScreen() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

  <div></div>
   <div class="dorp">Are you a driver or a passenger?</div>
   <div class="dorpbutt">
       <button id="dorpbuttA">Driver</button>
       <button id="dorpbuttB">Passanger</button>
  </div>
    <button id="logoutbutt" onclick="showfrontPage()">Log out</button>
 `;
}
