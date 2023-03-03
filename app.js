const express = require("express");
const app = express();
const cors = require("cors");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

let rotateAngle = "0.005";
let nr = "0.005";
app.get("/", (req, res) => {
  res.render("home");
});
const { exec, spawn } = require("child_process");

exec("g++ hello.cpp", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  app.post("/fan", (req, res) => {
    let { factor } = req.body;
    console.log(factor);
    const child = spawn("./a"); //where a is the exe file generated on compiling the code.let ]

    child.stdin.write(factor + " " + rotateAngle + " " + nr);
    child.stdin.end();
    child.stdout.setEncoding("utf8");

    let z = "";
    child.stdout.on("data", function (data) {
      console.log("stdout: " + data);
      let arr = data.split(" ");
      console.log(data);
      rotateAngle = arr[0];
      nr = arr[1];
      data = data.toString();
      a = data;
    });
    return res.json({ nr, rotateAngle });
  });
});

app.listen(3000, () => console.log("At 3000"));
