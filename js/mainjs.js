$(window).on("load", function () {
  $windowWidth = $(this).width();
  var to_top = false;
  var show_hide = false;
  var scrollfunction = false;
  var animation_show = false;
  var append_script = false;
  let project_ani = gsap.timeline({ defaults: { ease: "power4.out" } });
  let loading_intro = gsap.timeline({ defaults: { ease: "power4.out" } });

  project_ani.to(".myname", { y: "0%", duration: 1.2, stagger: 0.2 });
  loading_intro.to("#loading", { y: "-100%", duration: 1.5 });

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
  function project_false() {
    if (animation_show == false) {
      project_animation();
      animation_show = true;
    }
  }
  function project_true() {
    if (animation_show == true) {
      project_animation();
      animation_show = false;
    }
  }
  function project_animation() {
    let project_ani = gsap.timeline({ defaults: { ease: "power4.out" } });
    project_ani.to(".myname_2", { y: "300%", duration: 0 });
    project_ani.to(".myname_2", { y: "0%", duration: 1.2, stagger: 0.2 });
  }

  $(window).on("scroll", function () {
    var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;

    if (scrollPercent >= 0 && scrollPercent <= 21) {
      $(".navigation").css("pointer-events", "auto");

      $(".accent_text").css("left", window.scrollY * 0.05 + "px");

      $(".navigation").removeClass("active_nav");
      $(".navigation .about_active").addClass("active2");
      $(".navigation .topit2").remove();
      to_top = false;
      setTimeout(function () {
        $(".navigation").removeClass("hide_nav");
      }, 0);
    }

    if (scrollPercent >= 1) {
      $(".navigation").css("display", "block");
      $(".navigation").addClass("active_nav");

      $(".navigation .about_active").addClass("active2");
      $(".navigation .contact_active").removeClass("active2");
      $(".navigation .project_active").removeClass("active2");
      $(".topit ").text("↑");
    }
    if (scrollPercent >= 11 && scrollPercent <= 90) {
      $(".navigation .project_active").addClass("active2");
      $(".navigation .about_active").removeClass("active2");
      $(".navigation .contact_active").removeClass("active2");
      show_hide = false;
    }
    if (scrollPercent >= 50 && to_top == false) {
      $(".navigation").append("<a class='topit2' href='#'></a>");
      $(".navigation .topit2").addClass("topit");
      to_top = true;
    }

    if (scrollPercent <= 10) {
      project_true();
    }
    if (scrollPercent >= 11 && scrollPercent <= 19) {
      $(".third_content").css("display", "block");
      $(".third_content h4").text("YEAR 2024");
      $(".third_content  h3 span").text("Mvp Onboarding");
      $(".third_content p span").text(
        "Introducing Mvp Onboarding: a web app designed to streamline the onboarding process. It sends email notifications to welcome new employees, automatically creates accounts for the company ERP, and offers user management features for assigning roles. Created using C#, ASP.NET, Microsoft SQL Server, React.js, and Tailwind."
      );
      $(".third_content a").text("");

      $(".third_content h2").text("</> DEVELOPED");

      project_false();
    } else if (scrollPercent <= 11) {
      $(".third_content").css("display", "none");
    } else if (scrollPercent >= 20 && scrollPercent <= 30) {
      $(".third_content h4").text("YEAR 2023");
      $(".third_content h3 span").text("Kasina Redesign");
      $(".third_content p span").text(
        "I revamped the company's current ERP system design using Adobe XD, giving it a simple and fresh new look."
      );
      $(".third_content h2").text("/ DESIGN");

      project_true();
    } else if (scrollPercent >= 31 && scrollPercent <= 40) {
      $(".third_content h4").text("YEAR 2022");
      $(".third_content h3 span").text("GawanKe");
      $(".third_content p span").text(
        "Introducing GawanKe: the web app I created for our thesis project, in partnership with PESO Santa Rita, Pampanga. Designed to assist blue-collar workers and the local community by offering home services. Built with HTML, CSS, JavaScript, Ajax, jQuery, PHP, and MariaDB, it's a comprehensive solution to fulfill community needs."
      );
      $(".third_content h2").text("</> DEVELOPED");

      $(".third_content a ").text("Gawanke.com →");
      $(".third_content a ").attr("href", "https://www.gawanke.com");
      $(".third_content a").attr("target", "_blank");
      project_false();
    } else if (scrollPercent >= 41 && scrollPercent <= 52) {
      $(".third_content h4").text("YEAR 2021");
      $(".third_content h3 span").text("Cemetery Map");
      $(".third_content p span").text(
        "Introducing Cemetery Map: your go-to offline map for locating graves in cemeteries! I developed this project during my third year of college for a major subject. The app, created using Visual Basic and MariaDB, makes finding specific grave locations a breeze."
      );
      $(".third_content h2").text("</> DEVELOPED");

      $(".third_content a ").text("Vide Demo →");
      $(".third_content a ").attr(
        "href",
        "https://www.youtube.com/watch?v=P2iKBnjwPfI"
      );
      $(".third_content a").attr("target", "_blank");
      project_true();
    } else if (scrollPercent >= 53 && scrollPercent <= 63) {
      $(".third_content").css("display", "block");
      $(".third_content h4").text("YEAR 2020");
      $(".third_content h3 span").text("Library");
      $(".third_content p span").text(
        "Introducing the Library Management System: your offline solution for efficiently managing library operations! Developed during my second year of college for a major subject, this app simplifies the process of encoding student book borrowings. Built using Python and MariaDB, with Tkinter for the user-friendly GUI."
      );
      $(".third_content a").text("Vide Demo →");
      $(".third_content a").attr(
        "href",
        "https://www.youtube.com/watch?v=KdU1_EWBJu0"
      );
      $(".third_content h2").text("</> DEVELOPED");
      $(".third_content a").attr("target", "_blank");
      project_false();
    } else if (scrollPercent >= 64 && scrollPercent <= 74) {
      $(".third_content h4").text("YEAR 2018");
      $(".third_content h3 span").text("100 IceCream");
      $(".third_content p span").text(
        "I set out to challenge myself by creating an ice cream website to improve my skills. Little did I know, while designing it with Photoshop, that Adobe XD would've made the process even smoother. But hey, every challenge is a chance to learn and grow, right? "
      );
      $(".third_content h2").text("/ DESIGN");
      $(".third_content a").text("View Design →");
      $(".third_content a").attr(
        "href",
        "https://drive.google.com/file/d/1GWCmUxPFw7cU1rb0v199EI6R3U6a6l2u/view?usp=sharing"
      );
      $(".third_content a").attr("target", "_blank");
      project_true();
    } else if (scrollPercent >= 75 && scrollPercent <= 86) {
      $(".third_content h4").text("YEAR 2018");
      $(".third_content h3 span").text("SalveoWorld");
      $(".third_content p span").text(
        "I took on the challenge of redesigning our company website to level up my skills. Using Photoshop, I crafted a fresh new look for our online presence."
      );
      $(".third_content h2").text("/ DESIGN");
      $(".third_content a").text("View Design →");
      $(".third_content a").attr(
        "href",
        "https://drive.google.com/file/d/1DQFCkZr5Yr2d9mWxYWvKxg_n7vfPSyZB/view?usp=sharing"
      );
      $(".third_content a").attr("target", "_blank");
      project_false();
    } else if (scrollPercent >= 87 && scrollPercent <= 94) {
      $(".navigation").css("pointer-events", "auto");
      $(".navigation").css("display", "block");
      setTimeout(function () {
        $(".navigation").removeClass("hide_nav");
      }, 0);
      show_hide = false;

      $(".third_content").css("display", "block");

      $(".third_content h4").text("YEAR 2018");
      $(".third_content h3 span").text("Shirt Design");
      $(".third_content p span").text(
        "T-shirt - Check out my freelance shirt designs! They're all about simplicity and elegance—no fuss, just premium vibes. While I haven't included designs from my previous company, these ones showcase my passion for clean and stylish aesthetics."
      );
      $(".third_content h2").text("/ DESIGN");
      $(".third_content a").text("View Design →");
      $(".third_content a").attr(
        "href",
        "https://drive.google.com/drive/folders/1C7ngLr-7JqR0bRHkspu5o7xPbjfwhsde?usp=sharing"
      );
      $(".third_content a").attr("target", "_blank");
      project_true();
    } else if (scrollPercent >= 90) {
      $(".accent_text_footer").css("left", window.scrollY * 0.05 + "px");
      $(".navigation .contact_active").addClass("active2");
      $(".navigation .about_active").removeClass("active2");
      $(".navigation .project_active").removeClass("active2");

      $(".third_content").css("display", "none");

      $(".navigation").addClass("hide_nav");
      $(".navigation").css("pointer-events", "none");
      if (show_hide == false) {
        setTimeout(function () {
          $(".navigation").css("display", "none");
        }, 1000);
        show_hide = true;
      }
      project_false();
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
const snippets = document.querySelectorAll(".snippet");

for (let i = 0; i < snippets.length; i++) {
  snippets[i].addEventListener("mouseleave", clearTooltip);
  snippets[i].addEventListener("blur", clearTooltip);
}

function showTooltip(el, msg) {
  el.setAttribute("class", "snippet tooltip");
  el.setAttribute("aria-label", msg);
}

function clearTooltip(e) {
  e.currentTarget.setAttribute("class", "snippet");
  e.currentTarget.removeAttribute("aria-label");
}

const clipboardSnippets = new ClipboardJS(".snippet", {
  text: (trigger) => trigger.getAttribute("data-title"),
});

clipboardSnippets.on("success", (e) => {
  e.clearSelection();
  showTooltip(e.trigger, "Copied!");
});

clipboardSnippets.on("error", (e) => {
  showTooltip(e.trigger, "Copy failed!");
});
