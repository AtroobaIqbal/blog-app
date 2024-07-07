const express = require('express')
const router = require("./routes/blog")
const dbconnect = require("./db")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 5000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/Blog", router);

app.listen(port, async () => {
  try{
    await dbconnect();
    console.log(`Example app listening on port ${port}`);
} catch (error) {
  console.error("Failed to connect to the database:", error);
  process.exit(1); // Exit the process with a failure code
  }
});
  