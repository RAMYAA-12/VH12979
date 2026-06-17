const axios = require("axios");

// Logging API URL
const LOG_API = "http://4.224.186.213/evaluation-service/logs";

// Paste your latest valid token here
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtcmFteWFhbXJhbXlhYTEyQGdtYWlsLmNvbSIsImV4cCI6MTc4MTY4MDQxMiwiaWF0IjoxNzgxNjc5NTEyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiN2VlN2RkZDQtMjIxOC00NzY5LTljZDgtZmIwN2M0NjY2YjRkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmFteWFhIG0iLCJzdWIiOiI5YmVlYjkxYy0xMDkwLTQxNWYtYmZjYi1lNDQwZjA5YjI5MzMifSwiZW1haWwiOiJtcmFteWFhbXJhbXlhYTEyQGdtYWlsLmNvbSIsIm5hbWUiOiJyYW15YWEgbSIsInJvbGxObyI6InZoMTI5NzkiLCJhY2Nlc3NDb2RlIjoianVGcGh2IiwiY2xpZW50SUQiOiI5YmVlYjkxYy0xMDkwLTQxNWYtYmZjYi1lNDQwZjA5YjI5MzMiLCJjbGllbnRTZWNyZXQiOiJjTUNTY1FDd2FFYkdoYXVDIn0.ItteK-YFKfsj5uF4Mu33K6hKfwwgj1JvwXFHZw2rNz0";

async function Log(stack, level, packageName, message) {

  console.log("Sending Log:", {
    stack,
    level,
    package: packageName,
    message
  });

  try {

    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log Success:", response.data);

    return response.data;

  } catch (error) {

    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);

    return null;
  }
}

module.exports = Log;