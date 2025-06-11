

impress().init();


let next_actio = document.getElementById('next-slide');
let prev_actio = document.getElementById('prev-slide');
let page_audio = ""


// check current slide value and replace as audio nama value 
document.addEventListener("impress:stepenter", function(event) {
    let slide = event.target;
    let posts = slide.id;
    let value = posts.replace('step-','slide-');
    page_audio = value+".mp3";
});


// get current slide audio name and play audio
let audio_play = () => {

    let aruri = window.location.pathname.split('/');
    let rpath = aruri[aruri.length - 1];
    let vpath = rpath.replace('.html','/');
    let files = vpath+page_audio;
    let plays = document.getElementById('main-player');

    plays.src = files;
    plays.load();
    plays.play();
}


prev_actio.addEventListener("click", ()=>{
    impress().prev();
    audio_play();
})

next_actio.addEventListener("click", ()=>{
    impress().next();
    audio_play();
})

