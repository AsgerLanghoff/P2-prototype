// content.js
// alert("tester");
// while(2>1) {


//for (let i =0 ; i<document.getElementsByClassName("planeDetails details-subheading").length; i++) {
//  let x = document.getElementsByClassName("planeDetails details-subheading")[i];
//console.log(x.innerText);
//}
for (let i =0 ; i<document.getElementsByClassName("resultWrapper").length; i++) {
    let x = document.getElementsByClassName("resultWrapper")[i];
    for (let j =0 ; j<x.getElementsByClassName("planeDetails details-subheading").length; j++) {
        let y = x.getElementsByClassName("planeDetails details-subheading")[j];
        let z = x.getElementsByClassName("segmentDuration text-row")[j];
        console.log(y.innerText);
        console.log(z.innerText);
    }

    console.log("next plane");
}








// }