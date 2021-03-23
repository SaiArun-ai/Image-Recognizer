Webcam.set({
    width:500,
    height:400,
    img_format:'png',
    png_quality:100
});
camera = document.getElementById("RW");
Webcam.attach('#RW');

function TSnapshot(){
    Webcam.snap(function(DU){
        var CWI = "<img id = 'CapturedI' src = '" + DU +  "' >";
        document.getElementById("CW").innerHTML = CWI;
    });
    setTimeout(function() {
        Save();
    }, 10000);
}
function Save(){
    link = document.getElementById("link");
    IUrl = document.getElementById("CapturedI").src;
    link.href = IUrl;
    link.click();
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Rp7U5U5oU/model.json",ModeL);
function ModeL(){
    console.log("lc");
}
function IdentifyImage(){
    img = document.getElementById("CapturedI");
    classifier.classify(img,gr);
}
function gr(error,results) {
    if(error){
        console.error(error);
    }else{
        console.log(results)
        document.getElementById("Object").innerHTML = results[0].label;
        confidence = results[0].confidence.toFixed(5)*100 + "%";
        document.getElementById("Accuracy").innerHTML = confidence;
    }
}