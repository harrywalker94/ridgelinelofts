// Porfolio isotope and filter
$(window).on("load", function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("nav-desktop").style.padding = "0px 0px";
    document.getElementById("nav-contact").style.fontSize = "1.1rem";
    document.getElementById("nav-logo").style.height = "4.4rem";
    document.getElementById("nav-link").style.letterSpacing = "2px";
    document.getElementById("nav-top").style.height = "5rem";

  } else {
    document.getElementById("nav-desktop").style.padding = "10px 60px";
    document.getElementById("nav-contact").style.fontSize = "1.2rem";
    document.getElementById("nav-logo").style.height = "3.5rem";
    document.getElementById("nav-link").style.letterSpacing = "0px";
    document.getElementById("nav-top").style.height = "6.5rem";
  }
}

