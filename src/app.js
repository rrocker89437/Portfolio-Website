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
  <section class="projects flex">
    <div class="row pad carousel hide-on-small-only">
      <a href="#one!" class="g-card carousel-item">
        <img alt="Kelly" src="https://d125fmws0bore1.cloudfront.net/assets/pages/ndhub/student-kelly@1x-26d7fa87c4776210d14b90323b9a24a7bc06001d147a465bfbbdf6d424e60563.jpg" id="IMG_2" />
        <h4>Kelly</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </a>
      <a href="#two!" class="g-card carousel-item">
        <img alt="Kelly" src="https://d125fmws0bore1.cloudfront.net/assets/pages/ndhub/student-kelly@1x-26d7fa87c4776210d14b90323b9a24a7bc06001d147a465bfbbdf6d424e60563.jpg" id="IMG_2" />
        <h4>Kelly</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </a>
      <a href="#three!" class="g-card carousel-item">
        <img alt="Kelly" src="https://d125fmws0bore1.cloudfront.net/assets/pages/ndhub/student-kelly@1x-26d7fa87c4776210d14b90323b9a24a7bc06001d147a465bfbbdf6d424e60563.jpg" id="IMG_2" />
        <h4>Kelly</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </a>
    </div>

    <div class="row pad hide-on-med-and-up">
      <div class="col s12 m4 g-card">
        <img alt="Kelly" src="https://d125fmws0bore1.cloudfront.net/assets/pages/ndhub/student-kelly@1x-26d7fa87c4776210d14b90323b9a24a7bc06001d147a465bfbbdf6d424e60563.jpg" id="IMG_2" />
        <h4>Kelly</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div class="col s12 m4 g-card">
        <img alt="Kelly" src="https://d125fmws0bore1.cloudfront.net/assets/pages/ndhub/student-kelly@1x-26d7fa87c4776210d14b90323b9a24a7bc06001d147a465bfbbdf6d424e60563.jpg" id="IMG_2" />
        <h4>Kelly</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div class="col s12 m4 g-card">
        <img alt="Kelly" src="https://d125fmws0bore1.cloudfront.net/assets/pages/ndhub/student-kelly@1x-26d7fa87c4776210d14b90323b9a24a7bc06001d147a465bfbbdf6d424e60563.jpg" id="IMG_2" />
        <h4>Kelly</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
  </section>
  `,

  contact: `<h1> Welcome to the contact page </h1>`,
};

// HEADER LOGIC
const tabs = document.querySelectorAll(".tab");

// Function to load content based on the active tab
function loadContent(contentKey) {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = tabData[contentKey] || `<p>Content not found.</p>`;
}

// Function to set the active tab
function setActiveTab(tab) {
  if (!tab) return; // Add a safety check to ensure the tab exists

  // Remove the 'tab-active' class and the '.bar' element from all tabs
  tabs.forEach((t) => {
    t.classList.remove("tab-active");
    const barElement = t.querySelector(".bar");
    if (barElement) barElement.remove();
  });

  // Add 'tab-active' class to the clicked tab
  tab.classList.add("tab-active");

  // Create and append a new bar element to the clicked tab
  const bar = document.createElement("div");
  bar.classList.add("bar");
  tab.appendChild(bar);

  // Load the corresponding content
  const contentKey = tab.getAttribute("data-content");
  loadContent(contentKey);
}

// Add event listeners to all tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    setActiveTab(tab);
  });
});

// Set "home" tab as active on page load
window.addEventListener("DOMContentLoaded", () => {
  const defaultTab = document.querySelector('.tab[data-content="home"]');
  setActiveTab(defaultTab); // Ensure we call setActiveTab for the default tab
});

// Project PAGE LOGIC
document.addEventListener("DOMContentLoaded", function () {
  var carousels = document.querySelectorAll(".carousel");

  carousels.forEach(function (carousel) {
    M.Carousel.init(carousel, {
      padding: 800,
      dist: -200,
    });
  });
});
