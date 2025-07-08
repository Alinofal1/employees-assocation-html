function renderGreenHeader(titleText, innerText) {
  const headerHTML = `
    <div class="greenHeader">
      <div class="greenTitle">
        <h2>${innerText}</h2>
        <div>
          <p id="greenpara">الرئيسية <span>&gt;</span> ${titleText} <span>&gt;</span> <span class="active-title">${innerText}</span></p>
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
