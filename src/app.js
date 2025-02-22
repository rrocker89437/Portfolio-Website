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
  <section class="projects">
    <div class="mkt-3dSlider py-6">
      <h1 class="mkt-3dSlider-title">My Projects</h1>
      <p class="mkt-3dSlider-description">2024 - 2025</p>
      <section id="slider">
        <input class="card-slider" type="radio" name="slider" id="s1">
        <input class="card-slider" type="radio" name="slider" id="s2">
        <input class="card-slider" type="radio" name="slider" id="s3" checked>
        <input class="card-slider" type="radio" name="slider" id="s4">
        <input class="card-slider"type="radio" name="slider" id="s5">

        <label for="s1" id="slide1" class="card-slider">
          <p>Chrome Extension</P>
          <img src="../public/ChromeExtension.png" alt="">
        </label>

        <label for="s2" id="slide2" class="card-slider"></label>
        <label for="s3" id="slide3" class="card-slider"></label>
        <label for="s4" id="slide4" class="card-slider"></label>
        <label for="s5" id="slide5" class="card-slider"></label>
      </section>
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
var cardSpaces = 25;
var middleDistance = 200;

var nxtVal = middleDistance;
middleDistance -= cardSpaces;
$(".next").each(function () {
  $(this).attr("elad-translate", nxtVal);
  $(this).css(
    "transform",
    "translateX(calc(-50% + " + nxtVal + "px)) rotateY(-70deg) skewY(9deg)"
  );
  nxtVal += cardSpaces;
});

$("#navright").click(function () {
  if ($(".active").next().hasClass("slideItems")) {
    $(".active")
      .removeClass("active")
      .addClass("prev")
      .attr("elad-translate", middleDistance)
      .next()
      .addClass("active")
      .removeClass("next")
      .removeAttr("style")
      .attr("elad-translate", "0");

    $(".next").each(function () {
      var thisTrans = parseInt($(this).attr("elad-translate")) - cardSpaces;
      $(this).css(
        "transform",
        "translateX(calc(-50% + " +
          thisTrans +
          "px)) rotateY(-70deg) skewY(9deg)"
      );
      $(this).attr("elad-translate", thisTrans);
      // nxtVal+=cardSpaces;
    });

    $(".prev").each(function () {
      var thisTrans = parseInt($(this).attr("elad-translate")) + cardSpaces;
      $(this).css(
        "transform",
        "translateX(calc(-50% - " +
          thisTrans +
          "px)) rotateY(70deg) skewY(-9deg)"
      );
      $(this).attr("elad-translate", thisTrans);
      // nxtVal+=cardSpaces;
    });
  }
});
$("#navleft").click(function () {
  if ($(".active").prev().hasClass("slideItems")) {
    $(".active")
      .removeClass("active")
      .addClass("next")
      .attr("elad-translate", middleDistance)
      .prev()
      .addClass("active")
      .removeClass("prev")
      .removeAttr("style")
      .attr("elad-translate", "0");

    $(".next").each(function () {
      var thisTrans = parseInt($(this).attr("elad-translate")) + cardSpaces;
      $(this).css(
        "transform",
        "translateX(calc(-50% + " +
          thisTrans +
          "px)) rotateY(-70deg) skewY(9deg)"
      );
      $(this).attr("elad-translate", thisTrans);
      // nxtVal+=cardSpaces;
    });

    $(".prev").each(function () {
      var thisTrans = parseInt($(this).attr("elad-translate")) - cardSpaces;
      $(this).css(
        "transform",
        "translateX(calc(-50% - " +
          thisTrans +
          "px)) rotateY(70deg) skewY(-9deg)"
      );
      $(this).attr("elad-translate", thisTrans);
      // nxtVal+=cardSpaces;
    });
  }
});
