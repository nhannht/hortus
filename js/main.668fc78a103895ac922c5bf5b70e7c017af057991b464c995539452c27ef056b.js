"use strict";(()=>{var l=document.getElementById("card-container"),s=document.querySelectorAll(".card"),c=0;function a(){s.forEach((t,e)=>{t.style.zIndex=e;let n=20*e;t.style.transform=`translateX(-50%)  translateX(${n}px) translateY(-50%) translateY(${n}px) `,t.addEventListener("mouseover",()=>{t.style.transform=`translateX(-50%) scaleX(1) translateX(${n+30}px) translateY(-50%) translateY(${n-30}px)`}),t.addEventListener("mouseout",()=>{t.style.transform=`translateX(-50%) scaleX(1)  translateX(${n}px) translateY(-50%) translateY(${n}px)`})})}function m(t){let e=Array.from(s);e.splice(e.indexOf(t),1),e.push(t),s=e,a()}function p(t){let e=Array.from(s);e.splice(e.indexOf(t),1),e.unshift(t),s=e,a()}a();s.forEach(t=>{let e=new Hammer(t);e.on("pan",n=>{t.style.transform=`translate(-50%,-50%) translate(${n.deltaX}px, ${n.deltaY}px) scale(${1-.1*c})`}),e.on("panend",n=>{t.style.zIndex==s.length-1?p(t):m(t)})});l.addEventListener("mousemove",function(t){s.forEach(e=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left,o=t.clientY-n.top;e.style.setProperty("--xPos",`${r}px`),e.style.setProperty("--yPos",`${o}px`)})});})();