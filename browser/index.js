var Ultratype=function(){"use strict";function e(e,t,r){e.setAttribute("aria-label",e.innerText),e.innerHTML='<span aria-hidden="true"></span>';const n=e.querySelector('[aria-hidden="true"]');t.forEach(e=>{" "===e&&(e="&nbsp;"),n.innerHTML+=`<span class="${r}">${e}</span>`});const a=e.querySelectorAll("."+r),i=Array.from(a).filter(e=>""!==e.innerText.replace(/\s/g,""));if(i.forEach((t,r)=>{const n=Number(e.getAttribute("data-delay")),a=Number(e.getAttribute("data-initial-delay"));let l=n;switch(e.getAttribute("data-stagger-mode")){case"every other":l=r%2==0?n:0;break;case"right":l=n*(i.length-r-1);break;case"center":const e=Math.floor(i.length/2);l=r===e?0:n*Math.abs(r-e);break;default:l=n*r}a&&(l+=a),t.style=`\n       display: inline-block;\n       --content: '${t.innerText}';\n       --delay: ${l}s;\n   `}),e.closest("[data-ultratype-group")){document.querySelectorAll("[data-ultratype-group").forEach(e=>{const t=Array.from(e.children);t.forEach((e,n)=>{const a=e.querySelector('[aria-hidden="true"]');if(a){const e=a.querySelectorAll("."+r);e.forEach((r,a)=>{0!==n&&(r.style.animationPlayState="paused"),a===e.length-1&&r.addEventListener("animationend",()=>{if(n<t.length-1){let e=n+1;Array.from(t[e].querySelector('[aria-hidden="true"').children).forEach(e=>{e.style.animationPlayState="running"})}})})}})})}}return{splitByWord:function(t){const r=t.innerText.split(" ");let n=[];r.map(e=>{n.push(e),n.push("&nbsp;")}),e(t,n.slice(0,-1),"word")},splitByLetter:function(t){const r=t.innerText.split("");e(t,r,"letter")}}}();
