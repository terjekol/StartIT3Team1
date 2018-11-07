function showDriver() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
 <div class="backtop17"></div>
    <div onclick="showMeny()" class="backbuttonsymbol16"> &lt;&lt</div>
    <div onclick="showMeny()" class="backbutton15"></div>

    <div class="backheaddriverapp14"> Driver</div>
    <div class="d1"> Your active appointments</div>

    <div class="d2"> Monday</div>
    <div class="d3"> Tuesday</div>
    <div class="d4"> Wednesday</div>
    <div class="d5"> Thursday</div>
    <div class="d6"> Friday</div>

    <div class="weekback7"> &lt&lt</div>
    <div class="weeknext8"> &gt&gt</div>
    <div class="weekback9"></div>
    <div class="weeknext10"></div>

    <div class="color11"><b class="color12">Red</b> = Cancelled appointments</div>
    <button class="finddriver13" onclick="showPassengerPage()">Find passenger</button>

 `;
}
