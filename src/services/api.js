import axios from 'axios';
const TOKEN = 'b481b683044e082bf61cdce330c864b1';
const api = axios.create({
  baseURL: 'https://api.vimeo.com/',
  headers: {
    'Authorization': `bearer ${TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.vimeo.*+json;version=3.4'
  }
});

export default api;
