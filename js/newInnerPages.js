const newsData = [
  { type: "image", src: "/assets/images/cardsImg.png", alt: "Image 1" },
  { type: "image", src: "/assets/images/heroImg.jpg", alt: "Image 2" },
  {
    type: "video",
    src: "https://storage.googleapis.com/coverr-main/mp4/Working-In-The-Office.mp4",
    alt: "Video 1",
  },
  { type: "image", src: "/assets/images/sliderImage.png", alt: "Image 3" },
];

const grid = document.getElementById("news-grid");

newsData.forEach((item) => {
  let mediaElement;

  if (item.type === "image") {
    mediaElement = document.createElement("img");
    mediaElement.src = item.src;
    mediaElement.alt = item.alt;
  } else if (item.type === "video") {
    mediaElement = document.createElement("video");
    mediaElement.src = item.src;
    mediaElement.controls = true;
    mediaElement.alt = item.alt;
  }

  mediaElement.style.width = "100%";
  mediaElement.style.height = "250px";
  mediaElement.style.objectFit = "cover";
  mediaElement.style.borderRadius = "10px";
  mediaElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

  grid.appendChild(mediaElement);
});
