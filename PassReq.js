function showPassReq() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

    <div class="backheadpassreq">Password recovery</div>
    <div class="backtop"></div>

    <div onclick="showfrontPage()" class="backbuttonsymbol">&lt;&lt</div>
    <div onclick="showfrontPage()" class="backbutton"></div>


    <div class="passreqfieldbox">
        <form action="#">
            Type inn your email address,<br>You will then get a password recovery link on email. <br />
            <input type="text" placeholder="Email" id="passreqfield" /><br />

            <button class="preqfiledsub" type="submit">Submit</button>
        </form>
    </div>
`;
