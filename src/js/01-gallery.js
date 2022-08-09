import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// // Add imports above this line
import { galleryItems } from './gallery-items';
// // Change code below this line

const divToContainGallery = document.querySelector('.gallery');

const createLinksFromArray = (array) =>
    array.reduce((acc, { description, original, preview }) => acc + `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`, ''
    );

const galleryMarkup = createLinksFromArray(galleryItems);


divToContainGallery.insertAdjacentHTML('beforeend', galleryMarkup);

const modal = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
    