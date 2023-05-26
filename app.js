const silders = document.createElement("input");
silders.type = "range";
silders.max = 50;
silders.value = 0;
document.body.appendChild(silders);
const div = document.createElement("div");
document.body.appendChild(div);
silders.oninput = test;
function test() {
  div.innerHTML = "";
  for (let i = 0; i < this.value; i++) {
    div.append("😂");
  }
}
const aa = prompt();
