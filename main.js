//https://teachablemachine.withgoogle.com/models/QqswkVZbe/
Webcam.set({
    width: 300 , height: 275 , img_format: "png" , png_quality: 90
})
cam = document.getElementById("camera")
Webcam.attach(cam)
function take_picture()
{
    Webcam.snap(function (datauri) {
        document.getElementById("results").innerHTML = "<img id='resultImg' src='"+datauri+"' >"
    })
}
console.log("ml5 version" , ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QqswkVZbe/model.json" , modelLoaded)
function modelLoaded()
{
    console.log("model is ready")
}
function check()
{
    img = document.getElementById("captured_image")
    classifier.classify(img , gotResult)
}
function gotResult(error , results)
{
    if (error) {
        console.error(error)
    }
    else
    {
        console.log(result)
        document.getElementById("result_object_name").innerHTML = results[0].label
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3)

    }
}