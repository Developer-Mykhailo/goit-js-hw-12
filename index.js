import{a as w,S as L,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const g=15;async function q(t,r){const i="https://pixabay.com/api/",a={q:t,key:"50197903-e6a4a4a15a8ec114cd3a19b67",image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:g};try{return(await w.get(i,{params:a})).data}catch(e){throw new Error(`${e.message}`)}}let S=new L(".gallery a");const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),d=document.querySelector(".load-more");function E(t){const r=t.map(({webformatURL:i,largeImageURL:a,tags:e,likes:s,views:o,comments:b,downloads:v})=>`
      <li class="gallery-item">
        <a href="${a}" class="gallery-link">
          <img src="${i}" alt="${e}" />
        </a>
        <div class="image-descr">
          <div class="image-descr-box">
            <p class="image-subtitle">likes</p>
            <span class="image-subtitle-quantity">${s}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">views</p>
            <span class="image-subtitle-quantity">${o}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">comments</p>
            <span class="image-subtitle-quantity">${b}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">downloads</p>
            <span class="image-subtitle-quantity">${v}</span>
          </div>
        </div>
      </li>
        `).join("");p.insertAdjacentHTML("beforeend",r),S.refresh()}function x(){p.innerHTML=""}function P(){f.classList.remove("hidden")}function O(){f.classList.add("hidden")}function $(){d.classList.remove("hidden")}function M(){d.classList.add("hidden")}const n=document.querySelector(".form"),B=n.querySelector('input[name="search-text"]');let m,y=0,u="",c=1;n.addEventListener("submit",T);async function T(t){if(t.preventDefault(),u=B.value.trim(),!u){l.warning({message:"The input field is empty, try again.",position:"center"}),n.reset();return}x(),h()}async function h(){P();try{const t=await q(u,c);if(t.hits.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),n.reset();return}const r=t.hits;E(r),await new Promise(a=>setTimeout(a,2e3)),m=document.querySelector(".gallery-item"),y=m.getBoundingClientRect().height*2,$();let i=Math.ceil(t.totalHits/g);c===i&&(M(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.warning({message:"An error occurred. Please try again later.",position:"center"})}finally{O(),n.reset()}}d.addEventListener("click",async()=>{c++,await h(),A(0,y),console.log(c)});function A(t,r){window.scrollBy({top:r,left:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
