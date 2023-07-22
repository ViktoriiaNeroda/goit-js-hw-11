import {
  hendleSearchFormBtnSubmitClick,
  hendleOnSearchFormInput,
  hendleLoadMoreBtnClick,
  btnUp,
} from './js/callback';

import { getRefs } from './js/refs';

const refs = getRefs();

refs.loadMoreBtnSubmit.hidden = true;
refs.searchFormBtnSubmit.disabled = true;
refs.galleryWrapper.innerHTML = '';

refs.formInputRef.addEventListener('input', hendleOnSearchFormInput);

refs.searchFormEl.addEventListener('submit', hendleSearchFormBtnSubmitClick);

refs.loadMoreBtnSubmit.addEventListener('click', hendleLoadMoreBtnClick);

btnUp.addEventListener();

