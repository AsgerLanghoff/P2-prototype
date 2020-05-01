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
                '<div class="barAttributes">' +

                '<img src="chrome-extension://hehfejbelgaicjabkhbcnegpneadbkph/data/bar.png" alt="test bar" class = "showBar"</img>' +



                '<div class="triangle-left"></div>' +


                '<div class="textBox" id="textBox">' +

                '<span> Indsæt lang tekst her det er mega fedt</span>' +
                '<div class="CO2-print" id="CO2-print" </div>' +



                '</div>'+
                //'</div>' +
                //'</div>' +

                '</div>');



            document.getElementById("CO2-print").id = "resultWrapper" + i;
        }
        console.log("pre id print");
        for (let i = 0 ; i < document.getElementsByClassName("resultWrapper").length; i++) {
            console.log(document.getElementsByClassName("CO2-print")[i].id);
        }
        console.log("after id print");

    }


    hoverText() {
        for (let i = 0; i < document.getElementsByClassName("resultWrapper"); i++) {
            let div = document.getElementById("textBox")[i]
            div.innerHTML = "Det virker lidt";
        }
    }

    displayText(){

    }




    setAlignement(alignement) {
        this.stylingWidth = alignement;
    }

}