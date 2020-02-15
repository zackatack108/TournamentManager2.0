
function writeNavBar(page, selected){

    document.write(
        `<nav class="navbar"> 
            <ul>
                <li id="file"><a href="file.html">File</a></li>
                <li id="settings"><a href="settings.html">Settings</a></li>
                <li id="info"><a href="info.html">Info</a></li>
                <li id="devices"><a href="devices.html">Devices</a></li>
                <li id="scoring"><a href="scoring.html">Scoring</a></li>
                <li id="rankings"><a href="rankings.html">Rankings</a></li>
                <li id="schedule"><a href="schedule.html">Schedule</a></li>
                <li id="displays"><a href="displays.html">Displays</a></li>
                <li id="teamsinfo"><a href="teamsinfo.html">Teams Info</a></li>
            </ul>
        </nav>`
    );
    
    if(page != null){
        document.getElementById(page).classList.add("pageselect");
    }

    if(page == "scoring") {
        document.write(
            `<nav class="pagenav">
                <ul>
                    <li id="scoringcompetition"><a href="scoringcompetition.html">Competition</a></li>
                    <li id="scoringskills"><a href="scoringskills.html">Skills</a></li>
                </ul>
            </nav>`
        );

        if(selected != null){
            document.getElementById(selected).classList.add("pageselect");
        }
        
    }

}