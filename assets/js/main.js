$(document).ready(function () {
  $("#fullPage").fullpage({
    autoScrolling: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.set("#main3d img", { y: "-500%" }); // 초기 위치 설정

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

gsap.to("#about3d, .pp3d", {
  y: 20,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

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
