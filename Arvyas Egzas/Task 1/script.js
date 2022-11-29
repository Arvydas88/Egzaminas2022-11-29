/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg / 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
-------------------------------------------------------------------------- */

const form = document.querySelector("form");
const output = document.querySelector("#output");
form.addEventListener("submit", (event) => {
    event.preventDefault();
  const inputValue = event.target.search.value; 
  const pounds = inputValue * 2.2046;
  const oz = inputValue / 35.274;
  const grams = inputValue / 0.0010000;
  

  const message = ` ${pounds} lb ${oz } oz ${grams} grams   `;

  output.append(message); 
});



