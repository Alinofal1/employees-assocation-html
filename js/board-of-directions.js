const board2025 = [
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
];

const board2024 = [
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
];

const board2023 = [
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
  { name: "خالد البدوي", role: "رئيس مجلس ادارة" },
];

function renderBoard(data, containerId) {
  const container = document.getElementById(containerId);

  for (let i = 0; i < data.length; i++) {
    const member = data[i];

    const card = document.createElement("div");
    card.className = "board-heroContent";

    card.innerHTML = `
      <h2>${member.name}</h2>
      <p>${member.role}</p>
      <img
        src="../assets/images/board-of-directions-card.svg"
        alt="card svg"
        id="boardCard"
      />
      <img
        src="../assets/images/board-card-image.jpg"
        alt="card image"
        id="boardImage"
      />
    `;

    container.appendChild(card);
  }
}

renderBoard(board2025, "boardContainer2025");
renderBoard(board2024, "boardContainer2024");
renderBoard(board2023, "boardContainer2023");
