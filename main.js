var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src=" + data_uri"';
    });
}
recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie"){
        console.log("Action succesful:Taking selfie.....");
    }
}
webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
});
camera = document.getElementById("camera");
function speak(){
    webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },5000);
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}