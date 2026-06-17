const axios = require("axios");
const Log = require("./logger");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtcmFteWFhbXJhbXlhYTEyQGdtYWlsLmNvbSIsImV4cCI6MTc4MTY4MDQxMiwiaWF0IjoxNzgxNjc5NTEyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiN2VlN2RkZDQtMjIxOC00NzY5LTljZDgtZmIwN2M0NjY2YjRkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmFteWFhIG0iLCJzdWIiOiI5YmVlYjkxYy0xMDkwLTQxNWYtYmZjYi1lNDQwZjA5YjI5MzMifSwiZW1haWwiOiJtcmFteWFhbXJhbXlhYTEyQGdtYWlsLmNvbSIsIm5hbWUiOiJyYW15YWEgbSIsInJvbGxObyI6InZoMTI5NzkiLCJhY2Nlc3NDb2RlIjoianVGcGh2IiwiY2xpZW50SUQiOiI5YmVlYjkxYy0xMDkwLTQxNWYtYmZjYi1lNDQwZjA5YjI5MzMiLCJjbGllbnRTZWNyZXQiOiJjTUNTY1FDd2FFYkdoYXVDIn0.ItteK-YFKfsj5uF4Mu33K6hKfwwgj1JvwXFHZw2rNz0";

const NOTIFICATION_API =
  "http://4.224.186.213/evaluation-service/notifications";

async function fetchNotifications() {
  try {

    await Log(
      "backend",
      "info",
      "service",
      "Fetching notifications from API"
    );

    const response = await axios.get(
      NOTIFICATION_API,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );

    return response.data;

  } catch (error) {

    await Log(
      "backend",
      "error",
      "service",
      error.message
    );

    console.log(error.response?.data);

    return { notifications: [] };
  }
}

function getWeight(type) {

  const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  return weights[type] || 0;
}

function getTop10Notifications(notifications) {

  return notifications
    .sort((a, b) => {

      const weightA = getWeight(a.Type);
      const weightB = getWeight(b.Type);

      if (weightB !== weightA) {
        return weightB - weightA;
      }

      return new Date(b.Timestamp) -
             new Date(a.Timestamp);
    })
    .slice(0, 10);
}

async function main() {

  const data = await fetchNotifications();

  const notifications =
    data.notifications || [];

  console.log("\nALL NOTIFICATIONS\n");
  console.table(notifications);

  const top10 =
    getTop10Notifications(notifications);

  console.log("\nTOP 10 PRIORITY NOTIFICATIONS\n");
  console.table(top10);

  await Log(
    "backend",
    "info",
    "handler",
    "Top 10 notifications generated"
  );
}

main();