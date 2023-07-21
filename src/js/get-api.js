import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38392078-db89c19ac20a7bd4eddb18d45';

export async function getAsked(inputedData, pageNumber, perPage) {
  const options = new URLSearchParams({
    key: `${API_KEY}`,
    q: `${inputedData}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: pageNumber,
    per_page: perPage,
  });
  try {
    return await axios.get(`${BASE_URL}?${options}`);
  } catch (error) {
    Notify.info(
      'Sorry.',
      'There are no images matching your search query. Please try again.',
      'Okay'
    );
  }
}
