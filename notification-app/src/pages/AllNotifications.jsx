import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications().then(setNotifications);
  }, []);

  return (
    <div>
      <h2>All Notifications</h2>

      {notifications.map((n) => (
        <div key={n.ID}>
          <h4>{n.Type}</h4>
          <p>{n.Message}</p>
          <small>{n.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default AllNotifications;