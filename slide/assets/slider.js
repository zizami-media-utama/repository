/**
 * Impress js slideshow for yuros.org
 * Copyright@2025 Al Muhdil karim
 * PT Lektor Media Utama
 */


// Global Variable
let page_audio = document.getElementById('main-player');
let page_timer = document.getElementById('progressbar');
let page_progs = document.getElementById('progrestime');


// PREPARATION
window.location.hash = ''; // clean url hash, because of url hash cause error for audio 
impress().init();



// AUDIO LIBRARY
let audio_init = (posts)=> {

    page_timer.style.width = "0%";

    let value = posts.replace('step-','slide-');
    let named = value+".mp3";
    let aruri = window.location.pathname.split('/');
    let rpath = aruri[aruri.length - 1];
    let vpath = rpath.replace('.html','/');
    let files = vpath+named;
    page_audio.src = files;
    page_audio.load();

    page_audio.addEventListener('canplay', () => {
        page_audio.play();
        audio_prog();
    });
}


let audio_exit = ()=> {
    page_progs.classList.remove('active');
    page_audio.pause();
    page_audio.currentTime = 0;
    page_audio.src = ""
}


let audio_mute = ()=> {
    page_audio.muted = ! page_audio.muted;
}


let audio_play = ()=> {
    ( page_audio.paused ) ? page_audio.play() : page_audio.pause();
}


let audio_prog = ()=> {

    let plays = document.getElementById('pend-icon');
    let mutes = document.getElementById('mute-icon');

   
    page_audio.addEventListener('timeupdate', () => {
        const progress = (page_audio.currentTime / page_audio.duration) * 100;
        page_timer.style.width = progress + '%';
    });
   
    
    page_audio.addEventListener("pause", (event) => { 
        let icon = plays.getAttribute('data-play');
        plays.src = icon
        page_progs.classList.remove('active');
    })

    page_audio.addEventListener("play", (event) => { 
        let icon = plays.getAttribute('data-pause');
        plays.src = icon
        page_progs.classList.add('active');
    })

    page_audio.addEventListener("mute", (event) => { 
        let icon = mutes.getAttribute('data-unmute');
        mutes.src = icon
    })

    page_audio.addEventListener("unmute", (event) => { 
        let icon = mutes.getAttribute('data-muted');
        mutes.src = icon
    })
}


// CONTROL LIBRARY

let control_init = ()=> {
    document.getElementById('panel').classList.remove('slide-on-stop');
    document.getElementById('panel').classList.add('slide-on-play');
}


let control_exit = ()=> {
    document.getElementById('panel').classList.remove('slide-on-play');
    document.getElementById('panel').classList.add('slide-on-stop');
}


let control_next = ()=> {
    audio_exit();
    impress().next();
}


let control_prev = ()=> {
    audio_exit();
    impress().prev()
}


let screens_full = ()=> {

    let main = document.getElementById("we-slide");
    let init = document.getElementById("full-icon");

    if (document.fullscreenElement) {
        let icon = init.getAttribute('data-maxs');
        init.src = icon;
        document.exitFullscreen()

    } else {
        let icon = init.getAttribute('data-mins');
        init.src = icon;
        if (main.requestFullscreen) {
            main.requestFullscreen();
        } else if (main.webkitRequestFullscreen) { /* Safari */
            main.webkitRequestFullscreen();
        } else if (main.msRequestFullscreen) { /* IE11 */
            main.msRequestFullscreen();
        }
    }
}


// EVENT LISTENER 
document.addEventListener("impress:stepenter", function(event) {
    
    let posts = event.target.id;

    if ( posts !== "step-1" ) {
        control_init();
        audio_init(posts);
    }
    else {
        control_exit();
        audio_exit();
    }
});



// PLAYER CONTROL

// first play
document.getElementById('play-slide').addEventListener('click', (event)=> {
    control_init();
    impress().next();
})


// mute audio
document.getElementById('mute-audio').addEventListener("click", (event)=>{
    event.preventDefault(); audio_mute();
})


// play audio
document.getElementById('pend-audio').addEventListener("click", (event)=>{
    event.preventDefault(); audio_play();
})


// next slide
document.getElementById('next-slide').addEventListener("click", (event)=>{
    event.preventDefault(); control_next();
})


// prev slide
document.getElementById('prev-slide').addEventListener("click", (event)=>{
    event.preventDefault(); control_prev();
})

// full screen
document.getElementById('full-slide').addEventListener("click", (event)=>{
    event.preventDefault(); screens_full();
})