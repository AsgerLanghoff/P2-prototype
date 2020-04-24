class DisplayImage extends DisplayData {
    nameAlt;
    stylingAlignement;
    DEFAULT_ALIGNEMENT = "center";
    stylingWidth;
    stylingHeight;

    constructor(nameAlt, stylingAlignement/*, stylingWidth, stylingHeight*/) {
        super();

        this.nameAlt = nameAlt;
        this.stylingAlignement = stylingAlignement;
        //this.stylingHeight = stylingHeight;
        //this.stylingWidth = stylingWidth;
    }



    setDataSource(dataSource) {
        super.setDataSource(dataSource);
    }
    setElementLocation(elementLocation) {
        super.setElementLocation(elementLocation);
    }

    setId(id) {
        super.setId(id);
    }

    display() {
        $(ElementLocation).html('<div class="DisplayData"> <div id="tempID"> </div> <img src="" alt="" align=""> </div> ');
        let img = document.getElementById("tempID")
        img.src = this.dataSource;
        img.id = this.id;
        img.alt = this.alt;
        img.align = this.stylingAlignement;
        //img.height = this.stylingHeight;
       // img.width = this.stylingWidth;



        //$(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://fjjeajoinafajkcnmaimnejkkkfimohk/data/logo.png" alt="Test billede" align="left"> </div> ' +
         //   '<div id="popup" style="display: none">billede </div>');

    }

    setAlignement(alignement){
        this.stylingWidth = alignement;
    }

}