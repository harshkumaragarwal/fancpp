function init() {
  const hiddenBtns = document.querySelectorAll(".hidden");
  const on = document.getElementById("on");
  on.addEventListener("click", function () {
    hiddenBtns.forEach((item) => (item.style.display = "inline-block"));
    fetch("http://localhost:3000/fan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        factor: 3,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        nr = data.nr;
        rotateAngle = data.rotateAngle;
      })
      .catch((err) => console.log("Catched : ", err));
  });

  const off = document.getElementById("off");
  off.addEventListener("click", function () {0
    hiddenBtns.forEach((item) => (item.style.display = "none"));
    fetch("http://localhost:3000/fan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        factor: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        nr = data.nr;
        rotateAngle = data.rotateAngle;
      })
      .catch((err) => console.log("Catched : ", err));
  });

  const clockwise = document.getElementById("clockwise");
  clockwise.addEventListener("click", function () {
    fetch("http://localhost:3000/fan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        factor: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        nr = data.nr;
        rotateAngle = data.rotateAngle;
      })
      .catch((err) => console.log("Catched : ", err));
  });

  const anticlockwise = document.getElementById("anticlockwise");
  anticlockwise.addEventListener("click", async function () {
    fetch("http://localhost:3000/fan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        factor: -1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        nr = data.nr;
        rotateAngle = data.rotateAngle;
      })
      .catch((err) => console.log("Catched : ", err));
  });

  const increaseButton = document.getElementById("increasesButton");
  increaseButton.addEventListener("click", function () {
    fetch("http://localhost:3000/fan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        factor: 2,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        nr = data.nr;
        rotateAngle = data.rotateAngle;
      })
      .catch((err) => console.log("Catched : ", err));
  });

  const decreaseButton = document.getElementById("decreasesButton");
  decreaseButton.addEventListener("click", function () {
    fetch("http://localhost:3000/fan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        factor: 0.5,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        nr = data.nr;
        rotateAngle = data.rotateAngle;
      })
      .catch((err) => console.log("Catched : ", err));
  });

  const canvas = document.getElementsByTagName("canvas")[0];
  const c = canvas.getContext("2d");

  c.translate(400, 400);
  let rotateAngle = 0.005;
  let nr =rotateAngle;

  function draw(time) {
    //console.log(time);
    c.clearRect(-400, -400, canvas.width, canvas.height);
    c.beginPath();
    c.fillStyle = "hsl(25,100%,50%)";
    c.moveTo(200, 0);

    for (let angle = 0; angle < 2 * Math.PI; angle += 0.01) {
      let x = 200 * Math.cos(3 * angle) * Math.cos(angle);
      let y = 200 * Math.cos(3 * angle) * Math.sin(angle);
      c.lineTo(x, y);
    }

    c.fill();
    c.rotate(rotateAngle);
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

//invoke function init once document is fully loaded
window.addEventListener("load", init);
