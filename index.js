const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const allDataFunctions = require("./src/data/allDataFunctions.js");
// Syncing all the models at once.
const PORT = process.env.PORT || 3001;

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    allDataFunctions();
  });
});
