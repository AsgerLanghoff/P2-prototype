// content.js
// alert("tester");
// while(2>1) {


//for (let i =0 ; i<document.getElementsByClassName("planeDetails details-subheading").length; i++) {
//  let x = document.getElementsByClassName("planeDetails details-subheading")[i];
//console.log(x.innerText);
//}
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


//function Test() {
   /* var image = document.createElement("img");
    image.src = chrome.runtime.getURL("icon.png");
    var placeCanvas = document.getElementsByClassName("planeDetails details-subheading");
    var place = placeCanvas.getBoundingClientRect();
    var x = place.left;
    var y = place.top;
    document.body.appendChild(image);
    //image.style.width = document.getElementsByClassName("Flights-Results-FlightPriceSection right-alignment sleek").Width/2;
    //image.style.height =document.getElementsByClassName("Flights-Results-FlightPriceSection right-alignment sleek").Height/2;
    //image.style.width = document.Width/2;
    //image.style.height = document.Height/2;
    //alert("tester tester");
    console.log(x);
}*/
   //function test() {

       /*var btnParent = $(".resultwrapper");
       console.log(btnParent);
       var buttons = btnParent.find(getElementsByClassName("buttom"));
       console.log(buttons);
       for (var i = 0; i < buttons.length; i++) {
           $(buttons[i]).html("<b>Hey atle"+i+"</b>");
           console.log(buttons[i]);
       }*/

   //}
   //test();
/*$(".top-row").submit(function(e) {
$(this).appendTo("<h> Hey atle" + "</h>");
    e.preventDefault();

});
var run = false;
$( document ).ready(function() {
    run = true;
});

while (run){
    //$(".booking-link ").html("<h> Hey atle" + "</h>");

}
*/
/*$.when(load).done(function() {
    $(".top-row").append("<h> Hey atle" + "</h>");
});
*/
// sidste kørte function fra momondo er under id: "ampim"
function letsTryThis2(){
    $(".top-row").html('<div class="billede"> <img src="chrome-extension://dhdbohbajnnloobkandkolhoonjcbdig/logo.png" alt="Test billede" align="left"> </div>');
}
$(function(){
    setTimeout(function(){
        letsTryThis2();
        var accessData = new AccessData();
        accessData.setFlightType();
    },5000);
});

//Kode til at indsætte billede på erdetfredag.dk

/*var pic = chrome.runtime.getURL("logo.png");
$(document).ready(function() {
    $(".yes").append('<div class="billede"> <img src= "chrome-extension://dhdbohbajnnloobkandkolhoonjcbdig/logo.png" alt="Test billede" width="120" height="300"> </div>');
    console.log(pic);
});

 */




