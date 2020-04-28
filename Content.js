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
    $(".resultWrapper").css("overflow", "visible"); //sætter resultWrapperens overflow til visible så vi kan gå ud af dens rammer

    $(".left-column").append(
        '<div class="link">\n' + //hitboxen man skal hover over for at få vist info
        '  <img src="chrome-extension://hehfejbelgaicjabkhbcnegpneadbkph/data/bar.png" alt="bar-billede" class = "displayBar"</img>\n' + //billedet af baren sat ind
        '  <div class="arrow-left">\n' +
        '    <div class="drop">\n' + //infobox - indeholder nedenstående
        '      <!--Content Here-->\n' +
        '      <img src="chrome-extension://hehfejbelgaicjabkhbcnegpneadbkph/data/aplus.png" alt="aplus-billede" class="pic"></img>\n' +
        '      <div class="line one"></div>\n' +
        '      <div class="line two"></div>\n' +
        '      <div  class="line three"></div>\n' +
        '      <div class="line four"></div>\n' +
        '      <div class="line five"></div>\n' +
        '    </div>\n' +
        //'    </div>\n' +
        '</div>');
}

function showPopUp() {
    let a = $(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://hehfejbelgaicjabkhbcnegpneadbkph/data/logo.png" alt="Test billede" align="left"> </div> ' +
        '<div id="popup" style="display: block">billede </div>');
}

function testPrint(){
    console.log("forhelvede");
    }

$(function () {
    setTimeout(function () {
        //letsTryThis3();

        let displayImage = new DisplayImage();
        displayImage.displayBar();

        let accessData = new AccessData();
       // accessData.setFlightType();
        //accessData.setFlightTime();

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



