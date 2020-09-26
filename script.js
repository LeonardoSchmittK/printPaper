let paper = window.document.querySelector(".paper");
window.document.addEventListener("load", makeLines());

function makeLines() {
  let l = 1;
  for (l; l <= 20; ++l) {
    let line = window.document.createElement("div");
    line.setAttribute("class", "line");
    paper.appendChild(line);
  }
}
