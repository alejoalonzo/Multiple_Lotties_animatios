//alert("hello")
//let cambioColorToggle = document.querySelector(".accordionChangeColorOnClick");
/*let backGroundTitleToggle = document.querySelector(".toggleChangeColor");
  backGroundTitleToggle.addEventListener("click", () => {
    backGroundTitleToggle.style.color = "red!important";
 })*/
/*
function myFunction()
{
    document.getElementById('toggleChangeColor').setAttribute("class", "backgroudToggleOnClick");
}
*/

//Funciona a medias------------------------------------------------------
function myFunction() {
  let cambioColorToggle = document.querySelector(".toggle-heading");
  cambioColorToggle.addEventListener("click", () => {
    document
      .querySelector(".toggle-heading")
      .setAttribute("class", "backgroudToggleOnClick");
    console.log("clicked");
  });
}
//--------------------------------------------------------------------
function myFunction() {
  let cambioColorToggle = document.querySelector(".toggle-heading");
  cambioColorToggle.addEventListener("click", cambioColorToggle => {
    for (var i = 0; i < cambioColorToggle.length; i++) {
      cambioColorToggle[i].setAttribute("class", "backgroudToggleOnClick");
    }
    console.log(cambioColorToggle);
    console.log("clicked");
  });
}

/*
 .toggle:hover {
    border-bottom: 1px solid rgba(0,0,0,0.08);
    transition: border-color 0.15s ease;
    background-color: #CDDB23;
    transition: 0.5s all;
}*/
/*
jQuery(document).ready(function () {
  jQuery(".toggleChangeColor").bind("click", function () {
    myFunction();
  });
});
*/
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
//-------------------------------------------------------------------

function showAndHide() {
  var cambioColorToggle = document.querySelector(".toggle-heading");

  for (var i = 0; i < cambioColorToggle.length; i++) {
    cambioColorToggle[i].onclick = function () {
      //   var content = this.nextElementSibling;

      document.setAttribute("class", "backgroudToggleOnClick");
      /*
            if(content.style.maxHeight){//si esta abierto, para cerrar
                content.style.maxHeight = null;
            }else{
                content.style.maxHeight = content.scrollHeight + "px";//para abrirlo y que sea dinamico
            }*/
    };
  }
}
