let readMore = document.getElementById("read-more");
let moreInfo = document.getElementById("more-info");
let readLess = document.getElementById("read-less");


function showInfo() {
  readMore.style.display = "none";
  moreInfo.style.display = "block";
  readLess.style.display = "block";
}

function lessInfo() {
  moreInfo.style.display = "none";
  readLess.style.display = "none";
  readMore.style.display = "block";
}

readMore.addEventListener("click", showInfo);
readLess.addEventListener("click", lessInfo);