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
      const audio = new Audio("https://github.com/Xtar7/Stinger7-js/blob/main/music/%E4%B8%8D%E6%98%AF%E8%8B%B1%E9%9B%84%E4%B8%8D%E8%AF%BB%E4%B8%89%E5%9B%BD.mp3");
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
      img.src = "https://cdn.nlark.com/yuque/0/2025/jpeg/42910607/1748764379370-cfab7034-06dd-474c-97f3-75afa4fae6b9.jpeg?x-oss-process=image%2Fformat%2Cwebp";
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
  