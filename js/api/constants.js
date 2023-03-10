export const API_HOST_URL = "https://api.noroff.dev/api/v1/social";
export const API_POST_BASE = "/posts";
export const API_POST_URL = `${API_HOST_URL}${API_POST_BASE}`;

/*const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
  },
};

const url1 = "https://nf-api.onrender.com/docs/json/api/v1/social/posts";

async function fetchURL() {
  const response = await fetch(url1, options);
  const product = await response.json();
  console.log(product);
}

fetchURL();

fetch("https://nf-api.onrender.com/docs/json/api/v1/social/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));*/
