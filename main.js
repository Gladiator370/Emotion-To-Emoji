prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captureimage"src =  "' + data_uri + '"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_HnyWXOJH/model.json",modelLoaded );
 
function modelLoaded(){
    console.log('Model Loaded!');
} 
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSythesisisUtterrance(speak_data_1+speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);}

    function check(){
        img = document.getElementById("captureimage");
        classifier.classify(img , Gotresult);
    }

    function Gotresult(error , result){
        if(error){
            console.error(error);
        }
        else{
            console.log(result);
            document.getElementById("result_emtion_name").innerHTML = result[0].label;
            document.getElementById("reult_emotion_name2").innerHTML = result[1].label;
            prediction_1 = result[0].label;
            prediction_2 = result[1].label;
            speak();

            if(result[0].label == "happy"){
            document.getElementById("result_emoji").innerHTML = "&#128522;";
        }
            if(result[0].label == "sad"){
            document.getElementById("result_emoji").innerHTML = "&#128532;";
        }
            if(result[0].label == "angry"){
            document.getElementById("result_emoji").innerHTML = "&#128545;"; 
        }

            if(result[1].label == "happy"){
            document.getElementById("result_emoji").innerHTML = "&#128522;";
        }
            if(result[1].label == "sad"){
            document.getElementById("result_emoji").innerHTML = "&#128532;";
        }
            if(result[1].label == "angry"){
            document.getElementById("result_emoji").innerHTML = "&#128545;"; 
            }
        }
    }