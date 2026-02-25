const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  




const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});



const searchBtn = document.getElementById("search-btn");
const searchOverlay = document.getElementById("searchOverlay");

searchBtn.addEventListener("click", () => {
  searchOverlay.classList.add("active");
  document.body.classList.add("no-scroll");
});

// Close when clicking outside
searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    closeSearch();
  }
});

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
  }
});

function closeSearch() {
  searchOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}



const userBtn = document.getElementById("user-btn");
const userPanel = document.getElementById("userPanel");
const closeUser = document.getElementById("closeUser");

userBtn.addEventListener("click", () => {
  userPanel.classList.add("active");
  document.body.classList.add("no-scroll");
});

closeUser.addEventListener("click", closeUserPanel);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeUserPanel();
  }
});

function closeUserPanel() {
  userPanel.classList.remove("active");
  document.body.classList.remove("no-scroll");
}