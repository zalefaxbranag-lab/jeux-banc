import{n as e,t}from"./index-CFluh4w-.js";var n=`Loose Bolts`,r=3e4,i=1e4,a=`banc_testeur`,o=`banc_src`,s=`banc_derniere_session`;function c(e,t){try{return t===void 0?localStorage.getItem(e):(localStorage.setItem(e,t),t)}catch{return null}}function l(){let e=new Uint8Array(4);try{crypto.getRandomValues(e)}catch{for(let t=0;t<4;t++)e[t]=Math.random()*256|0}return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}var u=c(a)||c(a,l()),d=new URLSearchParams(location.search).get(`src`),f=d?c(o,d.slice(0,40)):c(o)||``,p={v:1,t:u,j:n,d:Math.floor(Date.now()/1e3),a:Math.floor(Date.now()/1e3),n:1,k:0,s:0,src:f,ia:null,f:0,au:`none`,aur:0,aus:1};function m(){let n=t();p.au=e(),p.au===`running`&&(p.aur=1),p.aus=+!!n.user}function h(){return window.__phaserGame||null}function g(){let e=h();if(!e||!e.scene)return!1;try{return[`Play`,`Win`].some(t=>e.scene.isActive(t)&&e.scene.isPaused(t))}catch{return!1}}function _(){try{let e=window.__game&&window.__game.snapshot&&window.__game.snapshot();if(e&&e.level>=1)return e.level}catch{}return 0}var v=0;setInterval(()=>{if(document.visibilityState===`hidden`||g())return;v++,m();let e=window.__session;p.s=e&&typeof e.seconds==`number`?e.seconds:v,p.n=Math.max(p.n,_()),c(s,JSON.stringify(p))},1e3);var y=null;document.addEventListener(`pointerdown`,e=>{e.target&&e.target.closest&&e.target.closest(`#banc-ui`)||(p.k++,p.a=Math.floor(Date.now()/1e3),p.n=Math.max(p.n,_()),clearTimeout(y),y=setTimeout(()=>x(`dernier-tap`),i))},{capture:!0,passive:!0});function b(e){return p.n=Math.max(p.n,_()),m(),{testeur:p.t,jeu:p.j,debut:new Date(p.d*1e3).toISOString(),derniereActivite:new Date(p.a*1e3).toISOString(),niveau:p.n,taps:p.k,secondesActives:p.s,src:p.src,ia:p.ia,fini:p.f,audio:p.au,audioVuRunning:p.aur,sonBouton:p.aus,raison:e}}function x(e){b(e),c(s,JSON.stringify(p))}function S(){m();let e=JSON.stringify(p);return btoa(unescape(encodeURIComponent(e))).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}x(`debut`),setInterval(()=>x(`tick`),r),window.addEventListener(`pagehide`,()=>x(`fermeture`)),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&x(`cache`)});var C=`
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
#banc-son{pointer-events:none;position:absolute;top:calc(8px + env(safe-area-inset-top));left:8px;width:30px;height:30px;border-radius:999px;background:rgba(0,0,0,.55);border:1px solid rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;opacity:.9}
#banc-son svg{width:18px;height:18px}
#banc-son.ok{display:none}
#banc-toast{pointer-events:none;position:absolute;left:50%;top:calc(52px + env(safe-area-inset-top));transform:translateX(-50%);background:rgba(20,120,60,.92);color:#fff;border-radius:999px;padding:8px 16px;font-size:14px;font-weight:600;opacity:0;transition:opacity .25s}
#banc-toast.on{opacity:1}
`,w=`
<div id="banc-son" title="son pas encore activé"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z" fill="#fff"/><line x1="22" y1="9" x2="16" y2="15" stroke="#f87171"/><line x1="16" y1="9" x2="22" y2="15" stroke="#f87171"/></svg></div>
<div id="banc-toast">Son activé</div>
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
</div>`;function T(){let t=document.createElement(`style`);t.textContent=C,document.head.appendChild(t);let r=document.createElement(`div`);r.id=`banc-ui`,r.innerHTML=w,document.body.appendChild(r);let i=r.querySelector(`#banc-panel`),a=r.querySelector(`#banc-q`),o=r.querySelector(`#banc-r`),s=r.querySelector(`#banc-code`),c=r.querySelector(`#banc-ok`),l=r.querySelector(`#banc-partager`);navigator.share&&(l.style.display=``);let u=r.querySelector(`#banc-son`),d=r.querySelector(`#banc-toast`),f=!1;setInterval(()=>{let t=e(),n=t===`running`;u.classList.toggle(`ok`,n),u.title=`audio : `+t,n&&!f&&(f=!0,p.aur=1,d.classList.add(`on`),setTimeout(()=>d.classList.remove(`on`),1500))},250),r.querySelector(`#banc-btn`).addEventListener(`click`,()=>{i.style.display=`block`,a.style.display=``,o.style.display=`none`}),r.querySelector(`#banc-retour`).addEventListener(`click`,()=>{i.style.display=`none`});for(let e of a.querySelectorAll(`[data-ia]`))e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-ia`);p.ia=t===``?null:Number(t),p.f=1,x(`fini`),s.textContent=S(),a.style.display=`none`,o.style.display=``,c.textContent=``});r.querySelector(`#banc-copier`).addEventListener(`click`,async()=>{let e=S();s.textContent=e;try{await navigator.clipboard.writeText(e),c.textContent=`Copié. Colle-le dans un message à Clément.`}catch{c.textContent=`Sélectionne le code ci-dessus et copie-le à la main.`}}),l.addEventListener(`click`,async()=>{try{await navigator.share({title:`Code de session `+n,text:S()}),c.textContent=`Envoyé.`}catch{}}),r.querySelector(`#banc-fermer`).addEventListener(`click`,()=>{i.style.display=`none`})}document.body?T():document.addEventListener(`DOMContentLoaded`,T),window.__banc={session:p,code:S,payload:b,envoyer:x},console.log(`[banc] balise active, testeur `+u+`, code court seulement`);