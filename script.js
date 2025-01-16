const bgchange = document.querySelector(".background-change");
      bgchange.addEventListener("scroll", () => {
        const scrollPercentage =
          bgchange.scrollTop / (bgchange.sqcrollHeight - bgchange.clientHeight);
        bgchange.style.backgroundColor = `hsl(${
          scrollPercentage * 50
        }, 100%, 50%)`;
      });