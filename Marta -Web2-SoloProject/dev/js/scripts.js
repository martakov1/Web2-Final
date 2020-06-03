var $burger = $("#burger-icon");
var $nav = $('nav[data-nav] a');
var isVisible = false;

fuction mouseClick(){
    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide(){
        isVisible = false;
        }
    }
}

$burger.on("click", mouseClick);
$navA.on ("click", mouseClick);