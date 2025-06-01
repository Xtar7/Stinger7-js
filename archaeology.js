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
  
    // 🎵 在线音效（示例：神秘短音效）
    function playMysterySound() {
      const audio = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_b34f4ef205.mp3");
      audio.play();
    }
  
    // 🖼️ 中央图片/文字彩蛋
    function showMysteryImage() {
      const img = document.createElement("img");
      img.src = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Golden_mask_of_Tutankhamun.jpg"; // 仍使用图坦卡蒙面具
      img.style.position = "fixed";
      img.style.top = "50%";
      img.style.left = "50%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.width = "300px";
      img.style.border = "5px solid gold";
      img.style.zIndex = "9999";
      document.body.appendChild(img);
  
      // 自动 5 秒后移除
      setTimeout(() => {
        img.remove();
      }, 5000);
    }
  
    // 🎯 彩蛋组合逻辑
    function showArchaeologyEasterEgg() {
      showConfetti();
      playMysterySound();
      showMysteryImage();
    }
  
    // ✅ 自动绑定 Konami 触发器
    new Konami(showArchaeologyEasterEgg);
  
    // 👇 如果以后想在别处也手动调用
    window.showArchaeologyEasterEgg = showArchaeologyEasterEgg;
  })();
  