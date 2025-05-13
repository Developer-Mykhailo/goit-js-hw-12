import axios from 'axios';

export const imagesOnPage = 15;

export async function getImagesByQuery(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    q: query,
    key: '50197903-e6a4a4a15a8ec114cd3a19b67',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: imagesOnPage,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
