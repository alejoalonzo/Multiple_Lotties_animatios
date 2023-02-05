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
