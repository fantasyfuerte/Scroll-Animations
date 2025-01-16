const bgchange = document.querySelector(".background-change");

bgchange.addEventListener("scroll", () => {
  const scrollPercentage =
    bgchange.scrollTop / (bgchange.scrollHeight - bgchange.clientHeight);
  bgchange.style.backgroundColor = `hsl(${scrollPercentage * 50}, 100%, 50%)`;
});

