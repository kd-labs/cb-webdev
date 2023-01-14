const BASE_URL = "https://api.github.com/users";
const inputEl = document.getElementById("user");
const submitButton = document.getElementById("get-user-details");

submitButton.addEventListener("click", function () {
  const userName = inputEl.value;
  console.log(`value from input : ${userName}`);
  const url = BASE_URL + "/" + userName;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      updateProfileDetails(data);
    })
    .catch((error) => console.error("kuch gadbad"));
});

function updateProfileDetails(data) {
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("bio").innerHTML = data.bio;
  document.getElementById("followers").innerHTML =
    data.followers + " Followers";
  document.getElementById("following").innerHTML =
    data.following + " Following";
  document.getElementById("profile").innerHTML = `
            <img src="${data.avatar_url}" />
            `;
}
