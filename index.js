const request = require("express");
const app = request();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
// Only categories of news
const categories = require("./data/categories.json");
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

// to get all news
const news = require("./data/news.json");
app.get("/news", (req, res) => {
  res.send(news);
});

// to get specific news by id
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/", (req, res) => {
  res.send("News is Coming Soon..");
});
app.listen(port, () => {
  console.log(`Latest News is Coming on Port : ${port}`);
});
