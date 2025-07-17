const pdfData = [
  { title: "تحليل الاتجاهات السوقية", preview: "#", download: "#" },
  { title: "تقرير الأداء السنوي", preview: "#", download: "#" },
  { title: "تقييم المخاطر المالية", preview: "#", download: "#" },
  { title: "استراتيجيات النمو والتوسع", preview: "#", download: "#" },
  { title: "توصيات التحسين والتطوير", preview: "#", download: "#" },
  { title: "مقاييس النجاح الرئيسية", preview: "#", download: "#" },
  { title: "تحليل الاتجاهات السوقية", preview: "#", download: "#" },
  { title: "تقرير الأداء السنوي", preview: "#", download: "#" },
  { title: "تقييم المخاطر المالية", preview: "#", download: "#" },
  { title: "استراتيجيات النمو والتوسع", preview: "#", download: "#" },
  { title: "توصيات التحسين والتطوير", preview: "#", download: "#" },
  { title: "مقاييس النجاح الرئيسية", preview: "#", download: "#" },
];

const container = document.getElementById("pdfContainer");

pdfData.forEach((item, index) => {
  const pdfBox = document.createElement("div");
  pdfBox.setAttribute("id", "pdf-form");

  const leftArrowSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e98a31" viewBox="0 0 24 24">
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  `;

  pdfBox.innerHTML = `
    <div id="pdf-right">
      <img src="/assets/images/exam.png" alt="pdf" />
      <p>${item.title}</p>
    </div>
    <div id="pdf-left">
      <a href="${item.preview}" target="_blank">
        <img src="/assets/images/preview.svg" alt="preview" />
      </a>
      <a href="${item.download}" download>
        <img src="/assets/images/download.svg" alt="download" />
      </a>
      ${index < 4 ? leftArrowSVG : ""}
    </div>
  `;

  container.appendChild(pdfBox);
});
