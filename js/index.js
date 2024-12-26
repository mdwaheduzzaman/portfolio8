// * Variables
let header = document.querySelector(".header");
let page_links = document.querySelectorAll(".nav a");
let skill_progress = document.querySelector(".about .skill-progress");
let skills_obj = [
  {
    img: "./image/figma.svg",
    name: "figma",
    percent: 100,
  },
  {
    img: "./image/adobe-xd.svg",
    name: "adobe XD",
    percent: 100,
  },
  {
    img: "./image/photoshop.svg",
    name: "adobe photoshop",
    percent: 85,
  },
  {
    img: "./image/illustrator.svg",
    name: "adobe illustrator",
    percent: 60,
  },
  {
    img: "./image/adobe-premiere.svg",
    name: "adobe premiere",
    percent: 70,
  },
];
let filtering_btns = document.querySelectorAll(".filtering-btns li");
let portfolio_cards = document.querySelectorAll(".portfolio-card .card");
let select_services = document.querySelector(".contact .select-services");
let arrow_up = document.querySelector(".arrow-up");
// * Scripts

window.addEventListener("scroll", () => {
  // 80 ==== 80px
  if (window.scrollY > 80) {
    header.classList.add("scrolling");
    arrow_up.classList.add("show");
  } else {
    header.classList.remove("scrolling");
    arrow_up.classList.remove("show");
  }
});

skills_obj.forEach((skill) => {
  const skill_dom = document.createElement("div");
  skill_dom.className =
    "skill d-flex flex-column justify-content-center align-items-center gap-3";
  const progress = document.createElement("div");
  progress.className =
    "progress d-flex justify-content-center align-items-center position-relative rounded-circle";
  progress.style.background = `conic-gradient(
    rgb(217 217 217 / 20%) 0% ${100 - skill.percent}%,
    var(--txt-primary) 0% 100%
  )`;
  const skill_img = document.createElement("img");
  skill_img.src = skill.img;
  skill_img.alt = skill.name;
  progress.appendChild(skill_img);
  const percent = document.createElement("span");
  percent.className = "percent";
  const percent_txt = document.createTextNode(`${skill.percent}%`);
  percent.appendChild(percent_txt);
  const skill_name = document.createElement("span");
  skill_name.className = "txt text-capitalize fw-bold";
  const skill_name_txt = document.createTextNode(skill.name);
  skill_name.appendChild(skill_name_txt);

  skill_dom.appendChild(progress);
  skill_dom.appendChild(percent);
  skill_dom.appendChild(skill_name);

  skill_progress.appendChild(skill_dom);
});

filtering_btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filtering_btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
    const filter = this.getAttribute("data-filter");
    portfolio_cards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-filter") === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

select_services.addEventListener("click", function () {
  this.classList.toggle("open");
});

page_links.forEach((link) => {
  link.addEventListener("click", function () {
    page_links.forEach((link) => {
      if (this.textContent !== link.textContent) {
        link.classList.remove("active");
      } else {
        link.classList.add("active");
      }
    });
    this.classList.add("active");
  });
});

arrow_up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
