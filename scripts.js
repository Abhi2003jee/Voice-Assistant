let button = document.querySelector("#button")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishes(){
    let day = new Date();
    let hours = day.getHours();
    if(hours >=0 && hours < 12){
        speak("Good Morning Sir!");
    }
    else if(hours >=12 && hours < 16){
        speak("Good Afternoon Sir!");
    }
    else if(hours >=16 && hours < 19){
        speak("Good Evening Sir!");
    }
    else{
        speak("Good Night Sir!");
    }
}
window.addEventListener("load",()=>{
    wishes()
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    //console.log(event)
    takeCommand(transcript.toLowerCase())
}
button.addEventListener("click",()=>{
    recognition.start()
    button.style.display = "none"
    voice.style.display = "block"
})
function takeCommand(message){
    button.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("hey") ){
        speak("Hello sir, what can I help you?")
    }
    else if (message.includes("who are you")){
        speak("I am virtual assistant, created by Abhi Sir")
    }
    else if (message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if (message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/","_blank")
    }
    else if (message.includes("open facebook") || message.includes("facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/","_blank")
    }
    else if (message.includes("open instagram")){
        speak("opening instragram...")
        window.open("https://www.instagram.com/","_blank")
    }
    else if (message.includes("open whatsapp")){
        speak("opening  whatsapp...")
        window.open("whatsapp://","_blank")
    }
    else if (message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if (message.includes("open onenote")){
        speak("opening onenote...")
        window.open("onenote://")
    }
    else if (message.includes("what is time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("what is date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"numeric",year:"numeric"})
        speak(date)
    }
    else{
        speak(`this is what I found on internet regarding ${message.replace("aidy","")}`)
        window.open(`https://www.google.com/search?q= ${message.replace("aidy","")}`,"_blank")
    }
}