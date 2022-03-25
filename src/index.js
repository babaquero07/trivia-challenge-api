const app = require("./app");
// const logger = require("./utils/logger");

const server = app.listen(app.get("port"), () => {
  console.log(`Server running in port ${app.get("port")}`);
  // logger.info(`Server running in port ${app.get("port")}`);
});

module.exports = { server, app };
