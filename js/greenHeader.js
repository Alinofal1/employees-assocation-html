function renderGreenHeader(titleText) {
  const headerHTML = `
    <div class="greenHeader">
      <div class="greenTitle">
        <h2>${titleText}</h2>
        <div>
          <p>الرئيسية <span>&gt;</span> <span class="active-title">${titleText}</span></p>
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
