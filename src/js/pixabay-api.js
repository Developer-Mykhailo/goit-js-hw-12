import axios from 'axios';

// export function getImagesByQuery(query) {
//   const BASE_URL = 'https://pixabay.com/api/';

//   const params = new URLSearchParams({
//     q: query,
//     key: '50197903-e6a4a4a15a8ec114cd3a19b67',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   const url = `${BASE_URL}?${params}`;

//   return fetch(url).then(res => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error('Error!');
//     }
//   });
// }

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    q: query,
    key: '50197903-e6a4a4a15a8ec114cd3a19b67',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(res => res.data)
    .catch(error => {
      throw new Error('Error!');
    });
  //
}
