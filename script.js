// Top bar buttons

let main_toggled = true
let my_works_toggled = false
let fave_chars_toggled = false
let runecut_toggled = false


function toggle_main() {
    if (main_toggled === true) {
        document.getElementById("main-window").style.display = "none"
        main_toggled = false
    }
    else if (main_toggled === false) {
        document.getElementById("main-window").style.display = "flex"
        main_toggled = true
    }
}

function toggle_my_work() {
    if (my_works_toggled === true) {
        document.getElementById("my-works-section").style.display = "none"
        my_works_toggled = false
    }
    else if (my_works_toggled === false) {
        document.getElementById("my-works-section").style.display = "block"
        my_works_toggled = true
    }
}

function toggle_fave_chars() {
    if (fave_chars_toggled === true) {
        document.getElementById("kin-list-section").style.display = "none"
        fave_chars_toggled = false
    }
    else if (fave_chars_toggled === false) {
        document.getElementById("kin-list-section").style.display = "block"
        fave_chars_toggled = true
    }
}

function toggle_runecut() {
    if (runecut_toggled === true) {
        document.getElementById("woodcut-game").style.display = "none"
        runecut_toggled = false
    }
    else if (runecut_toggled === false) {
        document.getElementById("woodcut-game").style.display = "inline"
        runecut_toggled = true
    }
}

// Woodcutting thingie 

let trees_chopped = 0;

function chop() {
     document.getElementById("woodguy-static").style.zIndex = "0";
    setTimeout(function() {
        trees_chopped = trees_chopped + 1;
        document.getElementById("wood-count-text").innerText = `Total wood: ${trees_chopped}`
        console.log(trees_chopped)
        document.getElementById("woodguy-static").style.zIndex = "3";
    }, 2400);
}



// Osaka top bar button thingie

var osaka_snd = new Audio("assets/osaka-ah-sound.mp3")
let osakalings_found = 0

function osaka_clicked() {
    if (osakalings_found === 5) {
        osaka_snd.play()
    }
}

function osakaling_1_found() {
    osakalings_found = osakalings_found + 1
    document.getElementById("osakaling-counter").innerText = `${osakalings_found}/5`
    document.getElementById("osakaling-1").style.display = "none"
    if (osakalings_found === 5) {
        document.getElementById("osaka").style.filter = "grayscale(0)"
        document.getElementById("osakaling-counter").style.color = "yellow"
    }
    }

function osakaling_2_found() {
    osakalings_found = osakalings_found + 1
    document.getElementById("osakaling-counter").innerText = `${osakalings_found}/5`
    document.getElementById("osakaling-2").style.display = "none"
    if (osakalings_found === 5) {
        document.getElementById("osaka").style.filter = "grayscale(0)"
        document.getElementById("osakaling-counter").style.color = "yellow"
    }
    }

function osakaling_3_found() {
    osakalings_found = osakalings_found + 1
    document.getElementById("osakaling-counter").innerText = `${osakalings_found}/5`
    document.getElementById("osakaling-3").style.display = "none"
    if (osakalings_found === 5) {
        document.getElementById("osaka").style.filter = "grayscale(0)"
        document.getElementById("osakaling-counter").style.color = "yellow"
    }
    }

function osakaling_4_found() {
    osakalings_found = osakalings_found + 1
    document.getElementById("osakaling-counter").innerText = `${osakalings_found}/5`
    document.getElementById("osakaling-4").style.display = "none"
    if (osakalings_found === 5) {
        document.getElementById("osaka").style.filter = "grayscale(0)"
        document.getElementById("osakaling-counter").style.color = "yellow"
    }
    }

function osakaling_5_found() {
    osakalings_found = osakalings_found + 1
    document.getElementById("osakaling-counter").innerText = `${osakalings_found}/5`
    document.getElementById("osakaling-5").style.display = "none"
    if (osakalings_found === 5) {
        document.getElementById("osaka").style.filter = "grayscale(0)"
        document.getElementById("osakaling-counter").style.color = "yellow"
    }
    }



// YOU BLINKED.

let bonnie_clicks = 1
var bonnie_snd = new Audio("assets/YOU_BLINKED.MP3")
bonnie_snd.volume = 0.3

function bonnie_clicked() {
    if (bonnie_clicks < 10) {
        bonnie_clicks = bonnie_clicks + 1
    } else if (bonnie_clicks === 10) {
        bonnie_clicks = 11
        document.getElementById("blink-top").style.top = "0"
        document.getElementById("blink-bottom").style.bottom = "0"
        setTimeout(function() {
        document.getElementById("bonnie").style.opacity = "0"
        document.getElementById("bonnie").style.cursor = "default"
        document.getElementById("blink-top").style.top = "-50vh"
        document.getElementById("blink-bottom").style.bottom = "-50vh"
        document.getElementById("osakaling-5").style.zIndex = "9"
    }, 100)
        setTimeout(function() {
        bonnie_snd.play()
    }, 250);

    }
}