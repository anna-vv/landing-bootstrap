$(document).ready(function() {
  $(window).scroll(function() {
    activeNav();

    function activeNav() {
      if ($(window).scrollTop() >= 30) {
        $("nav").addClass("nav-active");
        $("#nav-icon").removeClass("navbar-dark");
        $("#nav-icon").addClass("navbar-light");
      }

      if ($(window).scrollTop() <= 30) {
        $("nav").removeClass("nav-active");
        $("#nav-icon").addClass("navbar-dark");
        $("#nav-icon").removeClass("navbar-light");
      }
    }
  });

  smoothScrolling();
  toggleNavColor();

  function smoothScrolling() {
    const navLink = $(".smScroll");
    navLink.click(function(e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: $(this.hash).offset().top - $("nav").outerHeight()
        },
        1500
      );
    });
  }

  function toggleNavColor() {
    $("#nav-icon").click(function() {
      $("#navbarNav").toggleClass("navbarBG");
    });
  }
});
