

function makeitrain() {
    var drops = '',
    var increment = 0;
    while (increment < 100) {
        increment += 3;
        // var delay = Math.floor(Math.random()*(98-1+1)+1);
        drops += '<div className="drop" style="left:' + increment + ' %"><div className="stem" style="left:' + increment + ' %"><div className="splash" style="left:' + increment + ' %"></div></div></div>';
    }
    document.getElementById("raincontainer").innerHTML += drops
}
makeitrain();