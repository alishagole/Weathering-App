const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(cors());

app.get("/api", (res, req) => {
  console.log("chalau hai chalau ");
});

app.listen(PORT, () => {
  console.log(`server is running on this ${PORT}`);
});
