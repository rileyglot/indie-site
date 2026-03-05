// Woodcutting thingie 

let trees_chopped = 0;
var snd = new Audio("assets/osaka_ah_sound.mp3")

function chop() {
     document.getElementById("woodguycutting").style.zIndex = "10";
    setTimeout(function() {
        trees_chopped = trees_chopped + 1;
        document.getElementById("wood-count-text").innerText = `Total wood: ${trees_chopped}`
        console.log(trees_chopped)
         document.getElementById("woodguycutting").style.zIndex = "-1";
    }, 2400);
}

function osaka_clicked() {
    snd.play()
    // There should be more here soon I'm just tired
}
