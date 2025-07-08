// services section
const servicesData = [
  {
    title: "التسليف",
    href: "/pages/lending-services.html",
    img: "/assets/images/Group 29.svg",
    desc: "تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً",
  },
  {
    title: "التوفير",
    href: "/pages/saving-money.html",
    img: "/assets/images/savingMoney.svg",
    desc: "مبلغ يصل إلى ثلاثة أضعاف مدخراتك (حد أقصى 20,000 شيكل)، يُسدّد على مدى 1–3 سنوات برسوم إدارية سنوية ثابتة مبلغ يصل إلى ثلاثة أضعاف مدخراتك (حد أقصى 20,000 شيكل)، يُسدّد على مدى 1–3 سنوات برسوم إدارية سنوية ثابتة ",
  },
];

const servicesCards = document.getElementById("ServicesCards");

servicesData.forEach((item) => {
  const card = document.createElement("a");
  card.className = "cardContent";
  card.setAttribute("href", item.href);
  card.innerHTML = `
  <img src="${item.img}" alt="${item.title}" />
  <div id="cardText">
  <h2>${item.title}</h2>
  <p>${item.desc}</p>
  </div>
  `;

  servicesCards.appendChild(card);
});
