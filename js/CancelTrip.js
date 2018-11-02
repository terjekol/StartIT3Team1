function cancelTrip() { 
var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

<div class="backtop"></div>
    <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
    <a href="index.html"><div class="backbutton"></div></a>

    <link rel="stylesheet" type="text/css" href="css.css">
        <div class="backtop"></div>
        <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
        <a href="index.html"><div class="backbutton"></div></a>
        <div class="drive">You have cancelled your driving appointment</div>
        <div class="knapp">
            <button id="knapp" onclick="sendsomewhere()">OK!</button>
        </div>
        <style>
            div.drive {
                color: white;
            font-size: 34px;
            margin-top: 30vh;
            margin-bottom: -35vh;
        }

        body {
                background - color: #002147;
            text-align: center;
            font-family: 'Franklin Gothic Medium';
            user-select: none;
        }

        #OK! {
                background - color: white;
            border: groove black 2px;
            border-radius: 10px;
            box-shadow: 0 0 5px black;
            color: black;
            font-size: 32px;
            text-align: center;
            margin-top: 10px;
            min-width: 170px;
            max-width: 10vw;
            margin-bottom: 30vh;
        }

        #knapp {
                background - color: white;
            border: groove black 2px;
            border-radius: 10px;
            box-shadow: 0 0 5px black;
            color: black;
            font-size: 32px;
            text-align: center;
            margin-top: 40vh;
            margin-bottom: 30vh;
            min-width: 300px;
            max-width: 10vw;
        }
    </style>
`;
}
