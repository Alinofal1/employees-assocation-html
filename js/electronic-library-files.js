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

pdfData.forEach((item) => {
  const pdfBox = document.createElement("div");
  pdfBox.setAttribute("id", "pdf-form");

  pdfBox.innerHTML = `
    <div id="pdf-right">
      <img src="/assets/images/pdf.svg" alt="pdf" />
      <p>${item.title}</p>
    </div>
    <div id="pdf-left">
      <a href="${item.preview}" target="_blank">
        <img src="/assets/images/preview.svg" alt="preview" />
      </a>
      <a href="${item.download}" download>
        <img src="/assets/images/download.svg" alt="download" />
      </a>
    </div>
  `;

  container.appendChild(pdfBox);
});
