/* Interactive 3D tilt on profile photo */
(function(){
var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
/* ---------- interactive photo ---------- */
var ph=document.querySelector(".photo"),pw=ph&&ph.parentNode;
if(ph&&!reduce){
function rs(){["--rx","--ry","--gx","--gy","--sx","--sy","--px","--py"].forEach(function(k){ph.style.removeProperty(k)})}
pw.addEventListener("pointermove",function(e){var b=pw.getBoundingClientRect(),u=(e.clientX-b.left)/b.width,v=(e.clientY-b.top)/b.height,s=ph.style;
s.setProperty("--ry",(u-.5)*18+"deg");s.setProperty("--rx",(.5-v)*18+"deg");s.setProperty("--gx",u*100+"%");s.setProperty("--gy",v*100+"%");
s.setProperty("--sx",14+(.5-u)*22+"px");s.setProperty("--sy",14+(.5-v)*22+"px");s.setProperty("--px",(.5-u)*16+"px");s.setProperty("--py",(.5-v)*16+"px")});
pw.addEventListener("pointerleave",rs);pw.addEventListener("pointercancel",rs);
}
})();
