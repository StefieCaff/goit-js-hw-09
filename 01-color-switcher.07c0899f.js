const t=document.querySelector('button[data-start="start"]'),e=document.querySelector('button[data-stop="stop"]'),o=document.querySelector("body");let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(r),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.07c0899f.js.map
