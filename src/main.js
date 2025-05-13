import { getImagesByQuery, imagesOnPage } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreElem,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
const inputElem = formElem.querySelector('input[name="search-text"]');

let liElem;
let heightScroll = 0;
let inputData = '';
let page = 1;

//------------------ form handler -------------------------
formElem.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  inputData = inputElem.value.trim().toLowerCase();
  page = 1;

  if (!inputData) {
    iziToast.warning({
      message: 'The input field is empty, try again.',
      position: 'center',
    });
    formElem.reset();
    return;
  }

  clearGallery();
  showImagesOnPage();
}

//----------------- show images on page -------------------

async function showImagesOnPage() {
  showLoader();
  try {
    const data = await getImagesByQuery(inputData, page);

    if (data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
      });
      formElem.reset();
      return;
    }

    const images = data.hits;
    createGallery(images);

    liElem = document.querySelector('.gallery-item');
    heightScroll = liElem.getBoundingClientRect().height * 2;

    showLoadMoreButton();
    let maxPages = Math.ceil(data.totalHits / imagesOnPage);

    if (page === maxPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.warning({
      message: 'An error occurred. Please try again later.',
      position: 'center',
    });
  } finally {
    hideLoader();
    formElem.reset();
  }
}

//-------------- click on btn load-more ------------------------
loadMoreElem.addEventListener('click', async () => {
  page++;

  hideLoadMoreButton();
  await showImagesOnPage();
  scrollWin(0, heightScroll);
});

//----------------scrollheight------------------------

function scrollWin(x, y) {
  window.scrollBy({
    top: y,
    left: x,
    behavior: 'smooth',
  });
}
