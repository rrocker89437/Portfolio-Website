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
        <h3>Loves Cats</h3>
        <img src="../public/blackcat.jpg" alt="black cat looking to the right">
      </div>
      <div class="card flex flex-d-col jc-c">
        <h3>Fav Movie</h3>
        <img src="../public/interstellar.webp" alt="Sceen in Interstellar where Cooper is stuck traveling through multiple dimensions trying to find his daughter murph">
      </div>
      <div class="card">
        <h3>Funny</h3>
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
                  <a class="card-btn--1" target="_blank" href="https://chrome-extension-xi-ten.vercel.app/">Live Site</a>
                  <a class="card-btn--2" target="_blank" href="https://github.com/rrocker89437/Chrome-Extension">Source Code</a>
                </div>
              </div>

              <div class="card">
                <h3>Password Generator</h3>
                <div class="icons flex jc-c">
                  <img src="../public/html.png" alt="HTML">
                  <img src="../public/css3.png" alt="CSS">
                  <img src="../public/javascript.png" alt="JS">
                </div>
                <div class="card-img">
                  <img class="password-img" src="../public/password-generator-app.png" alt="">
                </div>
                <div class="card-btns">
                  <a class="card-btn--1" target="_blank" href="https://password-generator-orpin-zeta.vercel.app/">Live Site</a>
                  <a class="card-btn--2" target="_blank" href="https://github.com/rrocker89437/Password-Generator">Source Code</a>
                </div>
              </div>

              <div class="card">
                <h3>Blackjack Game</h3>
                <div class="icons flex jc-c">
                  <img src="../public/html.png" alt="HTML">
                  <img src="../public/css3.png" alt="CSS">
                  <img src="../public/javascript.png" alt="JS">
                </div>
                <div class="card-img">
                  <img class="blackjack-img" src="../public/blackjack-game.png" alt="">
                </div>
                <div class="card-btns">
                  <a class="card-btn--1" target="_blank" href="https://scrimba-blackjack-game.vercel.app/">Live Site</a>
                  <a class="card-btn--2" target="_blank" href="https://github.com/rrocker89437/Scrimba-Blackjack-game">Source Code</a>
                </div>
              </div>

              <div class="card">
                <h3>Fylo Storage Component</h3>
                <div class="icons flex jc-c">
                  <img src="../public/html.png" alt="HTML">
                  <img src="../public/sass.png" alt="SCSS">
                  <img src="../public/javascript.png" alt="JS">
                </div>
                <div class="card-img">
                  <img src="../public/fylo-data-storage-component.png" alt="">
                </div>
                <div class="card-btns">
                  <a class="card-btn--1" target="_blank" href="https://fem-fylo-data-storage-component-six.vercel.app/">Live Site</a>
                  <a class="card-btn--2" target="_blank" href="https://github.com/rrocker89437/FEM-Fylo-Data-Storage-Component">Source Code</a>
                </div>
              </div>

              <div class="card">
                <h3>Bento Grid</h3>
                <div class="icons flex jc-c">
                  <img src="../public/html.png" alt="HTML">
                  <img src="../public/sass.png" alt="SCSS">
                  <img src="../public/javascript.png" alt="JS">
                </div>
                <div class="card-img">
                  <img class="bento-img" src="../public/bento-grid.png" alt="">
                </div>
                <div class="card-btns">
                  <a class="card-btn--1" target="_blank" href="https://frontend-mentor-bento-grid-html-scss.vercel.app/">Live Site</a>
                  <a class="card-btn--2" target="_blank" href="https://github.com/rrocker89437/Frontend-Mentor-Bento-Grid-Html-Scss">Source Code</a>
                </div>
              </div>

              <div class="card">
                <h3>Testimonials Grid</h3>
                <div class="icons flex jc-c">
                  <img src="../public/html.png" alt="HTML">
                  <img src="../public/sass.png" alt="SCSS">
                  <img src="../public/javascript.png" alt="JS">
                </div>
                <div class="card-img">
                  <img src="../public/testimonials-grid.png" alt="">
                </div>
                <div class="card-btns">
                  <a class="card-btn--1" target="_blank" href="https://fem-testimonials-grid-teal.vercel.app/">Live Site</a>
                  <a class="card-btn--2" target="_blank" href="https://github.com/rrocker89437/FEM-Testimonials-Grid">Source Code</a>
                </div>
              </div>

              <div class="card">7</div>

              <div class="card">8</div>

              <div class="card">9</div>
          </div>
      </div>
  </section>
  `,

  contact: `
  <div class="grid">
    <section class="contact">
      <div class="flex jc-c ai-c">
        <form class="custom-form">
          <div class="form-container">
            <h1>Contact Me</h1>
            <p>I’d love to hear from you! Please fill out the form below.</p>

            <p class="required-msg">* Required fields</p>

            <div class="form-group">
              <label for="name">Name <span class="required">*</span></label>
              <input type="text" id="name" placeholder="John Doe" required>
            </div>

            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input type="email" id="email" placeholder="J.doe@email.com" required>
            </div>

            <div class="form-group">
              <label for="message">Message <span class="required">*</span></label>
              <textarea id="message" placeholder="Type your message..." required></textarea>
            </div>

            <div class="form-actions">
              <button class="btn" type="submit" disabled>Submit</button>
              <button class="btn btn-reset" type="reset" disabled>Reset</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
  `,
};

// Runs once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeMenu(); // Setup menu toggle functionality
  initializeTabs(); // Setup tab functionality
  loadContent("home"); // Load home tab by default
});

// Initializes the menu toggle button and its interactions.
function initializeMenu() {
  const toggleBtn = document.getElementById("controls toggleBtn");
  const menuToggle = document.getElementById("menuToggle");
  const menuLinks = document.querySelectorAll("#menuToggle a");

  if (!toggleBtn || !menuToggle) return;

  menuToggle.style.display = "none";

  toggleBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    menuToggle.style.display =
      menuToggle.style.display === "grid" ? "none" : "grid";
  });

  document.addEventListener("click", (event) => {
    if (
      !toggleBtn.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menuToggle.style.display = "none";
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      loadContent(link.getAttribute("data-content"));
      menuToggle.style.display = "none";
    });
  });
}

// Loads the content dynamically based on the selected tab.
// @param {string} contentKey - The key corresponding to tabData.
function loadContent(contentKey) {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;

  mainContent.innerHTML = tabData[contentKey] || `<p>Content not found.</p>`;

  if (contentKey === "projects") {
    initializeCarousel();
  } else if (contentKey === "contact") {
    initializeFormValidation();
  }
}

// Initializes tab functionality, adding click events to switch content.
function initializeTabs() {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveTab(tab);
    });
  });

  const defaultTab = document.querySelector('.tab[data-content="home"]');
  if (defaultTab) setActiveTab(defaultTab);
}

// Sets the active tab and updates the content.
// @param {Element} tab - The clicked tab element.
function setActiveTab(tab) {
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.remove("tab-active");
    const bar = t.querySelector(".bar");
    if (bar) bar.remove();
  });

  tab.classList.add("tab-active");
  const bar = document.createElement("div");
  bar.classList.add("bar");
  tab.appendChild(bar);

  loadContent(tab.getAttribute("data-content"));
}

// Initializes the automatic scrolling carousel.
function initializeCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return console.error("Carousel element not found!");

  let position = 0;
  const scrollSpeed = 1.8;
  const cardWidth = 400;
  const totalCards = carousel.children.length;
  let isPaused = false;

  // Duplicate cards for seamless infinite scrolling
  Array.from(carousel.children).forEach((card) => {
    carousel.appendChild(card.cloneNode(true));
  });

  function animateCarousel() {
    if (!isPaused) {
      position -= scrollSpeed;
      if (Math.abs(position) >= cardWidth * totalCards) {
        position = 0;
      }
      carousel.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => (isPaused = true));
    card.addEventListener("mouseleave", () => (isPaused = false));
    card.addEventListener("click", () => toggleCardActive(card));
  });
}

// Toggles the active state of a clicked carousel card.
// @param {Element} card - The clicked card element.

function toggleCardActive(card) {
  document
    .querySelectorAll(".card")
    .forEach((c) => c.classList.remove("active"));
  card.classList.toggle("active");
}

// Initializes form validation on the contact page.
function initializeFormValidation() {
  const form = document.querySelector(".custom-form");
  if (!form) return;

  const inputs = form.querySelectorAll("input[required], textarea[required]");
  const submitBtn = form.querySelector('button[type="submit"]');
  const resetBtn = form.querySelector('button[type="reset"]');
  const termsCheckbox = document.getElementById("terms");
  const requiredMsg = document.querySelector(".required-msg");

  function checkFormValidity() {
    const allFilled = [...inputs].every((input) => input.value.trim() !== "");
    // const termsChecked = termsCheckbox.checked;

    submitBtn.disabled = !allFilled; //&& termsChecked
    resetBtn.disabled = !allFilled;
    requiredMsg.style.display = allFilled ? "none" : "block";
  }

  inputs.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
    input.addEventListener("change", checkFormValidity);
  });

  termsCheckbox.addEventListener("change", checkFormValidity);

  form.addEventListener("reset", () => setTimeout(checkFormValidity, 0));
  checkFormValidity();
}
