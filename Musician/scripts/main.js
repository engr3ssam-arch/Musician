//SLACK MENUE
$(document).ready(function(){
  
  $(".menu-icon").click(function(event){
    event.stopPropagation(); 
    $("nav").fadeToggle(); 
  });

  $(document).click(function(){
    $("nav").fadeOut();
  });

  $("nav").click(function(event){
    event.stopPropagation();
  });
});

//scroll to top

let topBtn = document.getElementById("topBtn");

let showHeight = 1000;   

window.onscroll = function () {
  if (window.scrollY >= showHeight) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};


topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
