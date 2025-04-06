// ui.js
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("nav.tabs button, .menu-inferior button");
    const sections = document.querySelectorAll("section.tab-content");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
  
        sections.forEach(section => {
          section.classList.toggle("active", section.id === target);
        });
      });
    });
  });
  