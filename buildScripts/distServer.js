import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("users", function (req, res) {
  // TODO:This is my End-point AND you have to Replace for the data with the database
  res.json([{ id: 1, firstName: "Oscary", lastName: "García" }]);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
