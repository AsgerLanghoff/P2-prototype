//resultWrapperSplitArray = new Array();
class DisplayImage {
    id;

    constructor() {
    }

    displayBar() {
        // $(".resultWrapper").css("overflow", "visible"); //sætter resultWrapperens overflow til visible så vi kan gå ud af dens rammer
        var picpointer = chrome.runtime.getURL("pointer.png");

        //elemnets is an array that can be used to show the amounts of resultwrappers with the .length command(used in the "for"loop)
        const elements = document.getElementsByClassName("resultWrapper");
        for (let i = 0; i < elements.length; i++) {

            // e = a singular resultWrapper from the "elements"-array position [i]

            let e = $(".resultWrapper").get(i);

            //sætter resultWrapperens overflow til visible så vi kan gå ud af dens rammer
            $(".resultWrapper").css("overflow", "visible");


            //Here, we find the first instance of ".left-column" and appends some HTML code.
            $(e).find(".left-column").first().append(

                '<div class="barAttributes"> ' +
                '<img src="chrome-extension://gdiijpmbijajjfingoinpgdpdbboognn/data/information.png" alt="information" class="informationIcon" id="informationIcon">' +
                '<img src="chrome-extension://gdiijpmbijajjfingoinpgdpdbboognn/data/pointer.png" alt="pointer" class = "showPointer" id = "Pointer"> ' +
                '<img src="chrome-extension://gdiijpmbijajjfingoinpgdpdbboognn/data/bar.png" alt="test bar" class = "showBar"> ' +
                '<div class="triangle-left"></div>' +

                '<section class="textBox" id="textBox">' +      // This textBox determins the size of the box that it to be shown when hovered
                '<h1 id="textFormat">Med denne rejse udleder du <span id="CO2-print" class="CO2-print" ></span> CO<sub>2</sub></h1>' +
                '<hr>' +
                '<p class="textBoxDescription">FN’s klimapanel IPCC har vurderet at en person maks må bruge 2500 kg CO2 per år i 2050 i kampen mod global opvarming.<br><br> Når du vælger et <span style="color: #339A70; font-weight: bold"> grønt fly </span> er du med til at skabe en bedre fremtid for alle</p>' +
                '<img src="chrome-extension://gdiijpmbijajjfingoinpgdpdbboognn/data/pointer.png" alt="pointer" class = "showPointerInner" id = "pointerInner"> ' +
                '<img src="chrome-extension://gdiijpmbijajjfingoinpgdpdbboognn/data/bar.png" alt="indicatorBar" class="showBarInside" >' +
                '<p class="leftColumn"> Mest miljøvenlige <br> rejse for din <br> søgning: <span id="sortedMin" class="sortedMin"></span> CO<sub>2</sub></p>' +
                '<p class="rightColumn"> Mindst miløjvenlige <br> rejse for <br> din søgning: <span id="sortedMax" class="sortedMax"></span>  CO<sub>2</sub></p>' +
                '<hr class="bottomLine">' +
                '<p class="bottomText"> <img id="bottomIcon" src="chrome-extension://gdiijpmbijajjfingoinpgdpdbboognn/data/logo.png">Læs mere i popup menuen øverste i hjørnet af din browser</p>' +
                '</section>' +
                '</div>'+
                '<div> <br> <br> </div>' );
            }

        for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
            document.getElementById("CO2-print").id = "resultWrapper" + i;
            document.getElementById("Pointer").id = "Pointer" + i;
            document.getElementById("pointerInner").id = "pointerInner" + i;
        }

    }
}
