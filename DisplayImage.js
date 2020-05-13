//resultWrapperSplitArray = new Array();

class DisplayImage {
    nameAlt;
    stylingAlignement;
    DEFAULT_ALIGNEMENT = "center";
    stylingWidth;
    stylingHeight;
    elementLocation;
    dataSource;
    id;


    constructor() {
    }

    /* constructor(stylingAlignement, elementLocation, id, dataSource) {

         this.id = id;
         this.dataSource = dataSource;
         this.elementLocation = elementLocation;
         this.nameAlt = nameAlt;
         this.stylingAlignement = stylingAlignement;
     }*/


    setElementLocation(elementLocation) {
        this.elementLocation = elementLocation;
    }

    setDataSource(dataSource) {
        this.dataSource = dataSource;
    }

    setId(id) {
        this.id = id;
    }

    displayBar() {
        // $(".resultWrapper").css("overflow", "visible"); //sætter resultWrapperens overflow til visible så vi kan gå ud af dens rammer
        console.log("det virker");

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
                '<img src="chrome-extension://cfofojdafpemfeffhcjpanohlhppeabo/data/bar.png" alt="test bar" class = "showBar"> ' +
                '<div class="triangle-left"></div>' +
                '<section class="textBox" id="textBox">' +
                '<h1 id="textFormat">Denne rejse udleder <span id="CO2-print" class="CO2-print" ></span> CO<sub>2</sub></h1>' +
                '<hr>' +
                '<p class="textBoxDescription">FN’s klimapanel IPCC har vurderet at en person maks må bruge 2500 kg CO2 per år i 2050 i kampen mod global opvarming.<br><br> Når du vælger et <span style="color: #339A70; font-weight: bold"> grønt fly </span> er du med til at skabe en bedre fremtid for alle</p>' +
                '<img src="chrome-extension://cfofojdafpemfeffhcjpanohlhppeabo/data/bar.png" alt="indicatorBar" class="showBarInside" >' +
                '<p class="leftColumn"> Mest miljøvenlige <br> rejse for din <br> søgning:  CO<sub>2</sub></p>' +
                '<p class="rightColumn"> Mindst miløjvenlige <br> rejse for <br> din søgning:  CO<sub>2</sub></p>' +
                '</section>' +
                ' </div>');


            }

            for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
                document.getElementById("CO2-print").id = "resultWrapper" + i;
        }

    }
}

/*
$(e).find(".left-column").first().append("HoverBox.html");
'<div class="barAttributes">' +

'<img src="chrome-extension://hehfejbelgaicjabkhbcnegpneadbkph/data/bar.png" alt="test bar" class = "showBar"</img>' +

'<div class="triangle-left"></div>' +

'<div class="textBox" id="textBox">' +

'<h3 </div>'+


//'<div class="CO2-print" id="CO2-print" </div>' +
//'<img src="chrome-extension://hehfejbelgaicjabkhbcnegpneadbkph/data/bar.png" alt="test bar2" class = "hoverBar" </img>' +


'</div>' +


'</div>');


document.getElementById("CO2-print").id = "resultWrapper" + i;
}
for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
}
}
 */
