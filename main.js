const imageBase = "./assets/photos/";

const allImages = [
  "A7C09183 2 Medium.jpeg",
  "A7C09199 2 Medium.jpeg",
  "A7C09212 2 Medium.jpeg",
  "A7C09213 2 Medium.jpeg",
  "A7C09226 2 Medium.jpeg",
  "A7C09244 2 Medium.jpeg",
  "A7C09273 2 Medium.jpeg",
  "A7C09275 2 Medium.jpeg",
  "A7C09282 2 Medium.jpeg",
  "A7C09297 2 Medium.jpeg",
  "A7C09328 2 Medium.jpeg",
  "A7C09341 2 Medium.jpeg",
  "A7C09345 2 Medium.jpeg",
  "A7C09346 2 Medium.jpeg",
  "A7C09353 2 Medium.jpeg",
  "A7C09361 2 Medium.jpeg",
  "A7C09366 2 Medium.jpeg",
  "A7C09383 2 Medium.jpeg",
  "A7C09401 2 Medium.jpeg",
  "A7C09425 2 Medium.jpeg",
  "A7C09434 2 Medium.jpeg",
  "A7C09439 2 Medium.jpeg",
  "A7C09442 2 Medium.jpeg",
  "A7C09443 2 Medium.jpeg",
  "A7C09447 2 Medium.jpeg",
  "A7C09453 2 Medium.jpeg",
  "A7C09460 2 Medium.jpeg",
  "A7C09488 2 Medium.jpeg",
  "A7C09503 2 Medium.jpeg",
  "A7C09517 2 Medium.jpeg",
  "A7C09542 2 Medium.jpeg",
  "A7C09546 2 Medium.jpeg",
  "A7C09561 2 Medium.jpeg",
  "A7C09565 2 Medium.jpeg",
  "A7C09573 2 Medium.jpeg",
  "A7C09579 2 Medium.jpeg",
  "A7C09635 2 Medium.jpeg",
  "A7C09653 2 Medium.jpeg",
  "A7C09666 2 Medium.jpeg",
  "A7C09668 2 Medium.jpeg",
  "A7C09678 2 Medium.jpeg",
  "A7C09773 2 Medium.jpeg",
  "A7C09819 2 Medium.jpeg",
  "A7C09824 2 Medium.jpeg",
  "A7C09829 2 Medium.jpeg",
  "A7C09838 2 Medium.jpeg",
  "A7C09854 2 Medium.jpeg",
  "IMG_0029 Medium.jpeg",
  "IMG_0037 Medium.jpeg",
  "IMG_0047 Medium.jpeg",
  "IMG_0062 Medium.jpeg",
  "IMG_0308 Medium.jpeg",
  "IMG_0314 Medium.jpeg",
  "IMG_0333 Medium.jpeg",
  "IMG_0351 Medium.jpeg",
  "IMG_0391 Medium.jpeg",
  "IMG_0439 Medium.jpeg",
  "IMG_0449 Medium.jpeg",
  "IMG_0480 Medium.jpeg",
  "IMG_0487 Medium.jpeg",
  "IMG_0497 Medium.jpeg",
  "IMG_0502 Medium.jpeg",
  "IMG_0636 2 Medium.jpeg",
];

const imageLabels = {
  "A7C09183 2 Medium.jpeg": "A rising facade against an open sky",
  "A7C09199 2 Medium.jpeg": "Softened geometry with landscape foreground",
  "A7C09212 2 Medium.jpeg": "Residential tower framed through sculptural planting",
  "A7C09213 2 Medium.jpeg": "Architecture viewed through textured landscape",
  "A7C09226 2 Medium.jpeg": "Angular facade composition",
  "A7C09244 2 Medium.jpeg": "Reflecting water and planted edge",
  "A7C09273 2 Medium.jpeg": "Arrival frontage and planted ground plane",
  "A7C09275 2 Medium.jpeg": "Green foreground leading into the block",
  "A7C09282 2 Medium.jpeg": "Material contrast at the entry edge",
  "A7C09297 2 Medium.jpeg": "Curved tower glimpsed through palms",
  "A7C09328 2 Medium.jpeg": "Grid of glass and structure",
  "A7C09341 2 Medium.jpeg": "Blue facade and ornamental grasses",
  "A7C09345 2 Medium.jpeg": "Filtered canopy and reflective glass",
  "A7C09346 2 Medium.jpeg": "Sunlight through leaves across the envelope",
  "A7C09353 2 Medium.jpeg": "Vertical corporate form in monochrome mood",
  "A7C09361 2 Medium.jpeg": "Curved glazing and sky texture",
  "A7C09366 2 Medium.jpeg": "Glass tower as sculptural mass",
  "A7C09383 2 Medium.jpeg": "Reflective facade with planted movement",
  "A7C09401 2 Medium.jpeg": "Tower softened by foreground grasses",
  "A7C09425 2 Medium.jpeg": "Signature corporate facade hero",
  "A7C09434 2 Medium.jpeg": "Sweeping glazed corner condition",
  "A7C09439 2 Medium.jpeg": "Facade pattern study",
  "A7C09442 2 Medium.jpeg": "Linear rhythm and shading members",
  "A7C09443 2 Medium.jpeg": "Structural detail with lift elements",
  "A7C09447 2 Medium.jpeg": "Building framed with seasonal planting",
  "A7C09453 2 Medium.jpeg": "Vertical density and ornamental foreground",
  "A7C09460 2 Medium.jpeg": "Tree-lined campus promenade",
  "A7C09488 2 Medium.jpeg": "Ground-level life beneath green cover",
  "A7C09503 2 Medium.jpeg": "Retail edge and layered walkways",
  "A7C09517 2 Medium.jpeg": "Outdoor cafe seating in the campus fabric",
  "A7C09542 2 Medium.jpeg": "Hospitality zone with warm ambient light",
  "A7C09546 2 Medium.jpeg": "Quiet lobby and volumetric depth",
  "A7C09561 2 Medium.jpeg": "Service moment in warm interior light",
  "A7C09565 2 Medium.jpeg": "Coffee ritual and crafted atmosphere",
  "A7C09573 2 Medium.jpeg": "Interior corridor with planted wall",
  "A7C09579 2 Medium.jpeg": "Covered outdoor lounge overlooking the campus",
  "A7C09635 2 Medium.jpeg": "Recreation edge with active use",
  "A7C09653 2 Medium.jpeg": "Facade texture and balcony rhythm",
  "A7C09666 2 Medium.jpeg": "Threshold silhouettes and ceiling geometry",
  "A7C09668 2 Medium.jpeg": "Minimal study of light and circular fixtures",
  "A7C09678 2 Medium.jpeg": "Koi pond detail with vivid color contrast",
  "A7C09773 2 Medium.jpeg": "Water garden against the residence block",
  "A7C09819 2 Medium.jpeg": "Interactive installation and human connection",
  "A7C09824 2 Medium.jpeg": "Suspended texture and linear repetition",
  "A7C09829 2 Medium.jpeg": "Tagged installation and collaborative gesture",
  "A7C09838 2 Medium.jpeg": "Occupancy and participation on the board wall",
  "A7C09854 2 Medium.jpeg": "Campus view across leisure seating",
  "IMG_0029 Medium.jpeg": "Monochrome facade abstraction",
  "IMG_0037 Medium.jpeg": "Angular residential profile in black and white",
  "IMG_0047 Medium.jpeg": "Interior greenery with reflective water",
  "IMG_0062 Medium.jpeg": "Roof glazing and structural rhythm",
  "IMG_0308 Medium.jpeg": "Presentation setting with audience focus",
  "IMG_0314 Medium.jpeg": "Interior volume in monochrome",
  "IMG_0333 Medium.jpeg": "Pour detail inside the hospitality corner",
  "IMG_0351 Medium.jpeg": "Window seat overlooking the corporate landscape",
  "IMG_0391 Medium.jpeg": "Retail kiosk as a bold accent moment",
  "IMG_0439 Medium.jpeg": "Court-side activity on campus",
  "IMG_0449 Medium.jpeg": "Lounge interior with layered reflections",
  "IMG_0480 Medium.jpeg": "Koi study with painterly color",
  "IMG_0487 Medium.jpeg": "Occupancy around the message wall",
  "IMG_0497 Medium.jpeg": "Open field and skyline beyond",
  "IMG_0502 Medium.jpeg": "Red lounge seating facing the landscape",
  "IMG_0636 2 Medium.jpeg": "Food counter and operational life",
};

const chapters = [
  {
    id: "chapter-1",
    index: "Chapter 01",
    title: "Skyline Presence",
    description:
      "The opening sequence establishes scale and confidence through upward views, sculptural framing, and the meeting point between built mass and open sky.",
    images: [
      { file: "A7C09183 2 Medium.jpeg" },
      { file: "A7C09212 2 Medium.jpeg" },
      { file: "A7C09226 2 Medium.jpeg" },
      { file: "A7C09425 2 Medium.jpeg" },
      { file: "A7C09353 2 Medium.jpeg" },
    ],
  },
  {
    id: "chapter-2",
    index: "Chapter 02",
    title: "Facade Language",
    description:
      "A closer read of glass, structure, fins, and repetition reveals the precision that gives the campus its commercial identity.",
    images: [
      { file: "A7C09439 2 Medium.jpeg" },
      { file: "A7C09442 2 Medium.jpeg" },
      { file: "A7C09443 2 Medium.jpeg" },
      { file: "A7C09824 2 Medium.jpeg" },
      { file: "A7C09653 2 Medium.jpeg" },
      { file: "IMG_0029 Medium.jpeg" },
      { file: "IMG_0062 Medium.jpeg" },
    ],
  },
  {
    id: "chapter-3",
    index: "Chapter 03",
    title: "Landscape And Arrival",
    description:
      "Karle's green edge is not treated as decoration. It actively shapes the visual experience, softening entries, water bodies, promenades, and pause points.",
    images: [
      { file: "A7C09488 2 Medium.jpeg" },
      { file: "A7C09244 2 Medium.jpeg" },
      { file: "A7C09773 2 Medium.jpeg" },
      { file: "A7C09447 2 Medium.jpeg" },
      { file: "IMG_0502 Medium.jpeg" },
      { file: "IMG_0497 Medium.jpeg" },
    ],
  },
  {
    id: "chapter-4",
    index: "Chapter 04",
    title: "Work, Hospitality, Pause",
    description:
      "Beyond architecture, the site opens into hospitality corners, circulation spaces, cafe moments, and semi-open lounges that shape the day-to-day experience.",
    images: [
      { file: "A7C09579 2 Medium.jpeg" },
      { file: "A7C09542 2 Medium.jpeg" },
      { file: "A7C09573 2 Medium.jpeg" },
      { file: "IMG_0351 Medium.jpeg" },
      { file: "IMG_0449 Medium.jpeg" },
      { file: "A7C09546 2 Medium.jpeg" },
    ],
  },
  {
    id: "chapter-5",
    index: "Chapter 05",
    title: "Human Rhythm",
    description:
      "A final chapter introduces life into the frames: interaction, recreation, food service, and small gestures that help the campus feel occupied and real.",
    images: [
      { file: "A7C09838 2 Medium.jpeg" },
      { file: "A7C09819 2 Medium.jpeg" },
      { file: "A7C09829 2 Medium.jpeg" },
      { file: "IMG_0439 Medium.jpeg" },
      { file: "IMG_0308 Medium.jpeg" },
      { file: "IMG_0636 2 Medium.jpeg" },
      { file: "A7C09561 2 Medium.jpeg" },
      { file: "IMG_0487 Medium.jpeg" },
    ],
  },
];

const heroImage = "A7C09183 2 Medium.jpeg";
const featureImage = "A7C09579 2 Medium.jpeg";

const heroImageElement = document.querySelector("#hero-image");
const featureImageElement = document.querySelector("#feature-image");
const storySectionsElement = document.querySelector("#story-sections");
const completeGalleryElement = document.querySelector("#complete-gallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector("#lightbox-close");

heroImageElement.src = toImagePath(heroImage);
featureImageElement.src = toImagePath(featureImage);

chapters.forEach((chapter) => {
  const chapterElement = document.createElement("section");
  chapterElement.className = "story-chapter";
  chapterElement.id = chapter.id;

  chapterElement.innerHTML = `
    <div class="chapter-topline">
      <div class="chapter-index">${chapter.index}</div>
      <div class="chapter-copy">
        <h3>${chapter.title}</h3>
        <p>${chapter.description}</p>
      </div>
    </div>
  `;

  const grid = document.createElement("div");
  grid.className = "story-sequence";

  chapter.images.forEach((image) => {
    grid.appendChild(createStoryCard(image.file, image.className));
  });

  chapterElement.appendChild(grid);
  storySectionsElement.appendChild(chapterElement);
});

allImages.forEach((file) => {
  const button = document.createElement("button");
  button.className = "gallery-thumb";
  button.type = "button";
  button.setAttribute("aria-label", `Open ${readableName(file)}`);
  button.innerHTML = `<img src="${toImagePath(file)}" alt="${imageLabels[file] || readableName(file)}" loading="lazy" />`;
  button.addEventListener("click", () => openLightbox(file));
  completeGalleryElement.appendChild(button);
});

lightboxClose.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  const bounds = lightbox.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (clickedOutside) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) {
    lightbox.close();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  },
);

document.querySelectorAll(".story-card").forEach((card) => {
  observer.observe(card);
});

function createStoryCard(file, className = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "story-card";
  button.setAttribute("aria-label", `Open ${readableName(file)}`);
  button.innerHTML = `
    <figure>
      <img src="${toImagePath(file)}" alt="${imageLabels[file] || readableName(file)}" loading="lazy" />
      <figcaption>${imageLabels[file] || readableName(file)}</figcaption>
    </figure>
  `;
  button.addEventListener("click", () => openLightbox(file));
  return button;
}

function openLightbox(file) {
  lightboxImage.src = toImagePath(file);
  lightboxImage.alt = imageLabels[file] || readableName(file);
  lightboxCaption.textContent = imageLabels[file] || readableName(file);
  lightbox.showModal();
}

function toImagePath(file) {
  return `${imageBase}${encodeURIComponent(toAssetFilename(file)).replace(/%2F/g, "/")}`;
}

function readableName(file) {
  return file.replace(/\.(jpeg|jpg)$/i, "").replace(/\s*Medium/i, "");
}

function toAssetFilename(file) {
  if (file.startsWith("A7C")) {
    return file.replace(/ Medium\.jpeg$/i, ".JPG");
  }

  return file.replace(/ Medium\.jpeg$/i, ".jpg");
}
