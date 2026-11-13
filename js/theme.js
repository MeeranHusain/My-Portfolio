/* Light/dark theme toggle */
document.getElementById('theme').addEventListener('click',function(){
var r=document.documentElement,d=r.getAttribute('data-theme');
var sysDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
var cur=d||(sysDark?'dark':'light');
r.setAttribute('data-theme',cur==='dark'?'light':'dark');
});
