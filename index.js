function lovecalculation() {
  var loveScore = Math.floor(Math.random() * 100) + 1;
  const boyName = document.getElementById("bn").value;

  const girlName = document.getElementById("bn").value;

  if (boyName == "" || girlName == "") {
    document.getElementById("result").innerText = "Please enter valid name.";
    return;
  }

  if (loveScore > 70) {
    document.getElementById("result").innerText =
      "your love score is " + loveScore + ". Made for each other.";
  } else if (loveScore < 70 && loveScore > 30) {
    document.getElementById("result").innerText =
      "your love score is " + loveScore + ". There would be some challenges.";
  } else {
    document.getElementById("result").innerText =
      "your love score is " + loveScore + ". It will never work out.";
  }
}
