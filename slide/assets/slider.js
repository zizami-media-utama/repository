
impress().init();


let next_slide = document.getElementById('next-slide');
let prev_slide = document.getElementById('prev-slide');

next_slide.addEventListener("click", ()=>{
    impress().next();
	console.log("hidup");
})


prev_slide.addEventListener("click", ()=>{
    impress().prev();
	console.log("hidup");
})
