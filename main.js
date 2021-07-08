var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var text_box = document.getElementById("text-box");
function start(){
    text_box.innerHTML="";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    text_box.innerHTML = content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("Taking Selfie...")
        speak(); 
    }
    
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Your Selfie Will Be Taken in 5 second";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}
var camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:10
});


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementbyId("selfie_image").src;
    link.href = image;
    link.click();
}