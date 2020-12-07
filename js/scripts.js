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
const mobNav = document.querySelector(".navigation");
const mobDesk = document.querySelector(".nav-desktop");


function scrollFunction() {
  var top = window.scrollY;
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 || top >= 250)  {
    document.getElementById("nav-desktop").style.padding = "0px 0px";
    document.getElementById("nav-contact").style.fontSize = "1.1rem";
    document.getElementById("nav-logo").style.height = "3.5rem";
    document.getElementById("nav-top").style.height = "5rem";
    mobNav.classList.add('active');
    mobDesk.classList.add('active');
  } else {
    document.getElementById("nav-desktop").style.padding = "10px 60px";
    document.getElementById("nav-contact").style.fontSize = "1.2rem";
    document.getElementById("nav-logo").style.height = "4.4rem";
    document.getElementById("nav-top").style.height = "6.5rem";
    mobNav.classList.remove('active');
    mobDesk.classList.remove('active');
  }
  if ($(this).scrollTop() > 50) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
}

$('.testi9').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1

    },
    1650: {
      items: 1
    }
  }
})

/* $(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
}); */


/* const mobNav = document.querySelector(".navigation");

window.onscroll = function(){
  var top = window.scrollY;
  console.log(top);
  if (top >= 250) {
mobNav.classList.add('active')
  } else {
    mobNav.classList.remove('active');
  }
} */