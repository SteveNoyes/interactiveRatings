// hold variable that client selects 
// and insert it into thank you text area

let selected = 0;

function selectionVar(x) {
  selected = x;
}

function submitBtn() {
  // check if selected is 0
  if (selected == 0) {
    alert("Please select a number before touching the button.");
  } else {
    // use selected variable in thank you card
    document.getElementById("selectedNum").innerHTML = selected;
    // remove hiddenCard class from ratingsCard
    var periodAhh = document.getElementById("periodAhh");
    periodAhh.classList.remove("hiddenCard");
    // add hiddenCard class to thankYouCard
    var periodUhh = document.getElementById("periodUhh");
    periodUhh.classList.add("hiddenCard");
  }

}