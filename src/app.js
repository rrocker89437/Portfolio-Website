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
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Please fill out the form below.</p>

            <div class="form-group">
              <label for="name">Name *</label>
              <input type="text" id="name" placeholder="Enter your name" required>
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" placeholder="Enter your email" required>
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" placeholder="Type your message..." required></textarea>
            </div>

            <p class="required-msg">* Required fields</p>

            <div class="form-group checkbox-group">
              <input type="checkbox" id="terms" required>
              <label for="terms">I agree to the <a href="#">terms and conditions</a>.</label>
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

//* HEADER LOGIC
//*------------------------------------------------------
//*------------------------------------------------------
//*------------------------------------------------------
//*------------------------------------------------------
//*------------------------------------------------------

//* Menu Btn
//*------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("controls toggleBtn");
  const menuToggle = document.getElementById("menuToggle");
  const menuLinks = document.querySelectorAll("#menuToggle a");
  const mainContent = document.getElementById("main-content");

  // Ensure menu is hidden by default
  menuToggle.style.display = "none";

  // Toggle menu visibility
  toggleBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up
    menuToggle.style.display =
      menuToggle.style.display === "grid" ? "none" : "grid";
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !toggleBtn.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menuToggle.style.display = "none";
    }
  });

  // Function to load content dynamically
  function loadContent(contentKey) {
    mainContent.innerHTML = tabData[contentKey] || `<p>Content not found.</p>`;
    if (contentKey === "projects") {
      initializeCarousel();
    }
  }

  // Add event listeners to menu links
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const contentKey = link.getAttribute("data-content");
      loadContent(contentKey);

      // Hide the menu after selecting an option
      menuToggle.style.display = "none";
    });
  });
});

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
  const scrollSpeed = 1.8; // Adjusted for smoother scrolling
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

//* Contact Form
//*------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("main-content"); // Where content is inserted
  const tabs = document.querySelectorAll(".tab");

  // Function to load content dynamically
  function loadContent(contentKey) {
    mainContent.innerHTML = tabData[contentKey] || `<p>Content not found.</p>`;

    // Reinitialize form validation if "contact" tab is loaded
    if (contentKey === "contact") {
      initializeFormValidation();
    }
  }

  // Attach event listeners to tab links
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      const contentKey = tab.getAttribute("data-content");
      loadContent(contentKey);
    });
  });

  // Function to initialize form validation (runs when "contact" tab loads)
  function initializeFormValidation() {
    const form = document.querySelector(".custom-form");
    if (!form) return; // Prevents errors if form isn't found

    const inputs = form.querySelectorAll("input[required], textarea[required]");
    const submitBtn = form.querySelector('button[type="submit"]');
    const resetBtn = form.querySelector('button[type="reset"]');
    const termsCheckbox = document.getElementById("terms");
    const requiredMsg = document.querySelector(".required-msg");

    function checkFormValidity() {
      const allFilled = [...inputs].every((input) => input.value.trim() !== "");
      const termsChecked = termsCheckbox.checked;

      submitBtn.disabled = !(allFilled && termsChecked);
      resetBtn.disabled = !allFilled;
      requiredMsg.style.display = allFilled ? "none" : "block";
    }

    // Add event listeners for input changes
    inputs.forEach((input) => {
      input.addEventListener("input", checkFormValidity);
      input.addEventListener("change", checkFormValidity);
    });

    termsCheckbox.addEventListener("change", checkFormValidity);

    form.addEventListener("reset", function () {
      setTimeout(checkFormValidity, 0);
    });

    checkFormValidity(); // Run once when form loads
  }

  // Load "home" tab by default
  loadContent("home");
});
