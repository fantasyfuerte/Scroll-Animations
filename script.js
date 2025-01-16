const bgchange = document.querySelector(".background-change");

for (let i = 0; i < 15; i++) {
  bgchange.innerHTML += `<p>Scroll down</p>`;
}

bgchange.addEventListener("scroll", () => {
  const scrollPercentage =
    bgchange.scrollTop / (bgchange.scrollHeight - bgchange.clientHeight);
  bgchange.style.backgroundColor = `hsl(${scrollPercentage * 50}, 100%, 50%)`;
});
