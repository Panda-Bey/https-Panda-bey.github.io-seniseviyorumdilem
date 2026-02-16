if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('sw.js');
}

function start(){
 document.getElementById("intro").style.display="none";
 document.getElementById("app").style.display="block";
 const m=document.getElementById("bgm");
 if(m) m.play().catch(()=>{});
}

function openSec(id){
 document.querySelectorAll(".section").forEach(x=>x.classList.remove("active"));
 document.getElementById(id).classList.add("active");
}

/* ===== KAVANOZ ===== */

const notes=[
"Seni seviyorum",
"İyi ki varsın",
"Kalbim sende",
"Sen benim huzurumsun",
"Gülüşün yeter",
"Yanında zaman duruyor",
"En güzel tesadüf sensin"
];

function note(){
 document.getElementById("noteText").innerText=
 notes[Math.floor(Math.random()*notes.length)];
}

/* ===== OYUN ===== */

let score=0;
function startGame(){
 const area=document.getElementById("game");
 area.innerHTML="";
 score=0;
 document.getElementById("score").innerText=0;

 const int=setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.innerText="❤️";
  h.style.left=Math.random()*90+"%";
  h.style.top="-20px";
  h.onclick=()=>{
   score++;
   document.getElementById("score").innerText=score;
   h.remove();
  };
  area.appendChild(h);

  let y=0;
  const fall=setInterval(()=>{
   y+=4;
   h.style.top=y+"px";
   if(y>320){ clearInterval(fall); h.remove();}
  },30);

 },600);

 setTimeout(()=>clearInterval(int),15000);
}

/* ===== HİKAYE OYUNU ===== */

const story=[
"Gece bir mesaj geldi...",
"Kalbim daha hızlı atmaya başladı",
"Çünkü o sendin",
"Ve hikaye burada başladı ❤️"
];

let s=0;
function nextStory(){
 document.getElementById("storyText").innerText=story[s];
 s++;
 if(s>=story.length) s=0;
}
