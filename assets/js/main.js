$(document).ready(function () {
  $("#fullPage").fullpage({
    autoScrolling: true,
  });
});

gsap.to("#main3d", {
  y: 20,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
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
