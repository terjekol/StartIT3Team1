function showfrontPage() {
    mainContentDiv.innerHTML = `

    <div class="frontpage">
        <div class="info" onclick="showInfoPage()">i</div>

        <img class="jotronlogo" src="img/Jotron_logo.jpg"><br>
        <div id=wrongpass></div>
        <div class="loginbox">
            Username<br />
            <input type="text" placeholder="Username" id="usernameTxt" /><br />
            Password<br />
            <input type="password" placeholder="Password" id="passwordTxt" /><br />
        </div>
        <div class="passreq" onclick="showpassReq()">Forgott password?</div>

        <div class="b1">
            <button class="login" onclick="dologInCheck()">Login</button><br>
            <button class="regi" onclick="showRegPage()">Registrer</button>
        </div>

        <div class="userinfo" onclick="showUserInfo()">Privacy and Terms of Use</div>

    </div>

    `;
}
