// Woodcutting thingie 
function chop() {
     document.getElementById("woodguycutting").style.zIndex = "10";
    setTimeout(function() {
         document.getElementById("woodguycutting").style.zIndex = "-1";
    }, 2400);
}