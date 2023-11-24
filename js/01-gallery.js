import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}

function renderGallery() {
  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  gallery.innerHTML = galleryMarkup;
}

renderGallery();

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.nodeName === 'IMG') {
    const originalSrc = e.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${originalSrc}" width="800" height="600">
    `);

    instance.show();
  }
});

console.log(galleryItems);
