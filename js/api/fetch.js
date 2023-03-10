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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm5hbWUiOiJteV91c2VybmFtZSIsImVtYWlsIjoiZmlyc3QubGFzdEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiY3JlZGl0cyI6MTAzMiwid2lucyI6W10sImlhdCI6MTY3Nzc1NTcxMn0.EXdxlT6bB4b_klFFsmWHxF2EejuO6OWvOMf6O7suMy0",
  },
};

async function fetchURL() {
  const response = await fetch(
    `https://api.noroff.dev/api/v1/auction/auth/login`,
    requestLogin
  );
  const product = await response.json();
  console.log(product);
}
