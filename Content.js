function showText(something, string) { //something = co2-tallet
    let div = document.getElementById(string);
    console.log("div= " + div);
    div.innerHTML = something + " kg"; //hvad der bliver printet i hover box
    //div.innerHTML = "Denne rejse udleder " + something + " kg CO2"; //hvad der bliver printet i hover box
}

function showMinMax(something, string) {
    let div = document.getElementsByClassName(string);
    for (let i = 0; i < div.length; i++) {
        div[i].innerHTML = something;
    }
    console.log(something);
}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


$(function () {
    setTimeout(function () {

        let displayImage = new DisplayImage();
        //var emissionArray = new Array();
        displayImage.displayBar();

        var calc;
        var sortedResults;
        var indexOfSortedResults = new Array();
        const testResultsBuffer = new Array();



        for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {

            $(".col-info result-column").append('<div> <br> </div> ');


            let oneCalc = new CO2calculator(i);
            showText(parseInt(testResults[i]).toString(), "resultWrapper" + i);


        }
        for (let i = 0; i < testResults.length; i++){
            testResultsBuffer.push(testResults[i]);
        }
        sortedResults = testResultsBuffer.sort((a, b) => a - b);

            const
                getPercent = (min, max) => value => 100 * (value - min) / (max - min),
                minVal = sortedResults[0],
                maxVal = sortedResults[sortedResults.length - 1],
                sample = getPercent(minVal, maxVal);
            console.log(testResults);
        for (let i =0; i < testResults.length; i++) {
            let testResultRemap = map_range(sample(testResults[i]),0,100,1,98);
            document.getElementById("Pointer" + i).style.setProperty("left", testResultRemap + "%");
            let testResultRemapInner = map_range(sample(testResults[i]),0,100,5,92);
            document.getElementById("pointerInner" + i).style.setProperty("left", testResultRemapInner + "%");

            if (sample(testResults[i]) >66 ){
                document.getElementById("resultWrapper" + i).style.setProperty("color", "#de1810");

            }
            else if (sample(testResults[i]) >33 ){
                document.getElementById("resultWrapper" + i).style.setProperty("color", "#ffb933");
            }
            else {
                document.getElementById("resultWrapper" + i).style.setProperty("color", "#339A70");
            }
        }

        const SortedMin = sortedResults[0];
        const SortedMax = sortedResults[sortedResults.length - 1];

        console.log(SortedMin);
        console.log(SortedMax);

        showMinMax(parseInt(SortedMin).toString(), "sortedMin");
        showMinMax(parseInt(SortedMax).toString(), "sortedMax");

    },5000);
});