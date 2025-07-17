document.addEventListener("DOMContentLoaded", () => {
  const newsData = [
    {
      src: "/assets/images/cardsImg.png",
      alt: "Image 1",
      large: "/assets/images/cardsImg.png",
    },
    {
      src: "/assets/images/heroImg.jpg",
      alt: "Image 2",
      large: "/assets/images/heroImg.jpg",
    },
    {
      src: "/assets/images/sliderImage.png",
      alt: "Image 3",
      large: "/assets/images/sliderImage.png",
    },
    {
      src: "/assets/images/sliderImage2.png",
      alt: "Image 4",
      large: "/assets/images/sliderImage2.png",
    },
  ];

  const grid = document.getElementById("news-grid");

  newsData.forEach((item, index) => {
    const link = document.createElement("a");
    link.href = item.large;
    link.className = "media-wrapper";
    link.setAttribute("data-lg-size", "1400-900");
    link.setAttribute("data-lg-src", item.large);

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.className = "media-img";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "svg-overlay");
    svg.setAttribute("viewBox", "0 0 24 24");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    if (index === 1) {
      path.setAttribute(
        "d",
        "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
      );
    } else {
      path.setAttribute(
        "d",
        "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
      );
    }

    svg.appendChild(path);
    link.appendChild(img);
    link.appendChild(svg);
    grid.appendChild(link);
  });

  const videoLink = document.createElement("a");
  videoLink.className = "media-wrapper";
  videoLink.href = "https://www.youtube.com/watch?v=ScMzIvxBSi4";
  videoLink.setAttribute(
    "data-lg-video",
    '{"source":"youtube", "sourceId":"ScMzIvxBSi4", "youtube": {"autoplay": 1, "modestbranding": 1}}'
  );

  const videoThumbnail = document.createElement("img");
  videoThumbnail.src = "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg";
  videoThumbnail.alt = "YouTube Video";
  videoThumbnail.className = "media-img";

  const videoSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  videoSvg.setAttribute("class", "svg-overlay");
  videoSvg.setAttribute("viewBox", "0 0 24 24");

  const videoPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  videoPath.setAttribute("d", "M8 5v14l11-7z");
  videoSvg.appendChild(videoPath);

  videoLink.appendChild(videoThumbnail);
  videoLink.appendChild(videoSvg);
  grid.appendChild(videoLink);

  lightGallery(grid, {
    selector: ".media-wrapper",
    plugins: [lgThumbnail, lgZoom, lgVideo],
    speed: 500,
    mode: "lg-fade",
    hideBarsDelay: 3000,
    preload: 2,
    zoomFromOrigin: false,
    actualSize: true,
  });
});
