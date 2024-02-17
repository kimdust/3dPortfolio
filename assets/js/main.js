// 풀페이지
$(document).ready(function () {
  if ($(window).width() > 768) {
    $("#fullPage").fullpage({
      autoScrolling: true,
    });
  }
});

// 인트로 3d
document.addEventListener("DOMContentLoaded", function () {
  gsap.set("#main3d img", { y: "-900%" }); // 초기 위치 설정

  gsap.utils.toArray("#main3d img").forEach((img, index) => {
    gsap.to(img, {
      y: 0,
      delay: index * 0.2,
      duration: 0.8,
      ease: "power2.out",
      onComplete: function () {
        gsap.to("#main3d", {
          y: 20,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      },
    });
  });
});

// 기타 3d
gsap.to("#about3d, .pp3d", {
  y: 20,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// 컨택 3d
var elements = document.querySelectorAll("#contect li");

function addHoverEffects() {
  elements.forEach(function (element) {
    var icon = element.querySelector("i");
    var img = element.querySelector("img");
    var anchor = element.querySelector("a");

    element.addEventListener("mouseenter", function () {
      gsap.to(element, { duration: 0.3, backgroundColor: "black" });
      gsap.to(icon, { duration: 0.1, opacity: 0 });
      gsap.to(anchor, { duration: 0.3, opacity: 1, color: "white" });
      gsap.to(img, { duration: 0.3, scale: 1 });
    });

    element.addEventListener("mouseleave", function () {
      gsap.to(element, { duration: 0.3, backgroundColor: "transparent" });
      gsap.to(icon, { duration: 0.3, color: "#222", opacity: 1 });
      gsap.to(anchor, { duration: 0.3, opacity: 0, color: "transparent" });
      gsap.to(img, { duration: 0.3, scale: 0 });
    });
  });
}

function removeHoverEffects() {
  elements.forEach(function (element) {
    var icon = element.querySelector("i");
    var img = element.querySelector("img");
    var anchor = element.querySelector("a");

    gsap.set(element, { backgroundColor: "transparent" });
    gsap.set(icon, { opacity: 0 });
    gsap.set(anchor, { opacity: 1, color: "#222" });
    gsap.set(img, { scale: 1 });

    element.removeEventListener("mouseenter", function () {});
    element.removeEventListener("mouseleave", function () {});
  });
}

function checkScreenWidth() {
  if (window.innerWidth > 768) {
    addHoverEffects();
  } else {
    removeHoverEffects();
  }
}

window.addEventListener("resize", checkScreenWidth);
checkScreenWidth();

// 마우스포인터 변경
var $mousePointer = $("#mouse_pointer"),
  $clickElements = $("a, label");

function moverCursor(e) {
  $mousePointer.css({
    left: e.pageX,
    top: e.pageY,
  });
}
$clickElements.mouseenter(function () {
  $mousePointer.addClass("hover");
});
$clickElements.mouseleave(function () {
  $mousePointer.removeClass("hover");
});

$(window).on("mousemove", moverCursor);

// 미디어쿼리 모바일 top버튼
function toggleScrollToTopButton() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.innerWidth <= 480 && window.scrollY >= 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", toggleScrollToTopButton);

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", scrollToTop);

toggleScrollToTopButton();
