$(window).on("load", function () {
  var nav_open_close = false;

  setTimeout(function () {
    $("#loading").hide();
  }, 2000);
  $(".dot_loading").css({ display: "none" });

  $(window).on("resize", function () {
    resizing();
  });

  $(".project_active").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top,
      },
      0
    );
    $("nav").css({ display: "none" });

    close_nav();
  });
  $(".contact_active").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#footer_social").offset().top,
      },
      0
    );
    $("nav").css({ display: "none" });

    close_nav();
  });
  $(".timeline_active").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#second_content").offset().top,
      },
      0
    );
    $("nav").css({ display: "none" });

    close_nav();
  });
  $("#send").on("click", function () {
    alert("Under development");
  });

  function close_nav() {
    let project_ani2 = gsap.timeline({
      defaults: { ease: Back.easeOut.config(1) },
    });
    let project_2 = gsap.timeline({
      defaults: { ease: Back.easeOut.config(1) },
    });
    $("html").css({ overflowY: "scroll" });
    nav_open_close = false;
    project_ani2.to(".addmargin", { x: "0%", duration: 0.5 });
    project_2.to("nav", { x: "0%", duration: 0.5 });
    setTimeout(function () {
      $(".navigation").removeClass("small");
      $(".navigation").css({ display: "none" });
      $("nav").css({ display: "none" });
      $("nav").removeAttr("style");
    }, 500);
  }

  $(".fa-bars").on("click", function () {
    let project_ani2 = gsap.timeline({
      defaults: { ease: Back.easeOut.config(1) },
    });
    let project_2 = gsap.timeline({
      defaults: { ease: Back.easeOut.config(1) },
    });
    if (nav_open_close == false) {
      nav_open_close = true;
      $(".navigation .about_active").addClass("active2");
      $(".navigation").addClass("small");
      $("html").css({ overflowY: "hidden" });
      $(".navigation").css({ display: "flex", position: "fixed" });
      project_ani2.to(".addmargin", { x: "-50%", duration: 0.5 });
      project_2.to("nav", { x: "-50%", duration: 0.5 });
    } else if (nav_open_close == true) {
      $("nav").css({ display: "none" });
      close_nav();
    }
  });
});
