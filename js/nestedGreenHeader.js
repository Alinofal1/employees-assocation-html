function renderGreenHeader(titleText, innerText) {
  const headerHTML = `
    <div class="greenHeader">
      <div class="greenTitle">
        <h2>${titleText}</h2>
        <div>
          <p id="greenpara">الرئيسية <span>&gt;</span> ${titleText} <span>&gt;</span> ${innerText}</p>
        </div>
      </div>
      <div class="greenColor">
        <div class="gray1"></div>
        <div class="gray2"></div>
        <div class="gray3"></div>
      </div>
    </div>
  `;

  const container = document.getElementById("greenHeaderContainer");
  if (container) {
    container.innerHTML = headerHTML;
  }
}
