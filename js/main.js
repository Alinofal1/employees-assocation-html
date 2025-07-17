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
    img.style.border = i === index ? "4px solid #b7312b" : "none";
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

// News Cards
const newsData = [
  {
    title: "عنوان الخبر ",
    date: "12 حزيران 2025",
    img: "./assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
  {
    title: "عنوان الخبر ",
    date: "15 حزيران 2025",
    img: "./assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
  {
    title: "عنوان الخبر ",
    date: "20 حزيران 2025",
    img: "./assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
];

const newsCards = document.getElementById("newsCards");

newsData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "newsCardsContent border";
  card.style = "margin-bottom: 50px";
  card.innerHTML = `
    <a href="/pages/newsInnerPage.html" class="newsCardLink">
      <img src="${item.img}" alt="${item.title}" class="newsCardsImage" />
      <div class="newsCardText">
        <h2>${item.title}</h2>
        <p class="date">${item.date}</p>
        <p class="newsPara">
          ${item.desc} <span>معرفة المزيد</span>
        </p>
      </div>
    </a>
  `;
  newsCards.appendChild(card);
});
