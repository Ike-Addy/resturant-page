(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="https://static.vecteezy.com/system/resources/previews/029/320/139/non_2x/octoberfest-celebration-in-pub-free-photo.jpg",n.height="300",t.appendChild(n);const c=document.createElement("h1");c.textContent="Welcome To My Restaurant",t.appendChild(c);const o=document.createElement("p");o.textContent="Can't live without us!",t.appendChild(o),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.getElementById("home"),c=document.getElementById("menu"),o=document.getElementById("contact");n.classList.add("tab"),c.classList.add("tab"),o.classList.add("tab"),n.addEventListener("click",(()=>{t(),e()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="My Menu";const c=document.createElement("ul"),o=document.createElement("li");o.textContent="Falafel on Gauva";const d=document.createElement("li");d.textContent="Pho Ang Duong";const a=document.createElement("li");a.textContent="Banku and Tilapia",c.appendChild(o),c.appendChild(d),c.appendChild(a),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const c=document.createElement("input");c.type="text",c.placeholder="Enter your name",n.appendChild(c);const o=document.createElement("input");o.type="text",o.placeholder="Enter your address",n.appendChild(o);const d=document.createElement("input");d.type="tel",d.placeholder="Enter your phone number",n.appendChild(d),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();