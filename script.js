
console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let songItems = Array.From (document.getElementsByClassName("2.mp3"));

// Song List (Check file paths)
let songs = [
    {songName: "Karuna Karo Kasht Haro", filePath: "1.mp3", coverPath: "covers/card1img.jpeg"},
    {songName: "Krishna Teri Ho gyi", filePath: "2.mp3", coverPath: "covers/card2img.jpeg"},
    {songName: "More Songs", filePath: "3.mp3", coverPath: "covers/card3img.jpeg"},
    {songName: "Final Song", filePath: "4.mp3", coverPath: "covers/card4img.jpeg"},
    {songName: "Final Song", filePath: "5.mp3", coverPath: "covers/card5img.jpeg"},
    {songName: "Final Song", filePath: "6.mp3", coverPath: "covers/card6img.jpeg"},
    {songName: "Final Song", filePath: "7.mp3", coverPath: "covers/card7img.jpeg"},
    {songName: "Final Song", filePath: "8.mp3", coverPath: "covers/card7img.jpeg"},

];

// songItems.forEach((element,i)=>{
//     console.log(Element,i);
//     element.getElementByTagName("kanha.jpg")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;



// });

// Handle play/pause button click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = "1";
        gif.style.display = "inline";
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Update progress bar as the audio plays
audioElement.addEventListener('timeupdate', () => {
    let progress = ((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

// Change audio current time when progress bar is moved
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Hide GIF when song ends
audioElement.addEventListener('ended', () => {
    gif.style.display = 'none';
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
});

