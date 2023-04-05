const express = require("express");
const fs = require("fs");
const app = express();
let data = [{ id: 1, name: "successful", price: 3 }];
app.use(express.json());
app.get("/course", (req, res) => {
  console.log(data);
  res.status(404).json({ messaege: "successful" });
});
app.post("/course", (req, res) => {
  // console.log(req.query);
  data.push(req.body);
  //   console.log(req.body);
  res.status(200).send({ masee: "succsessful" });
});
app.patch("/course:id", (req, res) => {
  let id = req.id;
  let;
});
app.listen(5000, () => {
  console.log("server runnin on");
});
