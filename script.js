/* --------------------------------------------------
   Floating Sports Balls
-------------------------------------------------- */

const ballTypes = [
  "basketball.png",
  "football.png",
  "soccer.png",
];

function createBall() {
  const ball = document.createElement("img");
  ball.src = ballTypes[Math.floor(Math.random() * ballTypes.length)];
  ball.classList.add("ball");

  // random horizontal position
  ball.style.left = Math.random() * 100 + "vw";

  // random animation duration
  ball.style.animationDuration = 6 + Math.random() * 4 + "s";

  // append to the floating container
  document.querySelector(".floating-balls").appendChild(ball);

  // remove after animation
  setTimeout(() => {
    ball.remove();
  }, 10000);
}

// spawn a ball every 800ms
setInterval(createBall, 800);


/* --------------------------------------------------
   Price Sorter (Low → High)
-------------------------------------------------- */

document.getElementById("sortPrice").addEventListener("click", () => {
  const grid = document.querySelector(".product-grid");
  const cards = Array.from(grid.querySelectorAll(".product-card"));

  const sorted = cards.sort((a, b) => {
    const priceA = parseFloat(
      a.querySelector(".price").textContent.replace(/[^0-9.]/g, "")
    );
    const priceB = parseFloat(
      b.querySelector(".price").textContent.replace(/[^0-9.]/g, "")
    );
    return priceA - priceB;
  });

  sorted.forEach(card => grid.appendChild(card));
});
