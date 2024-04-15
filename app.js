const express = require("express");
const path = require("path"); // node에서 기본으로 제공하는 패키지
const app = express();
const port = 3000;

app.set("views", "templates"); // 뷰 디렉토리를 'templates'로 설정
app.set("view engine", "ejs"); // 뷰 엔진을 EJS로 설정

app.use("/HTML", express.static(path.join(__dirname, "HTML")));

// get method 요청에 대한 라우팅
app.get("/", (req, res) => {
  const data = {
    name: "JEONG MIN",
    age: "20",
    skills: ["JS", "Node.js", "React"],
  };
  res.render("index", data);
});

// 예) http://localhost:3000/test/clover?lang=ko
app.get("/test/:name", (req, res) => {
  console.log("path", req.path); // '/test/clover'
  console.log("params", req.params); // {name: 'clover}
  console.log("query", req.query); //  {lang: 'ko'}
  res.send("콘솔");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log(path.join(__dirname, "HTML"));
});
