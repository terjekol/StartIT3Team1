function profileEdit() {
        var mainContentDiv = document.getElementById('mainContent');
        mainContentDiv.innerHTML = `

        <div class="backtop"></div>        
        <div class="backheadpassreq">   Profile    </div>
        <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
        <a href="index.html"><div class="backbutton"></div></a>
        <div class="lele2"><h2></h2></div>    
        <div class="backgroundkaos"></div>      
        <div class="profileBilde"><img src=img/bildetest.png style="max-width: 230px; max-height: 250px;"></div>
        <div class="ProfileEdit">       
                <div class="profilePhone"><input type="text" name="Number" placeholder="Phone Number" style="border: none; text-align: center;"></div>
                <div class="profileEmail"><input type="text" name="Mail" placeholder="Email Adress"  style="border: none; text-align: center;"></div>
                <div class="profilePickup"><input type="text" name="Point" placeholder="Pick up Point" style="border: none; text-align: center;"></div>
                <div class="profileStatus"><input type="text" name="Status" placeholder="Driver Status" style="border: none; text-align: center;"></div>
                <div class="profilePassword"><input type="password" name="Password" placeholder="New Password" style="border: none; text-align: center;"></div>
                <div class="profileConfirm"><input type="password" name="PassAgain" placeholder="New Password Again" style="border: none; text-align: center;"></div>
                <div class="profileSave" onclick="profile()">Save Changes</div>
        </div>
    `;
}
