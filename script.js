document.querySelector("button").addEventListener("click", function () {
    Sound();
    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;
    let i1 = `img/${p1}.png`;
    let i2 = `img/${p2}.png`;
    document.querySelector("#p1").src = i1;
    document.querySelector("#p2").src = i2;
    if (p1 > p2) {
      document.querySelector("h1").textContent = "🎋Player 1 wins🎋";
    } else if (p1 < p2) {
      document.querySelector("h1").textContent = "🎋Player 2 wins🎋";
    } else {
      document.querySelector("h1").textContent = "🎈Oops! It's a DRAW🎈";
    }
  });
  
  function Sound() {
    let audio = new Audio("img/b.mp3"); //for sound
    audio.play();
  }
