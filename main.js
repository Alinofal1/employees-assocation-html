// Mobile menu
const toggleBtn = document.getElementById("toggleMenu");
const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.getElementById("mobileMenu");
const internalClose = document.getElementById("internalCloseIcon");

// open menu
toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  document.body.classList.add("no-scroll");
});

// X close
internalClose.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  document.body.classList.remove("no-scroll");
});

// li close on click
document.querySelectorAll("#mobileMenu li a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("no-scroll");
  });
});
// remove no-scroll if screen becomes large
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024 && mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});

// input search
const searchLogo = document.querySelector("#navList #searchLogo");
const searchWrapper = document.getElementById("desktopSearchWrapper");
const closeSearchBtn = document.getElementById("closeSearchBtn");

searchLogo?.addEventListener("click", () => {
  searchWrapper.classList.remove("hidden");
  searchWrapper.classList.add("show-search");
  document.body.classList.add("no-scroll");
});

closeSearchBtn?.addEventListener("click", () => {
  searchWrapper.classList.remove("show-search");
  searchWrapper.classList.add("hidden");
  document.body.classList.remove("no-scroll");
});

// Hero Section
const slidesData = [
  {
    image: "./assets/images/sliderImage2.png",
    title: "معاً نحو استقرار مالي للموظفين الحكوميين",
    description:
      "تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً",
    buttonText: "معرفة المزيد",
  },
  {
    image: "./assets/images/cardsImg.png",
    title: "معاً نحو استقرار مالي للموظفين الحكوميين",
    description:
      "تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً",
    buttonText: "معرفة المزيد",
  },
  {
    image: "./assets/images/heroImg.jpg",
    title: "معاً نحو استقرار مالي للموظفين الحكوميين",
    description:
      "تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً",
    buttonText: "معرفة المزيد",
  },
  {
    image: "./assets/images/sliderImage.png",
    title: "معاً نحو استقرار مالي للموظفين الحكوميين",
    description:
      "تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً",
    buttonText: "معرفة المزيد",
  },
];

let currentIndex = 0;
const imgSlider = document.querySelector(".imgSlider");
const sliderImages = document.querySelectorAll("#sliderImages img");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");

function changeSlide(index) {
  currentIndex = index;

  imgSlider.innerHTML = `
    <img src="${slidesData[index].image}" class="heroImg slideImage fade-in" />
  `;

  document.getElementById("slideTitle").textContent = slidesData[index].title;
  document.getElementById("slideDescription").textContent =
    slidesData[index].description;
  document.getElementById("slideButton").textContent =
    slidesData[index].buttonText;

  sliderImages.forEach((img, i) => {
    img.style.border = i === index ? "7px solid #b7312b" : "none";
  });
}

// Initial render
changeSlide(currentIndex);

// Next slide
function nextSlide() {
  const nextIndex = (currentIndex + 1) % slidesData.length;
  changeSlide(nextIndex);
}

// Previous slide
function prevSlide() {
  const prevIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
  changeSlide(prevIndex);
}

// Auto-play
let autoPlay = setInterval(nextSlide, 3000);

// Events
downBtn.addEventListener("click", () => {
  clearInterval(autoPlay);
  nextSlide();
  autoPlay = setInterval(nextSlide, 3000);
});

upBtn.addEventListener("click", () => {
  clearInterval(autoPlay);
  prevSlide();
  autoPlay = setInterval(nextSlide, 3000);
});

// Click on thumbnail
sliderImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    clearInterval(autoPlay);
    changeSlide(index);
    autoPlay = setInterval(nextSlide, 3000);
  });
});

// services section
const servicesData = [
  {
    title: "التسليف",
    img: "./assets/images/savingMoney.svg",
    desc: "تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً",
  },
  {
    title: "التوفير",
    img: "./assets/images/Group 29.svg",
    desc: "مبلغ يصل إلى ثلاثة أضعاف مدخراتك (حد أقصى 20,000 شيكل)، يُسدّد على مدى 1–3 سنوات برسوم إدارية سنوية ثابتة ",
  },
];

const servicesCards = document.getElementById("ServicesCards");

servicesData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "cardContent";

  card.innerHTML = `
  <img src="${item.img}" alt="${item.title}" />
  <div id="cardText">
  <h1>${item.title}</h1>
  <p>${item.desc}</p>
  </div>
  `;

  servicesCards.appendChild(card);
});

// News Cards
const newsData = [
  {
    title: "عنوان الخبر ",
    date: "12 حزيران 2025",
    img: "./assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
  {
    title: "عنوان الخبر ",
    date: "15 حزيران 2025",
    img: "./assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
  {
    title: "عنوان الخبر ",
    date: "20 حزيران 2025",
    img: "./assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
];

const newsCards = document.getElementById("newsCards");

newsData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "newsCardsContent";
  card.innerHTML = `
    <a href="#" class="newsCardLink">
      <img src="${item.img}" alt="${item.title}" class="newsCardsImage" />
      <div class="newsCardText">
        <h1>${item.title}</h1>
        <p class="date">${item.date}</p>
        <p class="newsPara">
          ${item.desc} <span>معرفة المزيد</span>
        </p>
      </div>
    </a>
  `;
  newsCards.appendChild(card);
});
