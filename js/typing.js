/* Hero SQL typing animation */
(function(){var v=document.getElementById("qv"),r=document.getElementById("qr");if(!v||!r)return;
var W=["Python Django Developer","Full Stack Developer","PHP Developer","Software Developer"];
if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var i=0,n=0,del=false;
function set(s){v.textContent=s;r.textContent=s}
function tick(){var w=W[i];
if(!del){n++;set(w.slice(0,n));if(n===w.length){del=true;return setTimeout(tick,1800)}return setTimeout(tick,75)}
n--;set(w.slice(0,n));if(n===0){del=false;i=(i+1)%W.length;return setTimeout(tick,350)}setTimeout(tick,35)}
set("");setTimeout(tick,900)})();
