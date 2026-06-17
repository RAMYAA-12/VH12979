import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtcmFteWFhbXJhbXlhYTEyQGdtYWlsLmNvbSIsImV4cCI6MTc4MTY4MDQxMiwiaWF0IjoxNzgxNjc5NTEyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiN2VlN2RkZDQtMjIxOC00NzY5LTljZDgtZmIwN2M0NjY2YjRkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmFteWFhIG0iLCJzdWIiOiI5YmVlYjkxYy0xMDkwLTQxNWYtYmZjYi1lNDQwZjA5YjI5MzMifSwiZW1haWwiOiJtcmFteWFhbXJhbXlhYTEyQGdtYWlsLmNvbSIsIm5hbWUiOiJyYW15YWEgbSIsInJvbGxObyI6InZoMTI5NzkiLCJhY2Nlc3NDb2RlIjoianVGcGh2IiwiY2xpZW50SUQiOiI5YmVlYjkxYy0xMDkwLTQxNWYtYmZjYi1lNDQwZjA5YjI5MzMiLCJjbGllbnRTZWNyZXQiOiJjTUNTY1FDd2FFYkdoYXVDIn0.ItteK-YFKfsj5uF4Mu33K6hKfwwgj1JvwXFHZw2rNz0";

export const getNotifications = async () => {
  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }
  );

  return response.data.notifications;
};