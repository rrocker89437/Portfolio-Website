import "../scss/style.scss";

const tabData = {
  home: ` <h1> Welcome to the homepage</h1>
  `,

  about: `
  <div class="wrapper">
    <div class="mb-30 flex jc-c ai-c" style="gap: 25px;">
      <div class="about-content">
        <h1>Ramiah Rocker</h1>
        <h2>Frontend Developer</h2>
        <p>I am a self taught, creative 27 year old who is based in Seattle, WA looking to carve my way into the tech industry. </p>
      </div>
      <div class="about-img">
        <img width="350" height="350" src="../public/CartoonImg.webp" alt="Cartoonized image of person">
      </div>
    </div>
    <div class="cards flex jc-c ai-c">
      <div class="card">
        <h3>Seattle, WA</h3>
        <img src="../public/seattle-wa.webp" alt="Seattle space needle">
      </div>
      <div class="card">
        <h3>Love Cats</h3>
        <img src="../public/blackcat.jpg" alt="black cat looking to the right">
      </div>
      <div class="card flex flex-d-col jc-c">
        <h3>Fav Movie</h3>
        <img src="../public/interstellar.webp" alt="Sceen in Interstellar where Cooper is stuck traveling through multiple dimensions trying to find his daughter murph">
      </div>
      <div class="card">
        <h3>I love Comedy</h3>
        <img src="../public/stickfigure.png" alt="two stickfigure people facing eachother one drawn in bold, the other not in bold looking at eachother saying bro have you been working out">
      </div>
    </div>
  </div>
  `,

  projects: `
  <section class="projects flex jc-c ai-c">
    <div class="carousel-container">
          <div class="carousel">
              <div class="card">
                <h3>Chrome Extension App</h3>
                <div class="icons flex jc-c">
                  <img src="../public/html.png" alt="HTML">
                  <img src="../public/css3.png" alt="CSS">
                  <img src="../public/javascript.png" alt="JS">
                </div>
                <div class="card-img">
                  <img src="../public/ChromeExtension.png" alt="">
                </div>
                <div class="card-btns">
                  <a class="card-btn--1" href="#">Source Code</a>
                  <a class="card-btn--2" href="#">Contact</a>
                </div>
              </div>
              <div class="card">2</div>
              <div class="card">3</div>
              <div class="card">4</div>
              <div class="card">5</div>
              <div class="card">6</div>
              <div class="card">7</div>
              <div class="card">8</div>
              <div class="card">9</div>
          </div>
      </div>
  </section>
  `,

  contact: `<h1> Welcome to the contact page </h1>`,
};

//* HEADER LOGIC
//*------------------------------------------------------
//*------------------------------------------------------
//*------------------------------------------------------
//*------------------------------------------------------
//*------------------------------------------------------

//* Utility Functions
//*------------------------------------------------------

// Function to load content based on the active tab
function loadContent(contentKey) {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = tabData[contentKey] || `<p>Content not found.</p>`;
  if (contentKey === "projects") {
    initializeCarousel();
  }
}

// Function to initialize the carousel
function initializeCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) {
    console.error("Carousel element not found! Check your HTML.");
    return;
  }
  startCarousel(carousel);
}

//* Carousel Logic
//*------------------------------------------------------

function startCarousel(carousel) {
  let activeCard = null;
  let isPaused = false;
  let position = 0;
  const scrollSpeed = 0.3; // Adjusted for smoother scrolling
  const cardWidth = 400; // Card width (in px)
  const cardHeight = 600; // Card height (in px)
  const totalCards = carousel.children.length;

  // Duplicate cards to create an illusion of infinite scrolling
  function duplicateCards() {
    const cards = Array.from(carousel.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });
  }
  duplicateCards();

  // Animate carousel
  function animateCarousel() {
    if (!isPaused) {
      position -= scrollSpeed;
      if (Math.abs(position) >= cardWidth * totalCards) {
        position = 0; // Reset position to start of the carousel
      }
      carousel.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();

  // Card event listeners
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      isPaused = true;
    });
    card.addEventListener("mouseleave", () => {
      if (!activeCard) isPaused = false;
    });
    card.addEventListener("click", (e) => toggleCardActive(e, card));
  });

  // Toggle active card and pause scrolling
  function toggleCardActive(e, card) {
    if (activeCard) activeCard.classList.remove("active");
    if (activeCard !== card) {
      activeCard = card;
      activeCard.classList.add("active");
      activeCard.style.transform = "scale(1.1)"; // Scale card by 1.5x
      isPaused = true;
    } else {
      activeCard = null;
      isPaused = false;
    }
  }

  // Reset active card if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("card")) {
      resetActiveCard();
    }
  });

  function resetActiveCard() {
    if (activeCard) {
      activeCard.classList.remove("active");
      activeCard.style.transform = "scale(1)"; // Reset size
    }
    activeCard = null;
    isPaused = false;
  }
}

//* Tab Logic
//*------------------------------------------------------

const tabs = document.querySelectorAll(".tab");

function setActiveTab(tab) {
  tabs.forEach((t) => {
    t.classList.remove("tab-active");
    const barElement = t.querySelector(".bar");
    if (barElement) barElement.remove();
  });

  tab.classList.add("tab-active");
  const bar = document.createElement("div");
  bar.classList.add("bar");
  tab.appendChild(bar);

  const contentKey = tab.getAttribute("data-content");
  loadContent(contentKey);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveTab(tab);
  });
});

// Set "home" tab as active on page load
window.addEventListener("DOMContentLoaded", () => {
  const defaultTab = document.querySelector('.tab[data-content="home"]');
  setActiveTab(defaultTab);
});
