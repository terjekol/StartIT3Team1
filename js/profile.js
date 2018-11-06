function showProPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
  
   
 <div class="backtop"></div>        
 <div class="backheadpassreq">   Profile    </div>
 <div onclick="showMenu()" class="backbuttonsymbol">&lt;&lt</div></a>
 <div onclick="showMenu()" class="backbutton"></div></a>
        
    <div class="lele2"><h2></h2></div>    
    <div class="backgroundkaos"></div>      
    <div class="profileBilde"><img src=img/bildetest.png style="max-width: 230px; max-height: 250px;"></div>
    <div class="ProfileBoks">  
        
            <div id="Navn" class="profileNavn">Houng Dajin</div>
            <div class="profile1">Phone Number<br><div id="nummer" class="profileInfo">47 33 24 99</div></div>
            <div class="profile2">Email <br><div id="mail" class="profileInfo">Tester@GetAcademy.no</div></div>
            <div class="profile3">Pick up Point <br><div id="point" class="profileInfo">Torget 10 3269 LARVIK</div></div>
            <div class="profile4">Driver Status<br><div id="status" class="profileInfo">Available</div></div>
            <div id="lar"></div>
            <div id="lar2"></div>
            <div class="profile5" onclick="editProfile()">Edit Profile</div>
    
    </div>
    
    `;
}
