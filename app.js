/* ===== INTRO ===== */
function startSite(){
 document.getElementById("intro").classList.add("fade");
 show("home");
}

/* ===== HEART BG ===== */
for(let i=0;i<30;i++){
 const h=document.createElement("div");
 h.className="heart";
 h.innerText="💖";
 h.style.left=Math.random()*100+"vw";
 h.style.fontSize=(16+Math.random()*24)+"px";
 h.style.animationDuration=(4+Math.random()*6)+"s";
 document.getElementById("hearts").appendChild(h);
}

/* ===== MENU ===== */
function show(id){
 document.querySelectorAll(".page").forEach(x=>x.style.display="none");
 document.getElementById(id).style.display="block";
}

/* ===== MUSIC ===== */
function toggleMusic(){
 const m=document.getElementById("bgm");
 if(m.paused)m.play(); else m.pause();
}

/* ===== DAILY NOTE ===== */
const notes=[...Array(60)].map((_,i)=>"Seni seviyorum not "+(i+1));
document.getElementById("dailyNote").innerText=
notes[new Date().getDate()%notes.length];

/* ===== JAR ===== */
let j=0;
function kavanozNot(){
 jarUnlock();
 document.getElementById("jarText").innerText=notes[j++%notes.length];
}

/* ===== STORY ===== */
const S={
a:{t:"Sürpriz yap",c:[["Mesaj","b"],["Oyun","c"]]},
b:{t:"Mutlu oldu",c:[["Sarıl","d"]]},
c:{t:"Güldü",c:[["Öp","d"]]},
d:{t:"Mükemmel son",c:[["Başa dön","a"]]}
};
function storyGo(k){
 const s=S[k];
 storyUnlock();
 storyText.innerText=s.t;
 storyChoices.innerHTML="";
 s.c.forEach(x=>{
  const b=document.createElement("button");
  b.innerText=x[0];
  b.onclick=()=>storyGo(x[1]);
  storyChoices.appendChild(b);
 });
}
storyGo("a");

/* ===== HEART GAME ===== */
let score=0;
function startHeart(){
 gameUnlock();
 score=0;
 spawn();
}
function spawn(){
 const box=heartGame;
 const h=document.createElement("div");
 h.innerText="💖";
 h.style.position="absolute";
 h.style.left=Math.random()*260+"px";
 h.style.top=Math.random()*160+"px";
 h.onclick=()=>{score++;h.remove();};
 box.appendChild(h);
 setTimeout(()=>h.remove(),1200);
 setTimeout(spawn,700);
}

/* ===== COUNTER ===== */
const start=new Date("2025-02-14");
setInterval(()=>{
 const d=Math.floor((Date.now()-start)/86400000);
 counter.innerText=d+" gün";
},1000);

/* ===== ACHIEVEMENTS ===== */
const ach={jar:false,story:false,game:false};

function jarUnlock(){ach.jar=true;renderAch();}
function storyUnlock(){ach.story=true;renderAch();}
function gameUnlock(){ach.game=true;renderAch();}

function renderAch(){
 achList.innerHTML="";
 Object.entries(ach).forEach(([k,v])=>{
  const li=document.createElement("li");
  li.innerText=(v?"🏆 ":"⬜ ")+k;
  achList.appendChild(li);
 });
}

/* ===== SECRET ===== */
function checkPw(){
 if(pw.value==="kalbim"){
  secretText.innerText="Sürpriz mesaj gizli bölüm";
 }
}

/* ===== SW ===== */
if("serviceWorker" in navigator){
 navigator.serviceWorker.register("sw.js");
}
