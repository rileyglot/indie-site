// Woodcutting thingie 

let trees_chopped = 0;

function chop() {
     document.getElementById("woodguy-cutting").style.zIndex = "10";
    setTimeout(function() {
        trees_chopped = trees_chopped + 1;
        document.getElementById("wood-count-text").innerText = `Total wood: ${trees_chopped}`
        console.log(trees_chopped)
        document.getElementById("woodguy-cutting").style.zIndex = "-1";
    }, 2400);
}


// Osaka top bar button thingie

var snd = new Audio("assets/osaka_ah_sound.mp3")

function osaka_clicked() {
    snd.play()
    // There should be more here soon I'm just tired
}
