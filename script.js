document.addEventListener('DOMContentLoaded', () => {
    showHome();
  });
  
  function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(c => {
      c.style.display = 'none';
      c.style.animation = 'none';
    });
  
    const target = document.getElementById(contentId);
    if (target) {
      target.style.display = 'block';
      setTimeout(() => {
        target.style.animation = '';
      }, 0);
    }
  }
  
  function showHome() {
    showContent('home');
  }
  
  function showAboutMe() {
    showContent('more-abt-me');
  }
  
  function showExperiences() {
    showContent('stuff-ive-done');
  }
  
  function showProjects() {
    showContent('projects');
  }
  
  function showPhotography() {
    showContent('photography');
  }
  
  function showContact() {
    showContent('connect');
  }
  
  // Modal logic
  const modals = {
    modal1: document.getElementById("modal-exchange"),
    modal2: document.getElementById("hedged"),
    modal3: document.getElementById("trading-bot")
  };
  
  const openBtns = {
    btn1: document.getElementById("openModal"),
    btn2: document.getElementById("openModal2"),
    btn3: document.getElementById("openModal3")
  };
  
  const closeBtns = {
    span1: document.getElementsByClassName("close1")[0],
    span2: document.getElementsByClassName("close2")[0],
    span3: document.getElementsByClassName("close3")[0]
  };
  
  openBtns.btn1.onclick = () => { modals.modal1.style.display = "block"; };
  openBtns.btn2.onclick = () => { modals.modal2.style.display = "block"; };
  openBtns.btn3.onclick = () => { modals.modal3.style.display = "block"; };
  
  closeBtns.span1.onclick = () => { modals.modal1.style.display = "none"; };
  closeBtns.span2.onclick = () => { modals.modal2.style.display = "none"; };
  closeBtns.span3.onclick = () => { modals.modal3.style.display = "none"; };
  
  window.onclick = function(event) {
    Object.values(modals).forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }  