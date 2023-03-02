// Create a function to display the loader
function showLoader() {
  // Create a div for the loader
  let loader = document.createElement("div");
  loader.setAttribute("id", "loader");

  // Add styles for the loader
  loader.style.background = "rgba(0,0,0,0.5)";
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.right = "0";
  loader.style.bottom = "0";
  loader.style.display = "flex";
  loader.style.alignItems = "center";
  loader.style.justifyContent = "center";

  // Create an element for the loading animation
  let spinner = document.createElement("div");
  spinner.setAttribute("class", "spinner");

  // Add styles for the loading animation
  spinner.style.border = "16px solid #f3f3f3";
  spinner.style.borderTop = "16px solid #3498db";
  spinner.style.borderRadius = "50%";
  spinner.style.width = "120px";
  spinner.style.height = "120px";
  spinner.style.animation = "spin 2s linear infinite";

  // Add the spinner to the loader
  loader.appendChild(spinner);

  // Add the loader to the document
  var page = document.querySelector("#page-id-878");
  page.appendChild(loader);
}

// Call the showLoader function
showLoader();

// Hide the loader after the page and all its resources have finished loading
window.addEventListener("load", function () {
  let loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Add the animation keyframes
let style = document.createElement("style");
style.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  `;
document.head.appendChild(style);

jQuery(document).ready(function ($) {
  $(".buttons.sf-menu .slide-out-widget-area-toggle a").click(function () {
    var label = $(this).find(".label");
    var header = $("#header-outer");
    if ($(this).hasClass("open")) {
      label.text("MENU");
      header.addClass("shadowInMegaMenu");
    } else {
      label.text("CLOSE");
      header.removeClass("shadowInMegaMenu");
    }
  });
});

/*Change label MENU>CLOSE--*/
jQuery(document).ready(function ($) {
  $(".buttons.sf-menu .slide-out-widget-area-toggle a").click(function () {
    var label = $(this).find(".label");
    if ($(this).hasClass("open")) {
      label.text("MENU");
    } else {
      label.text("CLOSE");
    }
  });
});

function detectOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    i;

  for (i = 0; i < macosPlatforms.length; i++) {
    if (platform === macosPlatforms[i]) {
      // Apply Mac-specific styles
      document.body.style.backgroundColor = "#F0F0F0";
      return "Mac OS";
    }
  }

  for (i = 0; i < windowsPlatforms.length; i++) {
    if (platform === windowsPlatforms[i]) {
      // Apply Windows-specific styles
      document.body.style.backgroundColor = "#C0C0C0";
      return "Windows";
    }
  }

  // Platform was not detected, apply default styles
  document.body.style.backgroundColor = "#FFFFFF";
  return "unknown";
}

// Call the function on page load
detectOS();

function detectOS() {
  var userAgent = window.navigator.userAgent;

  if (userAgent.indexOf("Mac OS X") !== -1) {
    // Apply Mac-specific styles
    document.body.style.backgroundColor = "#F0F0F0";
    return "Mac OS";
  } else if (userAgent.indexOf("Windows") !== -1) {
    // Apply Windows-specific styles
    document.body.style.backgroundColor = "#C0C0C0";
    return "Windows";
  } else {
    // Apply default styles
    document.body.style.backgroundColor = "#FFFFFF";
    return "unknown";
  }
}

// Call the function on page load
detectOS();

var userAgent = window.navigator.userAgent;
var highLighter = document.querySelector(".highLighter");
var highLighter2 = document.querySelector(".highLighterBlack");

if (highLighter) {
  if (userAgent.indexOf("Windows") !== -1) {
    highLighter.style.top = "0.1em";
  }
}
if (highLighter2) {
  if (userAgent.indexOf("Windows") !== -1) {
    highLighter2.style.top = "0.1em";
  }
}
