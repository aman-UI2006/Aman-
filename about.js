// 1. Open project in new tab if card is clicked
function openProject(url) {
    window.open(url, '_blank');
  }
  
  // 2. Go back to profile page
  function goBack() {
    window.location.href = 'index.html';
  }
  
  // 3. Toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // 4. Clock update
  function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  
  // 5. Toggle description visibility
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleDesc");
    const desc = document.querySelector(".description");
  
    toggleBtn.addEventListener("click", () => {
      desc.style.display = desc.style.display === "none" ? "block" : "none";
    });
  
    // 6. Scroll to top functionality
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // 7. Highlight project on click
    document.querySelectorAll(".project-box").forEach(box => {
      box.addEventListener("click", () => {
        box.classList.toggle("highlight");
      });
    });
  });
  