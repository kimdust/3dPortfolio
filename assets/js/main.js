// 풀페이지
$(document).ready(function () {
  $("#fullPage").fullpage({
    autoScrolling: true,
  });
});

// 인트로 3d
document.addEventListener("DOMContentLoaded", function () {
  gsap.set("#main3d img", { y: "-900%" }); // 초기 위치 설정

  gsap.utils.toArray("#main3d img").forEach((img, index) => {
    gsap.to(img, {
      y: 0,
      delay: index * 0.2, // 이미지마다 0.5초씩 지연
      duration: 0.8,
      ease: "power2.out", // 원하는 이징 함수 적용
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

elements.forEach(function (element) {
  var icon = element.querySelector("i");
  var img = element.querySelector("img");
  var anchor = element.querySelector("a");

  element.addEventListener("mouseenter", function () {
    gsap.to(element, { duration: 0.3, backgroundColor: "black" });
    gsap.to(icon, { duration: 0.1, opacity: 0 });
    gsap.to(anchor, { duration: 0.3, opacity: 1, color: "white" });
    gsap.to(img, { duration: 0.3, scale: 1 }); // Fade in image
  });

  element.addEventListener("mouseleave", function () {
    gsap.to(element, { duration: 0.3, backgroundColor: "transparent" });
    gsap.to(icon, { duration: 0.3, color: "#222", opacity: 1 });
    gsap.to(anchor, { duration: 0.3, opacity: 0, color: "transparent" });
    gsap.to(img, { duration: 0.3, scale: 0 }); // Fade out image
  });
});

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
