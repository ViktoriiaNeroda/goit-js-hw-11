import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38392078-db89c19ac20a7bd4eddb18d45';

export async function getAsked(inputedData, pageNumber = 1, perPage = 10) {
  try {
    const options = new URLSearchParams({
      key: API_KEY,
      q: encodeURIComponent(inputedData),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: pageNumber,
      per_page: perPage,
    });

    const response = await axios.get(`${BASE_URL}?${options}`);
    return response;
  } catch (error) {
    Notify.failure('Oops!', 'Something went wrong. Please try again later.');
   
    throw error; 
  }
}
