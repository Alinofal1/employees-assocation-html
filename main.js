const servicesData = [
  {
    title: "التسليف",
    img: "./images/savingMoney.svg",
    desc: "تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً",
  },
  {
    title: "التوفير",
    img: "./images/Group 29.svg",
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
    title: "عنوان الخبر الأول",
    date: "12 حزيران 2025",
    img: "./images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
  {
    title: "عنوان الخبر الثاني",
    date: "15 حزيران 2025",
    img: "./images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
  {
    title: "عنوان الخبر الثالث",
    date: "20 حزيران 2025",
    img: "./images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
];

const newsCards = document.getElementById("newsCards");

newsData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "newsCardsContent";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}" class="newsCardsImage" />
    <div class="newsCardText">
      <h1>${item.title}</h1>
      <p class="date">${item.date}</p>
      <p class="newsPara">
        ${item.desc} <span>معرفة المزيد</span>
      </p>
    </div>
  `;
  newsCards.appendChild(card);
});

// Mobile menu
const toggleBtn = document.getElementById("toggleMenu");
const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.getElementById("mobileMenu");
const internalClose = document.getElementById("internalCloseIcon");

// فتح القائمة
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

// Hero Section
const slideImages = [
  "./images/sliderImage2.png",
  "./images/cardsImg.png",
  "./images/heroImg.jpg",
  "./images/sliderImage.png",
];

let currentIndex = 0;
const imgSlider = document.querySelector(".imgSlider");
const sliderImages = document.querySelectorAll("#sliderImages img");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");

function changeSlide(index) {
  currentIndex = index;
  imgSlider.innerHTML = `
    <img src="${slideImages[index]}" class="heroImg slideImage fade-in" />
  `;

  sliderImages.forEach((img, i) => {
    img.style.border = i === index ? "7px solid #b7312b" : "none";
  });
}

// Next slide
function nextSlide() {
  const nextIndex = (currentIndex + 1) % slideImages.length;
  changeSlide(nextIndex);
}

// Previous slide
function prevSlide() {
  const prevIndex =
    (currentIndex - 1 + slideImages.length) % slideImages.length;
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

// Initial render
changeSlide(currentIndex);
