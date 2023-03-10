import { API_HOST_URL } from "./api/constants.js";
import { API_POST_BASE } from "./api/constants.js";
import { API_POST_URL } from "./api/constants.js";
const postDetails = document.querySelector(".container");

const requestLogin = {
  method: "post",
  body: JSON.stringify({
    email: "first.last@stud.noroff.no",
    password: "UzI1NiIsInR5cCI",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const jsonLogin = JSON.stringify(requestLogin);
localStorage.setItem("login", jsonLogin);

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm5hbWUiOiJteV91c2VybmFtZSIsImVtYWlsIjoiZmlyc3QubGFzdEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiY3JlZGl0cyI6MTAzMiwid2lucyI6W10sImlhdCI6MTY3Nzc2MTcyNH0.1U-anB8M2vzhyfCTsf4h8XS_5czl5JvdDHhWSN5tRlE",
  },
};

async function fetchURL() {
  const response = await fetch(
    `https://api.noroff.dev/api/v1/auction/auth/login`,
    requestLogin,
    `${API_HOST_URL}${API_POST_BASE}`,
    options
  );
  const product = await response.json();
  const accessToken = product.accessToken;
  localStorage.setItem("accessToken", accessToken);
  console.log(product);
}

fetchURL();

async function fetchWithToken(url) {
  try {
    const token = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    const newPost = json.map((value, index) => {
      return <div>{value}</div>;
    });
  } catch (error) {}

  postDetails.innerHTML += `<div class="flex-item">
  <h1`;
}

fetchWithToken(API_HOST_URL + "/posts");
