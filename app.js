import { data, uy } from "./data.js";
const box = document.querySelector(".bot");
const btn = document.querySelector("#hjkl");
const l = document.querySelector(".l");
const kard = document.querySelector(".kard");
const ddf = document.querySelector(".ddf");
data.map((item) => {
  kard.innerHTML += `  <div class="cards">
          <img src="${item.rasm}" alt=""/><p>${item.typ}</p>
        </div>`;
});
uy.map((item) => {
  ddf.innerHTML += ` <div class="cards">
          <i class="${item.rasm}"></i>
          <p>${item.typ}</p>
        </div>`;
});

btn.addEventListener("click", () => {
  box.classList.add("f");
});
l.addEventListener("click", () => {
  box.classList.remove("f");
});
