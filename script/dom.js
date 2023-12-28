const search = document.getElementById("search");
search.value = "tv";
search.disabled = true;
search.style.backgroundColor = "wheat";

const cards = document.getElementsByClassName("card");
// cards[0].style.backgroundColor = "gray";
for (let i = 0; i < cards.length; i++) {
  cards[i].style.backgroundColor = "gray";
}
// console.log(cards);

const comp = document.querySelectorAll("div");
console.log(comp);
