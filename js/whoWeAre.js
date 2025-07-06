const heroCardsData = [
  {
    rightImg: "../assets/images/redrightsvg.svg",
    title: "الرؤية",
    text: "موظفون حكوميين قادرين على تلبية احتياجاتهم المعيشية و طموحاتهم المستقبلية",
    tailImg: "/assets/images/redtail.svg",
  },
  {
    rightImg: "../assets/images/greenrightsvg.svg",
    title: "الرسالة",
    text: "توفير خدمات مالية واجتماعية ميسرة تسهم في تحسين جودة حياة الموظفين الحكوميين",
    tailImg: "/assets/images/greentail.svg",
  },
];

const heroCardsContainer = document.getElementById("heroCards");

heroCardsData.forEach((card) => {
  const cardHTML = `
    <div class="card">
      <img
        src="${card.rightImg}"
        alt="svg"
        id="rightPart"
      />
      <div id="whoweare-CardContent">
        <div id="whoweare-innerCardContent">
          <h2>${card.title}</h2>
          <p>${card.text}</p>
        </div>
      </div>
      <img src="${card.tailImg}" alt="svg" id="tail" />
    </div>
  `;

  heroCardsContainer.insertAdjacentHTML("beforeend", cardHTML);
});
