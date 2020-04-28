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

            // e = a singular resultWrapper

            let e = $(".resultWrapper").get(i);

            //Here, we find the first instance of ".left-column" and appends some HTML code.
            $(e).find(".left-column").first().append(
                '<div class="link">\n' + //hitboxen man skal hover over for at få vist info
                '  <img src="chrome-extension://fjjeajoinafajkcnmaimnejkkkfimohk/data/bar.png" alt="bar-billede" class = "displayBar"</img>\n' + //billedet af baren sat ind
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

    }


    setAlignement(alignement) {
        this.stylingWidth = alignement;
    }

}