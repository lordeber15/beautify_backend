const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const allDataFunctions = require("./src/data/allDataFunctions.js");
// Syncing all the models at once.
const port = process.env.PORT || 3001;

conn.sync({ alter: true }).then(() => {
  server.listen(port, async () => {
    console.log("%s listening at ", port); // eslint-disable-line no-console
    allDataFunctions();
  });
});
