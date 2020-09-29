let iframe = document.getElementById("iframe");
let code = document.getElementById("code");
code.addEventListener("input", (e) => {
  let iDoc = iframe.contentDocument;
  iDoc.body.innerHTML = e.target.value;
});
