const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();

/*
  IMPORTANT:
  Replace these two URLs with the actual live websites.

  Example:
  tintalab: "https://your-tintalab-site.pages.dev",
  tarawork: "https://your-tarawork-site.pages.dev"
*/
const projectLinks = {
  tintalab: "#",
  tarawork: "#"
};

document.querySelectorAll("[data-project]").forEach((link) => {
  const key = link.dataset.project;
  const url = projectLinks[key];

  if (url && url !== "#") {
    link.href = url;
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert(`Add the live ${key === "tintalab" ? "TintaLab Print Hub" : "TaraWork"} website URL in script.js first.`);
    });
  }
});
