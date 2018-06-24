const express = require("express");

let app = express();

app.post("/up",function(req,res) {
  res.json();
});

app.listen(4000);
