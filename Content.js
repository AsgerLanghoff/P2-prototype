// content.js
// alert("tester");
// while(2>1) {


/*for (let i =0 ; i<document.getElementsByClassName("resultWrapper").length; i++) {
    let x = document.getElementsByClassName("resultWrapper")[i];
    for (let j =0 ; j<x.getElementsByClassName("planeDetails details-subheading").length; j++) {
        let y = x.getElementsByClassName("planeDetails details-subheading")[j];
        let z = x.getElementsByClassName("segmentDuration text-row")[j];
        console.log(y.innerText);
        console.log(z.innerText);
    }

    console.log("next plane");
}
*/

//$.when(load).done(function() {
// sidste kørte function fra momondo er under id: "ampim"
/*$(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://dhdbohbajnnloobkandkolhoonjcbdig/logo.png" alt="Test billede" align="left"> </div> ' +
    '<div id="popup" style="display: none">billede </div>');

 */


function letsTryThis2() {
    $(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://fjjeajoinafajkcnmaimnejkkkfimohk/data/logo.png" alt="Test billede" align="left"> </div> ' +
        '<div id="popup" style="display: none">billede </div>');
}

function show() {
    $(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://fjjeajoinafajkcnmaimnejkkkfimohk/data/logo.png" alt="Test billede" align="left"> </div> ' +
        '<div id="popup" style="display: block">billede </div>');
    console.log("jatak");

}


$(function () {
    setTimeout(function () {
        letsTryThis2();
        let accessData = new AccessData();
        accessData.setFlightType();
        accessData.setFlightTime();


    }, 5000);
});

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




