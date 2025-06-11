/**
 * Impress js slideshow for yuros.org
 * Copyright@2025 Al Muhdil karim
 * PT Lektor Media Utama
 */


// remove all location hash
window.location.hash = '';

// start slide js
impress().init();


let page_audio = ""


// check current slide value and replace as audio nama value 
document.addEventListener("impress:stepenter", function(event) {
    let posts = event.target.id;

    if (( posts !== "step-1" )) {
        let value = posts.replace('step-','slide-');
        page_audio = value+".mp3";
        audio_load();
    }
});


// get current slide audio name and play audio
let audio_load = () => {

    let aruri = window.location.pathname.split('/');
    let rpath = aruri[aruri.length - 1];
    let vpath = rpath.replace('.html','/');
    let files = vpath+page_audio;
    let plays = document.getElementById('main-player');

    plays.src = files;
    plays.load();
    plays.play();
}


document.getElementById('prev-slide').addEventListener("click", (event)=>{
    event.preventDefault();
    impress().prev();
})


document.getElementById('next-slide').addEventListener("click", (event)=>{
    event.preventDefault();
    impress().next();
})