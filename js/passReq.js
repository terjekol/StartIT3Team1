function showpassReq() {
    mainContentDiv.innerHTML = ` 

    <div class="backheadpassreq">Password recovery</div>
    <div class="backtop"></div>

    <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
    <a href="index.html"><div class="backbutton"></div></a>


    <div class="passreqfieldbox">
        <form action="#">
            Type inn your email address,<br>You will then get a password recovery link on email. <br />
            <input type="text" placeholder="Email" id="passreqfield" /><br />

            <button class="preqfiledsub" type="submit">Submit</button>
        </form>
    </div>

    `;

}
