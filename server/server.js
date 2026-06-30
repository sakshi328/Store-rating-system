require("dotenv").config();

const app = require("./src/app");

// Database Connection
require("./src/config/db");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});