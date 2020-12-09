var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("textarea");
var outputDiv = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

 var serverUrl = "https://api.funtranslations.com/translate/pirate.json"


function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input
}


function errorHandler(error){
console.log("error occured" , error)
console.log("Oops that's an internal  error  , come again later")
}


function clickHandler() {
    // outputDiv.innerText = "text translated : " + textArea.value;
    var textInput = textArea.value;             // taking input

    //calling server for    process
    fetch(getTranslationUrl(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerHTML = translatedText;    //output
            })
        .catch( errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);