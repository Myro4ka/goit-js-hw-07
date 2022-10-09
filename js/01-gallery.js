import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>
    `;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }
  console.log(event.target.dataset.source);

  const imageEl = event.target;
  const parentImageUrl = imageEl.closest(".gallery__item");
}
