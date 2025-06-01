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
  
    // 🎵 播放神秘音效
    function playMysterySound() {
      const audio = new Audio("https://cdn.pixabay.com/audio/2021/11/03/audio_0e80d66d07.mp3");
      audio.play();
    }
  
    // 🌈 页面配色
    function changeColors() {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#0f0";
    }
  
    // 🖼️ 中央图片/文字彩蛋
    function showMysteryImage() {
      const img = document.createElement("img");
      img.src = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Golden_mask_of_Tutankhamun.jpg";
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
      changeColors();
      showConfetti();
      playMysterySound();
      showMysteryImage();
    }
  
    // ✅ 自动绑定 Konami 触发器
    new Konami(showArchaeologyEasterEgg);
  
    // 👇 如果以后想在别处也手动调用
    window.showArchaeologyEasterEgg = showArchaeologyEasterEgg;
  })();
  