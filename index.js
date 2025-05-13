import{a as w,S as q,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const g=15;async function S(t,r){const a="https://pixabay.com/api/",i={q:t,key:"50197903-e6a4a4a15a8ec114cd3a19b67",image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:g};try{return(await w.get(a,{params:i})).data}catch(e){throw new Error(`${e.message}`)}}let E=new q(".gallery a");const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),d=document.querySelector(".load-more");function x(t){const r=t.map(({webformatURL:a,largeImageURL:i,tags:e,likes:s,views:o,comments:v,downloads:L})=>`
      <li class="gallery-item">
        <a href="${i}" class="gallery-link">
          <img src="${a}" alt="${e}" />
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
            <span class="image-subtitle-quantity">${v}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">downloads</p>
            <span class="image-subtitle-quantity">${L}</span>
          </div>
        </div>
      </li>
        `).join("");p.insertAdjacentHTML("beforeend",r),E.refresh()}function P(){p.innerHTML=""}function O(){f.classList.remove("hidden")}function $(){f.classList.add("hidden")}function M(){d.classList.remove("hidden")}function y(){d.classList.add("hidden")}const n=document.querySelector(".form"),B=n.querySelector('input[name="search-text"]');let m,h=0,c="",u=1;n.addEventListener("submit",A);async function A(t){if(t.preventDefault(),c=B.value.trim().toLowerCase(),u=1,!c){l.warning({message:"The input field is empty, try again.",position:"center"}),n.reset();return}P(),b()}async function b(){O();try{const t=await S(c,u);if(t.hits.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),n.reset();return}const r=t.hits;x(r),m=document.querySelector(".gallery-item"),h=m.getBoundingClientRect().height*2,M();let a=Math.ceil(t.totalHits/g);u===a&&(y(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.warning({message:"An error occurred. Please try again later.",position:"center"})}finally{$(),n.reset()}}d.addEventListener("click",async()=>{u++,console.log(c),y(),await b(),T(0,h)});function T(t,r){window.scrollBy({top:r,left:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
