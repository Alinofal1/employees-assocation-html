// annualReports.js

const annualReportsData = [
  {
    title: "تقرير 2024 - الأداء السنوي",
    image: "/assets/images/report1.jpg",
  },
  {
    title: "تقرير 2023 - المشاريع المنفذة",
    image: "/assets/images/report2.jpg",
  },
  {
    title: "تقرير 2022 - الإنجازات الرئيسية",
    image: "/assets/images/report3.jpg",
  },
  {
    title: "تقرير 2021 - نظرة عامة",
    image: "/assets/images/report4.jpg",
  },
  {
    title: "تقرير 2020 - التحول الرقمي",
    image: "/assets/images/report5.jpg",
  },
  {
    title: "تقرير 2019 - البيانات المالية",
    image: "/assets/images/report6.jpg",
  },
  {
    title: "تقرير 2018 - التخطيط الاستراتيجي",
    image: "/assets/images/report7.jpg",
  },
  {
    title: "تقرير 2017 - التقييم المؤسسي",
    image: "/assets/images/report8.jpg",
  },
];

const container = document.getElementById("annualReportsContainer");

annualReportsData.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = `div${index + 1}${index + 1}`;

  div.innerHTML = `
    <div class="annual-content">
      <p class="annualPara">${item.title} | ملف pdf</p>
      <img src="/assets/images/white-preview.svg" alt="preview" />
      <img src="/assets/images/white-download.svg" alt="download" />
    </div>
    <div class="overlay1 border"></div>
  `;

  container.appendChild(div);
});
