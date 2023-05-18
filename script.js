const p = document.querySelector("p");
const btn = document.querySelector(".btn");
const span = document.querySelector("span");
const container = document.querySelector(".container");
const diceRoll = async function () {
  try {
    const resp = await fetch(`https://api.adviceslip.com/advice`);
    const data = await resp.json();
    const { advice, id } = data.slip;
    p.innerText = `" ${advice} " `;
    console.log(data);
    document.querySelector("h5").textContent = `Advice #${id}`;
    span.innerHTML = id;
  } catch (error) {
    console.log(error);
  }
};
btn.addEventListener("click", function () {
  container.classList.remove("hide");
  diceRoll();
});
