// content.js
// alert("tester");
// while(2>1) {


//$.when(load).done(function() {
// sidste kørte function fra momondo er under id: "ampim"
/*$(".top-row").html('<div class="billede"> <div id="picture"> </div> <img src="chrome-extension://dhdbohbajnnloobkandkolhoonjcbdig/logo.png" alt="Test billede" align="left"> </div> ' +
    '<div id="popup" style="display: none">billede </div>');

*/
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


function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
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
            document.getElementById("Pointer" + i).style.setProperty("left", sample(testResults[i]) + "%");
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


        /*
        for (let i = 0; i < testResults.length; i++) {
            const
                getPercent = (min, max) => value => 100 * (value - min) / (max - min),
                Results = [testResults],
                minVal = sortedResults[0],
                maxVal = sortedResults[sortedResults.length - 1],
                sample = getPercent(minVal, maxVal);

            console.log(Math.trunc(sample(testResults[i])));

            document.querySelector(".showPointer").style.setProperty("left",sample(testResults[i]) +"%");


*/












        const SortedMin = sortedResults[0];
        const SortedMax = sortedResults[sortedResults.length - 1];

        console.log(SortedMin);
        console.log(SortedMax);

        showMinMax(parseInt(SortedMin).toString(), "sortedMin");
        showMinMax(parseInt(SortedMax).toString(), "sortedMax");

        //let a = accessData.resultWrapperFlightTime(4);

        /*
                let displayImage = new DisplayImage();
                displayImage.displayBar();
                for (let i = 0; i < document.getElementsByClassName("resultWrapper").length; i++) {
                    let accessData = new AccessData();
                    showText(calculator.calculator(accessData.resultWrapperFlightType(i), accessData.resultWrapperFlightTime(i), i), "resultWrapper" + i);
                }


                // accessData.setFlightType();
                //accessData.setFlightTime();



        */
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



