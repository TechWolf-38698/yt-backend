// Create a basic express server
const express = require("express");
const cors = require("cors");
const connectMongoose = require("./Mongoose/db");
const auth = require("./routes/auth");
const video = require("./routes/video");
const filehandler = require("./routes/filehandler");
const fileUpload = require("express-fileupload");

// Connect to MongoDB
connectMongoose();

// Creating the app
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(express.static("public"));
app.use("/api", auth);
app.use("/api", video);
app.use("/uploads", filehandler);

app.listen(process.env.PORT, () => {
  console.log(`http://127.0.0.1:${port}`);
});
