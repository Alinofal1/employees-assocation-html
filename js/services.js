const servicesData = [
  {
    title: "التسليف",
    href: "/pages/lending-services.html",
    img: "../assets/images/Group 29.svg",
    desc: "تمويل لشراء احتياجاتك من شركائنا (تأمين المركبات، أجهزة كهربائية وإلكترونية، أثاث منزلي، صيانة ودهان سيارات، خدمات طبية للأسنان، محروقات…) وتقسيط يصل حتى 12 شهراً",
  },
  {
    title: "التوفير",
    href: "/pages/saving-money.html",
    img: "../assets/images/savingMoney.svg",
    desc: "مبلغ يصل إلى ثلاثة أضعاف مدخراتك (حد أقصى 20,000 شيكل)، يُسدّد على مدى 1–3 سنوات برسوم إدارية سنوية ثابتة ",
  },
];

const servicesCards2 = document.getElementById("ServicesCards2");

servicesData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "cardContent2";

  card.innerHTML = `
  <img src="${item.img}" alt="${item.title}" />
  <a href='${item.href}'
  <div id="cardText2">
  <h2>${item.title}</h2>
  <p>${item.desc}</p>
  </div>
  </a>
  `;

  servicesCards2.appendChild(card);
});
