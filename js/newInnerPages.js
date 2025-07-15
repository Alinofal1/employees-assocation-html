const newsData = [
  { src: "/assets/images/cardsImg.png", alt: "Image 1" },
  { src: "/assets/images/heroImg.jpg", alt: "Image 2" },
  { src: "/assets/images/sliderImage.png", alt: "Image 3" },
  { src: "/assets/images/sliderImage2.png", alt: "Image 4" },
];

const grid = document.getElementById("news-grid");

newsData.forEach((item, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "media-wrapper";

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;
  img.className = "media-img";
  wrapper.appendChild(img);

  if (index === 1) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "svg-overlay");
    svg.setAttribute("viewBox", "0 0 24 24");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8 5v14l11-7z");
    svg.appendChild(path);

    wrapper.appendChild(svg);
  }

  grid.appendChild(wrapper);
});
