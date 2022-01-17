const BASE_URL = "http://localhost:3000";

function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
  .then(res => res.status < 400 ? res : Promise.reject())
  .then(res => res.json())
  .catch(error => {
    console.log('Error: ', error);
  });
}

function getImages () {
  return fetchRequest('/files');
}

function postImage (body) {
  return fetchRequest('/upload', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  });
}


const ApiService = { getImages, postImage };

export default ApiService;