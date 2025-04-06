export function initTabs() {
    const tabs = document.querySelectorAll('.tabs button');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
  
        tab.classList.add('active');
        contents[index].classList.add('active');
      });
    });
  }
  