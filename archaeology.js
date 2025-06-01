(function () {
    // 🎉 彩带效果
    function showConfetti() {
      if (typeof confetti === "function") {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
        });
      }
    }
  
    // 🖋️ 中央文字彩蛋
    function showMysteryText() {
      const text = document.createElement("div");
      text.innerText = "我好像听见了天行健的回响";
      text.style.position = "fixed";
      text.style.top = "50%";
      text.style.left = "50%";
      text.style.transform = "translate(-50%, -50%)";
      text.style.fontSize = "2rem";
      text.style.color = "gold";
      text.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // 背景遮罩可选
      text.style.padding = "1rem 2rem";
      text.style.border = "2px solid gold";
      text.style.borderRadius = "10px";
      text.style.zIndex = "9999"; // 确保在最上层
      document.body.appendChild(text);
  
      setTimeout(() => {
        text.remove();
      }, 5000);
    }
  
    // 组合
    function showArchaeologyEasterEgg() {
      showConfetti();
      showMysteryText();
    }
  
    new Konami(showArchaeologyEasterEgg);
    window.showArchaeologyEasterEgg = showArchaeologyEasterEgg;
  })();  