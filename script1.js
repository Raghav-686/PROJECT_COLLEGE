let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".items .item");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");

    if (counter === 0) 
    {

      firstSelection = card.getAttribute("animal");
      counter++;
    } 
    else 
    {

      secondSelection = card.getAttribute("animal");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".item[animal='" + firstSelection + "']"
        );



        correctCards[0].classList.add("checked");


        correctCards[0].classList.remove("clicked");


        correctCards[1].classList.add("checked");


        correctCards[1].classList.remove("clicked");


      } 
      
      else {
        const incorrectCards = document.querySelectorAll(".item.clicked");



        incorrectCards[0].classList.add("shake");


        incorrectCards[1].classList.add("shake");





        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");


          incorrectCards[0].classList.remove("clicked");


          incorrectCards[1].classList.remove("shake");


          incorrectCards[1].classList.remove("clicked");


        }, 800);

      }
    }

  });
});
 
function countdown() { 
    setTimeout('Decrement()', 6); 
}