const container = document.getElementById("container");
const loader = document.getElementById("loader");
const jokeCatEl = document.getElementById("joke-category");
const jokeTextEl = document.getElementById("joke-text");
const randomJokeBtn = document.getElementById("randomJokeBtn");
const programmingJokeBtn = document.getElementById("programmingJokeBtn");
const punJokeBtn = document.getElementById("punJokeBtn");
const miscJokeBtn = document.getElementById("miscJokeBtn");
const darkJokeBtn = document.getElementById("darkJokeBtn");

function loading(){
  loader.hidden = false;
  container.hidden = true;
}
function unLoading() {
  if(!loader.hidden){
    loader.hidden = true;
    container.hidden = false;
  }
}
const jokeURLs = [
  "https://v2.jokeapi.dev/joke/Any?type=single",
	"https://v2.jokeapi.dev/joke/Programming?type=single",
	"https://v2.jokeapi.dev/joke/Pun?type=single",
	"https://v2.jokeapi.dev/joke/Miscellaneous?type=single",
	"https://v2.jokeapi.dev/joke/Dark?type=single",
];
async function getRandomJoke() {
  loading();
  try {
    const response = await fetch(jokeURLs[0]);
    const data = await response.json();
    displayJoke(data.category, data.joke);
    unLoading();
  }catch(error){
    getRandomJoke();
  }
}

async function getPrgorammingJoke(){
  loading();
  try {
    const res = await fetch(jokeURLs[1]);
    const data = await res.json();
    displayJoke(data.category, data.joke);
    unLoading();
  }catch(error){
    getPrgorammingJoke();
  }
}

async function getPunJoke() {
  loading();
  try {
    const res = await fetch(jokeURLs[2]);
    const data = await res.json();
    displayJoke(data.category, data.joke);
    unLoading();
  }catch(error){
    getPunJoke();
  }
}

async function getMiscJoke() {
  loading();
	try {
    const res = await fetch(jokeURLs[3]);
		const data = await res.json();
    displayJoke(data.category, data.joke);
    unLoading();
	} catch (error) {
    getMiscJoke();
	}
}

async function getDarkJoke() {
  loading();
  try {
    const res = await fetch(jokeURLs[4]);
		const data = await res.json();
    displayJoke(data.category, data.joke);
    unLoading();
  } catch (error) {
		getDarkJoke();
	}
}

function displayJoke(category, joke) {
  jokeCatEl.innerText = category;
  jokeTextEl.innerText = joke;
}

randomJokeBtn.addEventListener("click", getRandomJoke);
programmingJokeBtn.addEventListener("click", getPrgorammingJoke);
miscJokeBtn.addEventListener("click", getMiscJoke);
punJokeBtn.addEventListener("click", getPunJoke);
darkJokeBtn.addEventListener("click", getDarkJoke);

getRandomJoke();