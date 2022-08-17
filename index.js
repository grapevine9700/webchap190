import express from "express";
import path from "path";
const __dirname = path.resolve();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/testf", (req, res) => {
  res.send("왜 다른 폴더가 새로 생기나");
});

app.listen(port, () => {
  console.log(`서버 실행 (${port})`);
});
