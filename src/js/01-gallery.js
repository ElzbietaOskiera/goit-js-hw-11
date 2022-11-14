import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';

const galleryContainer = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createGallery);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

console.log(galleryItems);
