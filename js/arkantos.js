
var urlFetch = window.location.href;
console.log("Current URL is :"+urlFetch);

window.onscroll = function() {
  shrinklogo()
};

function shrinklogo() {
  var logo = document.getElementById("logo")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    logo.style.width = '50%';
  } else {
    logo.style.width = '100%';
  }
}
