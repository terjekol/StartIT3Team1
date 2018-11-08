function passengerHistory() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

<div id="history1">History</div>

    <div class="historyPassenger">

        <svg id="icon2" onclick="homePage()" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" fill="currentColor" />
        </svg>
    </div>
    <div id="passenger">Passenger</div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>

        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Monday</div>


    </div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>

        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Tuesday</div>
    </div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>

        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Wedneday</div>
    </div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>

        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Thursday</div>
    </div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>

        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Friday</div>
    </div>
 `;
}