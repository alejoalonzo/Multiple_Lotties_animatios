// var menuIcon = document.querySelector(".menu-icon");
// var menu = document.querySelector(".menu");

// menuIcon.addEventListener("click", function () {
//   if (menu.style.display === "flex") {
//     menu.style.display = "none";
//   } else {
//     menu.style.display = "flex";
//   }
// });

jQuery(document).ready(function ($) {
  $(".buttons.sf-menu .slide-out-widget-area-toggle a").click(function () {
    var label = $(this).find(".label");
    var header = $("#header-outer");
    let headerText = document.querySelector(
      '#header-outer[data-format="default"] .nectar-header-text-content'
    );
    let NavBarWhiteToDark = document.querySelector("#header-outer");

    if ($(this).hasClass("open")) {
      label.text("MENU");
      header.addClass("shadowInMegaMenu");
      // Show the scrollbar
      $("body").css({ "overflow-y": "hidden" });
      NavBarWhiteToDark.style.backgroundColor = "white";
      NavBarWhiteToDark.style.boxShadow = "0 45px 45px rgb(255 255 255)";
    } else {
      label.text("CLOSE");
      header.removeClass("shadowInMegaMenu");
      headerText.style.display = "none";
      NavBarWhiteToDark.style.backgroundColor = "black";
      NavBarWhiteToDark.style.boxShadow = "0 0px 0px transparent";
      NavBarWhiteToDark.style.setProperty(
        "box-shadow",
        "0 0px 0px transparent",
        "important"
      );

      // Reload the page when the user clicks the "CLOSE" button
      $(this).one("click", function (event) {
        event.preventDefault();
        location.reload();
      });
    }
  });
});

//-----------LINES MENU MOBILE-------------
document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector(".lineHamburgerMenu")) {
    var button = document.querySelector(".slide-out-widget-area-toggle a");
    for (var i = 0; i < 3; i++) {
      var span = document.createElement("div");
      span.className = "lineHamburgerMenu";
      button.appendChild(span);
    }
  }
});

jQuery(document).ready(function ($) {
  $(".buttons.sf-menu .slide-out-widget-area-toggle a").click(function () {
    if (window.innerWidth <= 767) {
      var label = $(this).find(".label");
      var header = $("#header-outer");
      let headerText = document.querySelector(
        '#header-outer[data-format="default"] .nectar-header-text-content'
      );
      let NavBarWhiteToDark = document.querySelector("#header-outer");

      if ($(this).hasClass("open")) {
        console.log("open");
      } else {
        console.log("close");
        // label.html("CLOSE");
      }
    }
  });
});
