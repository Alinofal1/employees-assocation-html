// services section
const servicesData = [
  {
    title: "السلف النقدية",
    img: "../assets/images/lending-card2.svg",
    href: "/pages/cash-lending.html",
    desc: "مبلغ يصل إلى ثلاثة أضعاف مدخراتك (حد أقصى 20,000 شيكل)، يُسدّد على مدى 1–3 سنوات برسوم إدارية سنوية ثابتة ",
  },
  {
    title: "السلف العينية",
    img: "../assets/images/lending-card.svg",
    href: "/pages/in-kind-loan.html",
    desc: "مبلغ يصل إلى ثلاثة أضعاف مدخراتك (حد أقصى 20,000 شيكل)، يُسدّد على مدى 1–3 سنوات برسوم إدارية سنوية ثابتة ",
  },
  {
    title: "صندوق اقراض الطالب",
    img: "../assets/images/lending-card3.svg",
    href: "/pages/student-loan-fund.html",
    desc: "مبلغ يصل إلى ثلاثة أضعاف مدخراتك (حد أقصى 20,000 شيكل)، يُسدّد على مدى 1–3 سنوات برسوم إدارية سنوية ثابتة ",
  },
];

const lendingCards = document.getElementById("lendingCards");

servicesData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "lendingContent";

  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}" />
    <div id="lendingText">
      <a href="${item.href}">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
      </a>
    </div>
  `;

  lendingCards.appendChild(card);
});
