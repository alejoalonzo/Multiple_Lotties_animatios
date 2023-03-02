var LIs = document.querySelectorAll(".subMenu");

LIs.forEach(function (li, i) {
  if (i === LIs.length - 1) {
    // Apply styles to the last list item
    li.style.borderBottom = "none";
  }
});

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
