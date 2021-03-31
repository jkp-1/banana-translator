var btnTrnslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#text-input");

var textOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function onClickURL (input){
    var translateURL = serverURL + "?" + "text=" + input;
    return translateURL;

}


function clickHandler(){
    console.log("clicked");
    var inputTxt = textInput.value;
    fetch(onClickURL(inputTxt))
    .then(response=> response.json())
    .then(json=> {
        var translatedTxt = json.contents.translated;
        textOutput.innerText = translatedTxt;
    })

}
btnTrnslate.addEventListener("click", clickHandler);