require("dotenv").config();
require("./src/models/User");
require("./src/models/Product");
require("./src/models/Category");

const app = require("./src/app");
const sequelize = require("./src/config/database");

sequelize.sync({ alter: true });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;