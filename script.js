let currentScreen = 1;
let musicPlaying = false;

const screens = document.querySelectorAll('.screen');
const loadingScreen = document.getElementById('loading-screen');
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();

    setTimeout(()=>{
        loadingScreen.style.opacity="0";
        setTimeout(()=>loadingScreen.style.display="none",500);
    },2500);

    musicToggle.addEventListener('click', toggleMusic);
});

function autoPlayMusic(){
    if(!musicPlaying){
        backgroundMusic.play();
        musicPlaying=true;
    }
}

function toggleMusic(){
    const icon = musicToggle.querySelector('i');
    if(musicPlaying){
        backgroundMusic.pause();
        icon.className="fas fa-music";
        musicPlaying=false;
    }else{
        backgroundMusic.play();
        icon.className="fas fa-pause";
        musicPlaying=true;
    }
}

function nextScreen(){
    screens[currentScreen-1].classList.remove('active');
    currentScreen++;
    screens[currentScreen-1].classList.add('active');
}

function createFloatingHearts(){
    setInterval(()=>{
        const heart=document.createElement("div");
        heart.className="heart";
        heart.innerHTML=["💖","💕","💗","💝","✨"][Math.floor(Math.random()*5)];
        heart.style.left=Math.random()*100+"%";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),7000);
    },400);
}

function heartsExplosion(){
    createExplosion(["💖","💕","💗","💝"]);
    setTimeout(()=>nextScreen(),2000);
}

function hugExplosion(){
    createExplosion(["🤗","❤️","💞","💓"]);
}

function createExplosion(emojis){
    const explosion=document.createElement("div");
    explosion.className="explosion";
    document.body.appendChild(explosion);

    for(let i=0;i<40;i++){
        const item=document.createElement("div");
        item.className="explosion-item";
        item.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
        item.style.left="50%";
        item.style.top="50%";
        item.style.setProperty("--dx",(Math.random()*800-400)+"px");
        item.style.setProperty("--dy",(Math.random()*600-300)+"px");
        explosion.appendChild(item);
    }

    setTimeout(()=>explosion.remove(),2000);
}