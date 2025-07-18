const fs = require("fs");

const logLevels = ["INFO", "WARN", "ERROR", "DEBUG"];
const messages = [
  "User logged in",
  "File uploaded",
  "Database connection failed",
  "Cache cleared",
  "Payment processed",
  "Token expired",
  "Retrying request",
];

function getRandomLog() {
  const level = logLevels[Math.floor(Math.random() * logLevels.length)];
  const message = messages[Math.floor(Math.random() * messages.length)];
  const timestamp = new Date().toISOString();
  return `[${timestamp}] ${level}: ${message}`;
}

setInterval(() => {
  const log = getRandomLog();
  console.log('application-create')
}, 2000);
