<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Sonsuz Sürpriz 💖</title>

<link rel="manifest" href="manifest.json">

<style>
body{
 margin:0;
 font-family:Arial;
 background:linear-gradient(135deg,#ff4e8a,#ff9ec4);
 color:white;
 overflow:hidden;
}

#hearts{
 position:fixed;
 inset:0;
 pointer-events:none;
}

.heart{
 position:absolute;
 animation:fall 6s linear infinite;
 opacity:.5;
}

@keyframes fall{
 from{transform:translateY(-10vh)}
 to{transform:translateY(110vh)}
}

#sidebar{
 position:fixed;
 left:0;
 top:0;
 bottom:0;
 width:210px;
 background:#00000055;
 padding:10px;
 overflow:auto;
}

button{
 width:100%;
 margin:6px 0;
 padding:10px;
 border:none;
 border-radius:8px;
 background:white;
 color:#ff4e8a;
 font-weight:bold;
 cursor:pointer;
}

#main{
 margin-left:220px;
 padding:20px;
 height:100vh;
 overflow:auto;
}

.card{
 background:white;
 color:#333;
 padding:18px;
 border-radius:14px;
 margin-bottom:15px;
}

.page{display:none}

#heartGame{
 position:relative;
 width:300px;
 height:200px;
 background:#ffe6ef;
 border-radius:12px;
 overflow:hidden;
}

#intro{
 position:fixed;
 inset:0;
 background:#000;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 z-index:5;
}

.fade{
 animation:fade 2s forwards;
}

@keyframes fade{
 to{opacity:0;visibility:hidden}
}
</style>
</head>

<body>

<div id="intro">
<h1>Seni Seviyorum 💗</h1>
<p>Bu site hep seninle</p>
<button onclick="startSite()">Giriş</button>
</div>

<div id="hearts"></div>

<div id="sidebar">
<button onclick="show('home')">Ana Sayfa</button>
<button onclick="show('daily')">Günün Notu</button>
<button onclick="show('jar')">Sevgi Kavanozu</button>
<button onclick="show('story')">Hikaye Oyunu</button>
<button onclick="show('game')">Kalp Oyunu</button>
<button onclick="show('timeline')">İlişki Sayaç</button>
<button onclick="show('ach')">Rozetler</button>
<button onclick="show('secret')">Gizli Bölüm 🔒</button>
<button onclick="toggleMusic()">Müzik Aç/Kapat</button>
</div>

<div id="main">

<div id="home" class="page">
<div class="card">
<h2>Hoşgeldin sevgilim</h2>
<p>Yanında olamasam da buradayım.</p>
</div>
</div>

<div id="daily" class="page">
<div class="card">
<h2>Bugünün Mesajı</h2>
<p id="dailyNote"></p>
</div>
</div>

<div id="jar" class="page">
<div class="card">
<h2>Kavanoz</h2>
<p id="jarText">Tıkla</p>
<button onclick="kavanozNot()">Not Çek</button>
</div>
</div>

<div id="story" class="page">
<div class="card">
<h2>Mini Hikaye</h2>
<div id="storyText"></div>
<div id="storyChoices"></div>
</div>
</div>

<div id="game" class="page">
<div class="card">
<h2>Kalp Yakala</h2>
<div id="heartGame"></div>
<button onclick="startHeart()">Başlat</button>
</div>
</div>

<div id="timeline" class="page">
<div class="card">
<h2>Tanışalı</h2>
<p id="counter"></p>
</div>
</div>

<div id="ach" class="page">
<div class="card">
<h2>Rozetler</h2>
<ul id="achList"></ul>
</div>
</div>

<div id="secret" class="page">
<div class="card">
<h2>Şifre Gir</h2>
<input id="pw">
<button onclick="checkPw()">Aç</button>
<p id="secretText"></p>
</div>
</div>

</div>

<audio id="bgm" loop>
<source src="music.mp3">
</audio>

<script src="app.js"></script>
</body>
</html>