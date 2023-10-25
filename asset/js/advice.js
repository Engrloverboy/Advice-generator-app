const adviceId = document.querySelector("#adviceId");
const advicetext = document.querySelector("#advicetext");
const btn = document.querySelector("#btn");

fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    console.log(response.json());
  })
  .then((adviceData) => {
    const adviceNum = adviceData.slip.id;
    const advice = adviceData.slip.advice;

    adviceId.textContent = adviceNum;
    adviceText.innerHTML = `<p>${advice}</p>`;
  })
  .catch((error) => {
    console.log(Error);
  });
