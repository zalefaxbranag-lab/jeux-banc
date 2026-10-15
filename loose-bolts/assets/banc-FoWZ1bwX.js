var e=`Loose Bolts`,t=3e4,n=`banc_testeur`,r=`banc_src`,i=`banc_derniere_session`;function a(e,t){try{return t===void 0?localStorage.getItem(e):(localStorage.setItem(e,t),t)}catch{return null}}function o(){let e=new Uint8Array(4);try{crypto.getRandomValues(e)}catch{for(let t=0;t<4;t++)e[t]=Math.random()*256|0}return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var s=a(n)||a(n,o()),c=new URLSearchParams(location.search).get(`src`),l=c?a(r,c.slice(0,40)):a(r)||``,u={v:1,t:s,j:e,d:Math.floor(Date.now()/1e3),a:Math.floor(Date.now()/1e3),n:1,k:0,s:0,src:l,ia:null,f:0};function d(){return window.__phaserGame||null}function f(){let e=d();if(!e||!e.scene)return!1;try{return[`Play`,`Win`].some(t=>e.scene.isActive(t)&&e.scene.isPaused(t))}catch{return!1}}function p(){try{let e=window.__game&&window.__game.snapshot&&window.__game.snapshot();if(e&&e.level>=1)return e.level}catch{}return 0}var m=0;setInterval(()=>{if(document.visibilityState===`hidden`||f())return;m++;let e=window.__session;u.s=e&&typeof e.seconds==`number`?e.seconds:m,u.n=Math.max(u.n,p()),a(i,JSON.stringify(u))},1e3);var h=null;document.addEventListener(`pointerdown`,e=>{e.target&&e.target.closest&&e.target.closest(`#banc-ui`)||(u.k++,u.a=Math.floor(Date.now()/1e3),u.n=Math.max(u.n,p()),clearTimeout(h),h=setTimeout(()=>_(`dernier-tap`),1e4))},{capture:!0,passive:!0});function g(e){return u.n=Math.max(u.n,p()),{testeur:u.t,jeu:u.j,debut:new Date(u.d*1e3).toISOString(),derniereActivite:new Date(u.a*1e3).toISOString(),niveau:u.n,taps:u.k,secondesActives:u.s,src:u.src,ia:u.ia,fini:u.f,raison:e}}function _(e){g(e),a(i,JSON.stringify(u))}function v(){let e=JSON.stringify(u);return btoa(unescape(encodeURIComponent(e))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}_(`debut`),setInterval(()=>_(`tick`),t),window.addEventListener(`pagehide`,()=>_(`fermeture`)),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&_(`cache`)});var y=`
#banc-ui{position:fixed;inset:0;z-index:2147483000;pointer-events:none;font-family:system-ui,-apple-system,sans-serif}
#banc-ui *{box-sizing:border-box}
#banc-btn{pointer-events:auto;position:absolute;top:calc(8px + env(safe-area-inset-top));right:8px;background:rgba(0,0,0,.55);color:#fff;border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:8px 14px;font-size:14px;font-weight:600}
#banc-panel{pointer-events:auto;display:none;position:absolute;inset:0;background:rgba(10,12,20,.94);color:#f2f2f2;padding:28px 20px;overflow:auto}
#banc-panel h2{margin:0 0 14px;font-size:22px}
#banc-panel p{font-size:16px;line-height:1.4;margin:0 0 14px}
#banc-panel .row{display:flex;gap:10px;flex-wrap:wrap;margin:10px 0 18px}
#banc-panel button{font-size:17px;padding:12px 18px;border-radius:10px;border:0;background:#3b82f6;color:#fff;font-weight:600}
#banc-panel button.sec{background:#374151}
#banc-code{font:600 15px/1.35 ui-monospace,Menlo,monospace;word-break:break-all;background:#111827;border:1px solid #334155;border-radius:10px;padding:12px;user-select:all;-webkit-user-select:all}
#banc-ok{color:#86efac;font-size:14px;min-height:18px}
`,b=`
<button id="banc-btn" type="button">J'ai fini</button>
<div id="banc-panel">
  <div id="banc-q">
    <h2>Merci d'avoir testé !</h2>
    <p>Une question : est-ce que ça sent le jeu fait par une IA ?</p>
    <div class="row">
      <button type="button" data-ia="1">Oui</button>
      <button type="button" data-ia="0">Non</button>
      <button type="button" class="sec" data-ia="">Je sais pas</button>
    </div>
    <p><button type="button" class="sec" id="banc-retour">Continuer à jouer</button></p>
  </div>
  <div id="banc-r" style="display:none">
    <h2>Ton code de session</h2>
    <p>Copie-le et envoie-le à Clément (WhatsApp, SMS, peu importe).</p>
    <div id="banc-code"></div>
    <div class="row">
      <button type="button" id="banc-copier">Copier</button>
      <button type="button" id="banc-partager" style="display:none">Envoyer</button>
      <button type="button" class="sec" id="banc-fermer">Fermer</button>
    </div>
    <div id="banc-ok"></div>
  </div>
</div>`;function x(){let t=document.createElement(`style`);t.textContent=y,document.head.appendChild(t);let n=document.createElement(`div`);n.id=`banc-ui`,n.innerHTML=b,document.body.appendChild(n);let r=n.querySelector(`#banc-panel`),i=n.querySelector(`#banc-q`),a=n.querySelector(`#banc-r`),o=n.querySelector(`#banc-code`),s=n.querySelector(`#banc-ok`),c=n.querySelector(`#banc-partager`);navigator.share&&(c.style.display=``),n.querySelector(`#banc-btn`).addEventListener(`click`,()=>{r.style.display=`block`,i.style.display=``,a.style.display=`none`}),n.querySelector(`#banc-retour`).addEventListener(`click`,()=>{r.style.display=`none`});for(let e of i.querySelectorAll(`[data-ia]`))e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-ia`);u.ia=t===``?null:Number(t),u.f=1,_(`fini`),o.textContent=v(),i.style.display=`none`,a.style.display=``,s.textContent=``});n.querySelector(`#banc-copier`).addEventListener(`click`,async()=>{let e=v();o.textContent=e;try{await navigator.clipboard.writeText(e),s.textContent=`Copié. Colle-le dans un message à Clément.`}catch{s.textContent=`Sélectionne le code ci-dessus et copie-le à la main.`}}),c.addEventListener(`click`,async()=>{try{await navigator.share({title:`Code de session `+e,text:v()}),s.textContent=`Envoyé.`}catch{}}),n.querySelector(`#banc-fermer`).addEventListener(`click`,()=>{r.style.display=`none`})}document.body?x():document.addEventListener(`DOMContentLoaded`,x),window.__banc={session:u,code:v,payload:g,envoyer:_},console.log(`[banc] balise active, testeur `+s+`, code court seulement`);