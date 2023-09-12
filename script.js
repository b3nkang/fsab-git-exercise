let bg = document.getElementById("bg");
let count = 0;
bg.addEventListener('click', () => {
    if (count == 0){
        bg.src = "imgs/bg2.avif";
        count++;
    } else if (count == 1) {
        bg.src = "imgs/bg3.avif";
        count++;
    } else {
        bg.src = "imgs/blueno_bg.png";
        count = 0;
    }
})
;