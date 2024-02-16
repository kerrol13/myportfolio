$(window).on("load", function () {
  $windowWidth = $(this).width();
  var append_script = false;
  var to_top = false;
  var show_hide = false;
  var scrollfunction = false;
  var animation_show = false;
  let project_ani = gsap.timeline({ defaults: { ease: "power4.out" } });
  let loading_intro = gsap.timeline({ defaults: { ease: "power4.out" } });
  loading_intro.to("#loading", { y: "-100%", duration: 1.5 });

  project_animation();

  function project_animation() {
    project_ani.to(".myname_3", { y: "0%", duration: 1.2, stagger: 0.2 });
  }

  function project_animation2() {
    project_ani.to(".myname_4", { y: "0%", duration: 1.2, stagger: 0.2 });
  }
  function project_animation3() {
    project_ani.to(".myname_5", { y: "0%", duration: 1.2, stagger: 0.2 });
  }
  function project_animation5() {
    project_ani.to(".myname_7", { y: "0%", duration: 1.2, stagger: 0.2 });
  }
  function resizing() {
    if ($windowWidth <= 1000) {
      $('script[src="js/native.smooth.scroll.umd.js"]').remove();

      $(".third_content").removeClass("show");
      $(".navigation").css("display", "none");

      $(window).on("scroll", function () {
        var s = $(window).scrollTop(),
          d = $(document).height(),
          c = $(window).height();

        var scrollPercent = (s / (d - c)) * 100;
        var scrollPercent = (s / (d - c)) * 100;
        if (scrollPercent <= 2) {
          $(".navigation").css("display", "none");
        } else if (scrollPercent >= 2) {
          $(".navigation").css("display", "block");
        }
        if (scrollPercent <= 90) {
          $(".third_content").css("display", "none");
        }
      });
    }
    if ($windowWidth >= 1001) {
      if (append_script == false) {
        $("body").append(
          '<script type="text/javascript" src="js/native.smooth.scroll.umd.js"></script>'
        );
        append_script = true;
      }

      var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

      var scrollPercent = (s / (d - c)) * 100;
      var scrollPercent = (s / (d - c)) * 100;
      $(".navigation").css("display", "block");

      $(".third_content").addClass("show");

      if (scrollPercent >= 2) {
        $(".navigation").css("display", "block");
      }
      scrollfunction = false;
    }
  }
  $(window).on("scroll", function () {
    var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;

    if (scrollPercent >= 0 && scrollPercent <= 21) {
      $(".accent_text").css("left", window.scrollY * 0.05 + "px");

      $(".navigation").removeClass("active_nav");
      $(".navigation .about_active").addClass("active2");
      $(".navigation .topit2").remove();
      to_top = false;
      $(".navigation").css("display", "block");
      setTimeout(function () {
        $(".navigation").removeClass("hide_nav");
      }, 0);
    }
    if (scrollPercent >= 1) {
      $(".navigation").addClass("active_nav");
      $(".navigation .about_active").addClass("active2");
      $(".navigation .contact_active").removeClass("active2");
      $(".navigation .timeline_active").removeClass("active2");
      $(".topit ").text("↑");
    }
    if (scrollPercent >= 11 && scrollPercent <= 75) {
      $(".navigation .timeline_active").addClass("active2");
      $(".navigation .about_active").removeClass("active2");
      $(".navigation .contact_active").removeClass("active2");

      show_hide = false;
    }

    if (scrollPercent >= 10 && scrollPercent <= 30) {
      if (animation_show == false) {
        $(".second_content  h3 span").text("EDUCATION");
        project_animation2();
        animation_show = true;
      }
    }
    if (scrollPercent >= 30 && scrollPercent <= 55) {
      if (animation_show == true) {
        $(".about_third_content  h3 span").text("SKILLS");
        project_animation3();
        animation_show = false;
      }
    }
    if (scrollPercent >= 55 && scrollPercent <= 90) {
      if (animation_show == false) {
        $(".about_fourth_content  h3 span").text("CAREER");
        project_animation5();
        animation_show = true;
      }
    }

    if (scrollPercent >= 50 && to_top == false) {
      $(".navigation").append("<a class='topit2' href='#'></a>");
      $(".navigation .topit2").addClass("topit");
      to_top = true;
    } else if (scrollPercent >= 40 && scrollPercent <= 75) {
      $(".navigation").css("display", "block");
      setTimeout(function () {
        $(".navigation").removeClass("hide_nav");
      }, 0);
      show_hide = false;
    } else if (scrollPercent >= 60) {
      $(".accent_text_footer").css("left", window.scrollY * 0.05 + "px");
      $(".navigation .contact_active").addClass("active2");
      $(".navigation .about_active").removeClass("active2");
      $(".navigation .timeline_active").removeClass("active2");
      $(".navigation").addClass("hide_nav");
      if (show_hide == false) {
        setTimeout(function () {
          $(".navigation").css("display", "none");
        }, 1000);
        show_hide = true;
      }
    }
  });
  $("#message").click(function () {
    $("#message").css("height", "15vh");
  });
  $("#message").blur(function () {
    $("#message").css("height", "8vh");
  });
  $(".navigation .about_active").addClass("active2");

  resizing();
});
