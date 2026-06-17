import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

function PriorityNotifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    getNotifications().then((data) => {

      const weights = {
        Placement: 3,
        Result: 2,
        Event: 1
      };

      const top10 = [...data]
        .sort((a, b) => {
          const wa = weights[a.Type];
          const wb = weights[b.Type];

          if (wb !== wa) return wb - wa;

          return (
            new Date(b.Timestamp) -
            new Date(a.Timestamp)
          );
        })
        .slice(0, 10);

      setNotifications(top10);
    });

  }, []);

  return (
    <div>
      <h2>Priority Notifications</h2>

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

export default PriorityNotifications;