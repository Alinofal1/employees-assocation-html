// News Cards
const newsData = [
  {
    title: "عنوان الخبر ",
    date: "12 حزيران 2025",
    img: "../assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
  {
    title: "عنوان الخبر ",
    date: "15 حزيران 2025",
    img: "../assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
  {
    title: "عنوان الخبر ",
    date: "20 حزيران 2025",
    img: "../assets/images/cardsImg.png",
    desc: `تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً
كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات...`,
  },
];

const inKindCards = document.getElementById("in-kind-cards");

newsData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "in-kindContent";
  card.innerHTML = `
    <a href="#" class="in-kindLink">
      <img src="${item.img}" alt="${item.title}" class="in-kindImage" />
      <div class="in-kindText">
        <h1>${item.title}</h1>
        <p class="date">${item.date}</p>
        <p class="in-kind-Para">
          ${item.desc} <span>معرفة المزيد</span>
        </p>
      </div>
    </a>
  `;
  inKindCards.appendChild(card);
});
