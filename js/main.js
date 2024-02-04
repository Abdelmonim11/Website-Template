// showing setting box section
let settingBox = document.querySelector(".setting-box");
document.querySelector(".setting-box .gear-icon").onclick = () => {
  settingBox.classList.toggle("show");
};
// switch color option
let colorList = document.querySelectorAll(".colors-list li");
if (window.localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--primary-color",
    window.localStorage.getItem("color")
  );
  removeActive();
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

colorList.forEach((color) => {
  color.addEventListener("click", (e) => {
    handleActiveStatus(e);
    document.documentElement.style.setProperty(
      "--primary-color",
      e.target.dataset.color
    );
    window.localStorage.setItem("color", e.target.dataset.color);
    document
      .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
      .classList.add("active");
  });
});
// remove active class from all
function removeActive() {
  colorList.forEach((color) => {
    color.classList.remove("active");
  });
}
// auto random background option
let randomBg = document.querySelectorAll(".setting-option .bg-options span");
randomBg.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActiveStatus(e);
  });
});

// services content animating
let services = document.querySelector(".services");
let servicesBox = document.querySelector(".services .content");
window.onscroll = () => {
  if (window.scrollY >= services.offsetTop - 200) {
    servicesBox.classList.add("services-animation");
  } else {
    servicesBox.classList.remove("services-animation");
  }
};

// bullet click function
const bullets = document.querySelectorAll(".nav-bullets .bullet");
const links = document.querySelectorAll(".landing-section .links a");
function scrollSectionsMovment(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      // for (a) element to don't make his default event
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollSectionsMovment(bullets);
scrollSectionsMovment(links);

// Bullets show option
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletsOptios = document.querySelectorAll(
  ".setting-option .bullets-options span"
);

if (localStorage.getItem("bullets_option")) {
  bulletsContainer.style.display = localStorage.getItem("bullets_option");
  bulletsOptios.forEach((option) => {
    option.classList.remove("active");
  });
  if (localStorage.getItem("bullets_option") == "block") {
    document.querySelector(".bullets-options .on").classList.add("active");
  } else {
    document.querySelector(".bullets-options .off").classList.add("active");
  }
}

bulletsOptios.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActiveStatus(e);
    if (e.target.classList.contains("on")) {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets_option", "none");
    }
  });
});

// handle active status
function handleActiveStatus(element) {
  element.target.parentElement.querySelectorAll(".active").forEach((el) => {
    el.classList.remove("active");
  });

  element.target.classList.add("active");
}

// Reset Options Button
document.querySelector(".reset-options").onclick = () => {
  localStorage.clear();
  window.location.reload();
};

// navbar menu for small devices
const navLinks = document.querySelector(".links");

document.querySelector(".toggle-menu").onclick = () => {
  navLinks.classList.toggle("show");
  document.querySelector(".toggle-menu").classList.toggle("active");
};

// colse the menu when press on any place on the screen
document.addEventListener("click", (e) => {
  
  if (e.target.classList.contains("fa-bars") == false) {
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      document.querySelector(".toggle-menu").classList.toggle("active");
    }
  }
});
