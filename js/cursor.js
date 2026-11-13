/* Custom neon cursor */
(function(){
var root=document.documentElement;
/* ---------- custom cursor ---------- */
if(matchMedia("(hover:hover) and (pointer:fine)").matches){
var d=document.createElement("div"),r=document.createElement("div");d.className="cd";r.className="cr";document.body.append(d,r);root.classList.add("cur");
var x=-100,y=-100,rx=-100,ry=-100,sc=1,ts=1;
addEventListener("pointermove",function(e){x=e.clientX;y=e.clientY;d.style.opacity=r.style.opacity=1;
var h=e.target.closest&&e.target.closest("a,button,.photo,.proj,.certs li");ts=h?1.9:1;r.classList.toggle("hov",!!h)},{passive:true});
addEventListener("pointerdown",function(){ts=.6;var p=document.createElement("div");p.className="cx";p.style.left=x+"px";p.style.top=y+"px";document.body.append(p);p.addEventListener("animationend",function(){p.remove()})});
addEventListener("pointerup",function(){ts=r.classList.contains("hov")?1.9:1});
root.addEventListener("mouseleave",function(){d.style.opacity=r.style.opacity=0});
(function cl(){requestAnimationFrame(cl);rx+=(x-rx)*.18;ry+=(y-ry)*.18;sc+=(ts-sc)*.2;
d.style.transform="translate3d("+x+"px,"+y+"px,0)";r.style.transform="translate3d("+rx+"px,"+ry+"px,0) scale("+sc+")"})();
}
})();
