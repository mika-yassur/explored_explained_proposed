const stackImages = document.querySelectorAll(".stack-image");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const triggerBase = window.innerHeight * 0.6;

  stackImages.forEach((img, index) => {
    const triggerPoint = triggerBase + index * window.innerHeight * 0.4;

    if (scrollY > triggerPoint) {
      img.style.top = "0";
      img.style.opacity = "1";
      img.style.zIndex = 2 + index;
    }
  });
});
