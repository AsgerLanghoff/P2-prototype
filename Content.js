// content.js
// alert("tester");
// while(2>1) {


//$.when(load).done(function() {
// sidste kørte function fra momondo er under id: "ampim"
/*$(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://dhdbohbajnnloobkandkolhoonjcbdig/logo.png" alt="Test billede" align="left"> </div> ' +
    '<div id="popup" style="display: none">billede </div>');

*/


function letsTryThis2() {

    $(".ZEv0-price-bookingSection").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://hehfejbelgaicjabkhbcnegpneadbkph/data/logo.png" alt="Test billede" align="left"> </div> ' +
        '<div id="popup" style="display: none">billede </div>');
}

function letsTryThis3 () {
    $(".ZEv0-price-bookingSection").html('<layer left = 0 top = 0 z-index = 1000><div class="link">\n' +
        '    N\n' +
        '  <div class="arrow">\n' +
        '    <div class="drop">\n' +
        '      <!--Contant Here-->\n' +
        '      <div class="pic"></div>\n' +
        '      <div class="line one"></div>\n' +
        '      <div class="line two"></div>\n' +
        '      <div  class="line three"></div>\n' +
        '      <div class="line four"></div>\n' +
        '      <div class="line five"></div>\n' +
        '    </div>\n' +
        '    </div>\n' +
        '</div></layer>');
}

function showPopUp() {
    let a = $(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://hehfejbelgaicjabkhbcnegpneadbkph/data/logo.png" alt="Test billede" align="left"> </div> ' +
        '<div id="popup" style="display: block">billede </div>');

    //console.log("jatak");
}

function testPrint(){
    console.log("forhelvede");
    }


$(function () {
    setTimeout(function () {
        letsTryThis3();
        let accessData = new AccessData();
        accessData.setFlightType();
        accessData.setFlightTime();

        $(".billede").mouseenter(function () {
            testPrint();
        })
        $(".billede").mouseleave(function () {
            // $(this).find(showPopUp).show();
            console.log("FARVEL");
        })
    }, 5000);
});





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



