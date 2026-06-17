const writeLog = require("./logger");

async function testLogger() {

  await writeLog(
    "frontend",
    "info",
    "api",
    "Notification fetch started"
  );

  await writeLog(
    "frontend",
    "debug",
    "component",
    "Notification card rendered"
  );

  await writeLog(
    "frontend",
    "warn",
    "state",
    "Notification list is empty"
  );

  console.log("Logs sent");
}

testLogger();