function showTransportReguest() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
<div class="request">
        Do you wish to send<br/>
        Name <br/>
        Transport Request<br/>
        <button id="yesButton">Yes</button>
        <button id="NoButton">No</button>
    </div>
`;
}
