const playerData = JSON.parse(localStorage.getItem("playerData"));
const ul = document.querySelector("ul");

console.log(playerData)
let text = "";

for (let i = 0; i < playerData.length; i++) {
  let text = "";
  const li = document.createElement("li");

  text = `${playerData[i].name} : ${playerData[i].score}`;
  console.log(text);
  li.textContent = text;
  ul.append(li);
}