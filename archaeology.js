(function () {
    // 🎉 彩带效果：使用 canvas-confetti 库
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
      text.style.padding = "1rem 2rem";
      text.style.border = "2px solid gold";
      text.style.borderRadius = "10px";
      text.style.zIndex = "5";
      document.body.appendChild(text);
  
      // 自动 5 秒后移除
      setTimeout(() => {
        text.remove();
      }, 5000);
    }
  
    // 🎯 彩蛋组合逻辑
    function showArchaeologyEasterEgg() {
      showConfetti();
      showMysteryText();
    }
  
    // 自动绑定 Konami 触发器
    new Konami(showArchaeologyEasterEgg);
  
    // 以后想在别处也手动调用
    window.showArchaeologyEasterEgg = showArchaeologyEasterEgg;
  })();  