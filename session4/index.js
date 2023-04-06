const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// GET ALL TEAMS
app.get("/team", (req, res) => {
  // console.log();
  fs.readFile("teams.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(data);
  });
});
// ADD NEW TEAM
app.post("/team", (req, res) => {
  fs.readFile("teams.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const info = JSON.parse(data);
    let newData = req.body;
    info.push(newData);
    fs.writeFile("teams.json", JSON.stringify(info), (err) => {
      if (err) {
        console.log(err);
        return;
      }
      // res.send(req.body);
      res.send("successful");
    });
  });
});
// UPDATA DATA
app.patch("/team/:id", (req, res) => {
  fs.readFile("teams.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const info = JSON.parse(data);
    const { id } = req.params;
    info.
  });
});
app.delete("/team/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile("teams.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const info = JSON.parse(data);
    const idx = info.findIndex((team) => team.id == id);
    // res.send(${idx});
    if (idx == -1) {
      res.status(404).send("Team not found");
      return;
    }
    info.splice(idx, 1);
    fs.writeFile("teams.json", JSON.stringify(info), (err) => {
      if (err) {
        console.log(err);
        return;
      }res.send("successfull !");
    });
    
  });
});
app.listen(5000, () => {
  console.log("shoura on da code");
});
