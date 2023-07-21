export function getRefs() {
  return {
    searchFormEl: document.querySelector('#search-form'),
    searchFormBtnSubmit: document.querySelector('[type=submit]'),
    galleryWrapper: document.querySelector('.gallery'),
    loadMoreBtnSubmit: document.querySelector('.load-more'),
    formInputRef: document.querySelector('#search-form input'),
  };
}