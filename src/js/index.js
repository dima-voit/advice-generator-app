const urlApi = "https://api.adviceslip.com/advice";
const main = document.querySelector(".main");

const getAdvice = async () => {
  const response = await fetch(urlApi);
  const data = await response.json();

  const container = document.createElement("div");
  container.classList.add("container");
  
  const adviceId = document.createElement("h1");
  adviceId.classList.add("advice-title");
  adviceId.innerHTML = `Advice #${data.slip.id}`;

  const adviceQuote = document.createElement("div");
  adviceQuote.classList.add("advice-quote");
  adviceQuote.innerHTML = `<p>${data.slip.advice}</p>`;

  const adviceDivider = document.createElement("picture");
  adviceDivider.classList.add("advice-divider");
  const source = document.createElement("source");
  source.setAttribute("media", "(min-width: 768px)");
  source.setAttribute("srcset", "src/images/pattern-divider-desktop.svg");
  const img = document.createElement("img");
  img.setAttribute("src", "src/images/pattern-divider-mobile.svg");
  img.setAttribute("alt", "Divider");

  const generateAdvice = async () => {
    const response = await fetch(urlApi);
    const data = await response.json()
    adviceId.innerHTML = `Advice #${data.slip.id}`;
    adviceQuote.innerHTML = `<p>${data.slip.advice}</p>`;
  }

  const adviceBtn = document.createElement("button");
  adviceBtn.classList.add("advice-btn");
  const iconDice = document.createElement("img");
  iconDice.setAttribute("src", "src/images/icon-dice.svg");
  iconDice.setAttribute("alt", "Dice");
  adviceBtn.addEventListener("click", generateAdvice)
  
  adviceBtn.append(iconDice);
  adviceDivider.append(source);
  adviceDivider.append(img);
  container.append(adviceId);
  container.append(adviceQuote);
  container.append(adviceDivider);
  container.append(adviceBtn);
  main.append(container);
}

getAdvice();
