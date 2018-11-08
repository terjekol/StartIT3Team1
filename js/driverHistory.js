function driverHistory() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    <div class="backtop"></div>
    <div onclick="showMenu()" class="backbuttonsymbol">&lt;&lt</div>
    <div onclick="showMenu()" class="backbutton"></div>

    <div class="backheaddriverapp">History</div>
    <div id="Driver">Driver</div>
    <div id="firstDriver">
        <div id="date">22.11.2018</div>

        Distnace: 12km <br /> Cost: 12km <br /> Passangers: name <br/>  name        

        <div id="day">Monday</div>
    </div>
    <div id="secondDriver">
        <div id="date">25.11.2018</div>

        Distnace: 12km <br /> Cost: 12km <br /> Passangers: name
        <div id="day">Tuesday</div>
    </div>
    <div id="therdDriver">
        <div id="date">27.11.2018</div>

        Distnace: 12km <br /> Cost: 12km <br /> Passangers: name
        <div id="day">Wednesday</div>
    </div>
    <div id="forthdDriver">
        <div id="date">01.12.2018</div>

        Distnace: 12km <br /> Cost: 12km <br /> Passangers: name
        <div id="day">Thursday</div>
    </div>
    <div id="fifthdDriver">
        <div id="date">04.12.2018</div>

        Distnace: 12km <br /> Cost: 12km <br /> Passangers: name
        <div id="day">Friday</div>
    </div>
    <div id="sixthDriver">
        <div id="date">08.12.2018</div>

        Distnace: 12km <br /> Cost: 12km <br /> Passangers: name
        <div id="day">Monday</div>
    </div>`;
}
