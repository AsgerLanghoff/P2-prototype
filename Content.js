// content.js
// alert("tester");
// while(2>1) {


//$.when(load).done(function() {
// sidste kørte function fra momondo er under id: "ampim"
/*$(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://dhdbohbajnnloobkandkolhoonjcbdig/logo.png" alt="Test billede" align="left"> </div> ' +
    '<div id="popup" style="display: none">billede </div>');

*/


function showText(something, string) {
    let div = document.getElementById(string);
    console.log("div= " + div);
    div.innerHTML = something;
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("det nu");
    let displayImage = new DisplayImage();
    displayImage.displayBar();
    for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
        let accessData = new AccessData();
        accessData.resultWrapperFlightTime(i);
        showText(accessData.getWrapperTimeAsString(), "resultWrapper" + i);
    }

});

/*
$(function () {
    setTimeout(function () {

        //let a = accessData.resultWrapperFlightTime(4);


        let displayImage = new DisplayImage();
        displayImage.displayBar();
        for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
            let accessData = new AccessData();
            accessData.resultWrapperFlightTime(i);
            showText(accessData.getWrapperTimeAsString(), "resultWrapper" + i);
        }


        // accessData.setFlightType();
        //accessData.setFlightTime();

    }, 0);
});
*/

/*(function(){
    $("#picture").hover(function() {
        //$(this).find("icon.png").show(200);
        console.log("opopopipoju");
    }, function(){
        //$(this).find("icon.png").hide(200);
        console.log("ikke længere på");
    });
});


/*$(".billede").hover(function() {
    $(this).css("display", show());
    console.log("på");
}, function() {
    $(this).css("display", "none");
    console.log("af");
});*/

//Kode til at indsætte billede på erdetfredag.dk

/*var pic = chrome.runtime.getURL("logo.png");
$(document).ready(function() {
    $(".yes").append('<div class="billede"> <img src= "chrome-extension://dhdbohbajnnloobkandkolhoonjcbdig/logo.png" alt="Test billede" width="120" height="300"> </div>');
    console.log(pic);
});

 $(".billede").mouseenter( function () {
            $(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://fjjeajoinafajkcnmaimnejkkkfimohk/data/logo.png" alt="Test billede" align="left"> </div> ' +
                '<div id="popup" style="display: cube"> billede </div>');
            console.log("på");
            });

 */



