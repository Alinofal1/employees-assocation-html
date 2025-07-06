const carData = [
  {
    title: "شركة بال سيرفس لصيانة ودهان المركبات",
    desc1: "لخدمة المقدمة: عمل صيانة للسيارة ومدة التقسيط 12 شهر",
    desc2: [
      "طوّل عمر سيارتك مع خدمات بال سيرفيس وقسط السعر على 12 شهر",
      "خدمات بال سيرفيس وقسط السعر على 12 شهر",
    ],
    imgSrc: "./assets/images/car.png",
  },
  {
    title: "شركة بال سيرفس لصيانة ودهان المركبات",
    desc1: "لخدمة المقدمة: عمل صيانة للسيارة ومدة التقسيط 12 شهر",
    desc2: [
      "طوّل عمر سيارتك مع خدمات بال سيرفيس وقسط السعر على 12 شهر",
      "خدمات بال سيرفيس وقسط السعر على 12 شهر",
    ],
    imgSrc: "./assets/images/car.png",
  },
  {
    title: "شركة بال سيرفس لصيانة ودهان المركبات",
    desc1: "لخدمة المقدمة: عمل صيانة للسيارة ومدة التقسيط 12 شهر",
    desc2: [
      "طوّل عمر سيارتك مع خدمات بال سيرفيس وقسط السعر على 12 شهر",
      "خدمات بال سيرفيس وقسط السعر على 12 شهر",
    ],
    imgSrc: "./assets/images/car.png",
  },
];

const carWrapper = document.getElementById("carSliderContainer");
const carSliderDots = document.getElementById("carSlider");
let activeIndex = 0;
let autoPlayInterval;

function createCards() {
  carData.forEach((item) => {
    const card = document.createElement("div");
    card.id = "carContent";
    card.style.height = "477px";
    card.style.flexShrink = "0";
    card.innerHTML = `
      <div id="carText">
        <div>
          <h2 class="carH2">${item.title}</h2>
          <p id="pal-service">${item.desc1}</p>
        </div>
        <div class="pal-service2">
          ${item.desc2.map((text) => `<p>${text}</p>`).join("")}
        </div>
      </div>
      <div id="image-wrapper">
        <div id="car-background"></div>
        <img src="${item.imgSrc}" alt="car" />
      </div>
    `;
    carWrapper.appendChild(card);
  });
}

function createDots() {
  carData.forEach((_, index) => {
    const dot = document.createElement("div");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      setActiveSlide(index);
      resetAutoPlay();
    });
    carSliderDots.appendChild(dot);
  });
}

function setActiveSlide(index) {
  activeIndex = index;
  const translateY = -activeIndex * 477;
  carWrapper.style.transform = `translateY(${translateY}px)`;
  updateDots();
}

function updateDots() {
  const dots = carSliderDots.querySelectorAll("div");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === activeIndex);
  });
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    activeIndex = (activeIndex + 1) % carData.length;
    setActiveSlide(activeIndex);
  }, 3000);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

function initSlider() {
  createCards();
  createDots();
  setActiveSlide(0);
  startAutoPlay();
}

initSlider();
