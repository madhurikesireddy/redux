import fetch from 'isomorphic-fetch';

function suggest(text) {
  const q = encodeURIComponent(text);
  return fetch(`http://localhost:3000/suggest?q=${q}`, { mode: 'cors' })
    .then(res => res.json());
}

export default { suggest };
