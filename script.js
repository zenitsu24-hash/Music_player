let progress = document.getElementById("progress")
let song = document.getElementById("songs");
let ctrlicon = document.getElementById("ctrlicon");
let volume = document.getElementById("volume")

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime; 
}

function playpause() {
    if(ctrlicon.classList.contains("fa-circle-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-circle-pause");
        ctrlicon.classList.add("fa-circle-play");
        console.log(1)
    }
    else{
        song.play();
        ctrlicon.classList.remove("fa-circle-play");
        ctrlicon.classList.add("fa-circle-pause")
        console.log(2)
    }
}
function songs() {
    song.duration = 0;
}

if(song.play()){
    setInterval(() => {
       progress.value = song.currentTime; 
    }, 1000);
}

progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    ctrlicon.classList.remove("fa-circle-pause");
    ctrlicon.classList.add("fa-circle-play");
}

volume.onchange = () => {
    volume.up();
}