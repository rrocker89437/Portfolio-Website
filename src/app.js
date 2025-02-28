import "../scss/style.scss";

const tabData = {
  home: `
  <section id="home" class="home flex jc-c ai-c">
    <button id="toggle-btn" class="toggle-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#919191" d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
    </button>
    <h1>Google Clone</h1>
    <div class="google-search">
      <input placeholder="Search Google or type a URL" type="text" id="searchBox">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>
    <div class="search-btns flex gap">
      <button id="search-btn" class="search-btn">Search</button>
      <button id="search-btn" class="lucky-btn">I'm Feeling Lucky</button>
    </div>
  </section>
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
              <button class="btn" type="submit" disabled>Send</button>
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

// HomePAGE
document.addEventListener("DOMContentLoaded", function () {
  const searchbtn = document.getElementById("search-btn");
  const togglebtn = document.getElementById("toggle-btn");
  const home = document.getElementById("home");

  function searchGoogle() {
    let query = document.getElementById("searchBox").value;
    if (query) {
      // Open the Google search in a new tab
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  }

  function toggleDarkMode() {
    if (home) {
      home.classList.toggle("dark-mode");
    } else {
      console.error("Home element not found!");
    }
  }

  // Trigger search when the Enter key is pressed
  if (searchBox) {
    searchBox.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        console.log("Enter pressed");
        searchGoogle();
      }
    });
  } else {
    console.error("Search box not found!");
  }

  // Trigger search on button click
  if (searchbtn) {
    searchbtn.addEventListener("click", () => {
      console.log("Clicked");
      searchGoogle();
    });
  } else {
    console.error("Search button not found!");
  }

  // Toggle dark mode on button click
  if (togglebtn) {
    togglebtn.addEventListener("click", () => {
      toggleDarkMode();
    });
  } else {
    console.error("Toggle button not found!");
  }
});

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
