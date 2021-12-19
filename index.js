function myShare() {
  let slp = document.querySelector(".shows").value;
  let a = document.querySelector("#shared");
  let twentyPer = (slp * 2) / 7;

  a.textContent = Math.floor(twentyPer);
  let b = document.querySelector("#scholar");
  b.textContent = slp - Math.round(twentyPer);
  if (slp === "") {
    alert("Please Enter A Number");
    document.querySelector("#shared").textContent = "Lorem, ipsum.";
    document.querySelector("#scholar").textContent = "Lorem, ipsum.";
  }
}
function reset() {
  document.querySelector(".shows").value = "";
  document.querySelector("#shared").textContent = "Lorem, ipsum.";
  document.querySelector("#scholar").textContent = "Lorem, ipsum.";
}
