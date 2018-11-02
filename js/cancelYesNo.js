function cancelYesNO() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

<link rel="stylesheet" type="text/css" href="css.css">
    <div class="backtop"></div>
    <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
    <a href="index.html"><div class="backbutton"></div></a>

    <div class="sikker">Sure you want to cancel?</div>
    <div class="knapp">
        <button id="knappA">Yes</button>
        <button id="knappB">No</button>
    </div>
`;
}
