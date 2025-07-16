// videos.js

const videoData = [
  {
    title: "عنوان الفيديو 1",
    image: "/assets/images/mediaphoto.png",
  },
  {
    title: "عنوان الفيديو 2",
    image: "/assets/images/mediaphoto.png",
  },
  {
    title: "عنوان الفيديو 3",
    image: "/assets/images/mediaphoto.png",
  },
  {
    title: "عنوان الفيديو 4",
    image: "/assets/images/mediaphoto.png",
  },
  {
    title: "عنوان الفيديو 5",
    image: "/assets/images/mediaphoto.png",
  },
  {
    title: "عنوان الفيديو 6",
    image: "/assets/images/mediaphoto.png",
  },
  {
    title: "عنوان الفيديو 7",
    image: "/assets/images/mediaphoto.png",
  },
];

const container = document.getElementById("videoContainer");

videoData.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = `video-div${index + 1} grid-item-wrapper1 border`;

  div.style.backgroundImage = `url('${item.image}')`;
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";

  div.innerHTML = `
    <div class="video-icon">
      <img src="/assets/images/videoplay.svg" alt="video-icon" />
      <h2 class="video-title">${item.title}</h2>
    </div>
  `;

  container.appendChild(div);
});
