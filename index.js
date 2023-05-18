const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const allDataFunctions = require("./src/data/allDataFunctions.js");
const port = process.env.PORT || 3001;

// Syncing all the models at once.

conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    allDataFunctions();
  });
});
