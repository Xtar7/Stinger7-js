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

  // 🎵 播放音效（本地或在线）
  function playMysterySound() {
    const audio = new Audio("https://cdn.jsdelivr.net/gh/Xtar7/Stinger7-js@main/media/不是英雄不读三国.mp3"); // 本地音频路径
    audio.play();
  }

  // 🌟 彩蛋展示：文字 + 图像
  function showMysteryContent() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    container.style.padding = "1.5rem 2rem";
    container.style.border = "2px solid gold";
    container.style.borderRadius = "10px";
    container.style.zIndex = "9999";
    container.style.textAlign = "center";
    container.style.fontFamily = "serif";
    container.style.color = "gold";

    // 📝 第一行静态文字
    const line1 = document.createElement("div");
    line1.innerText = "我好像听见了天行健的回响\n你听见了吗？";
    line1.style.fontSize = "1.8rem";
    container.appendChild(line1);

    // 📝 第二行打字文字
    const line2 = document.createElement("div");
    line2.style.marginTop = "1rem";
    line2.style.fontSize = "1.2rem";
    container.appendChild(line2);

    // 🖼️ 旋转图片
    const img = document.createElement("img");
    img.src = "https://cdn.jsdelivr.net/gh/Xtar7/Stinger7-js@main/media/oi.gif"; // 本地图片路径
    img.style.width = "100px";
    img.style.marginTop = "1rem";
    img.style.animation = "spin 3s linear infinite";
    container.appendChild(img);

    // 插入页面
    document.body.appendChild(container);

    // 打字机动画
    const message = "哇，你居然触发了这个彩蛋~很不错哦";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < message.length) {
        line2.innerText += message[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    // 自动清除
    setTimeout(() => {
      container.remove();
    }, 30000);
  }

  // 🧩 CSS 动画样式注入
  function injectSpinStyle() {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // 🎯 主函数：组合所有效果
  function showArchaeologyEasterEgg() {
    injectSpinStyle();
    showConfetti();
    playMysterySound();
    showMysteryContent();
  }

  // 🔓 Konami Code 触发
  new Konami(showArchaeologyEasterEgg);
  window.showArchaeologyEasterEgg = showArchaeologyEasterEgg;
})();