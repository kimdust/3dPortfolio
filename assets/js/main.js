gsap.to("#main3d", {
  y: 20, // y축 방향으로 움직일 거리
  duration: 1, // 애니메이션의 지속시간
  repeat: -1, // 무한 반복
  yoyo: true, // 애니메이션을 왕복하도록 설정
  ease: "power1.inOut", // 애니메이션의 속도 조절
});
