const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
app.use(express.json());
const alldata = [];
app.listen(PORT, () => {
  console.log("akus");
});
app.get("/", (req, res) => {
  res.status(200).json(alldata);
});
app.post("/a", (req, res) => {
  const newData = req.body;
  alldata.push(newData);
  console.log(`new data ${alldata}`);
  res.status(200).json({ message: "Data added successfully" });
});
