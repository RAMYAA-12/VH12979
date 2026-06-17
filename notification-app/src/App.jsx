import { BrowserRouter, Routes, Route, Link }
from "react-router-dom";

import AllNotifications
from "./pages/AllNotifications";

import PriorityNotifications
from "./pages/PriorityNotifications";

function App() {

  return (
    <BrowserRouter>

      <h1>Notification System</h1>

      <nav>
        <Link to="/">All Notifications</Link>
        {" | "}
        <Link to="/priority">
          Priority Notifications
        </Link>
      </nav>

      <Routes>

        <Route
          path="/"
          element={<AllNotifications />}
        />

        <Route
          path="/priority"
          element={<PriorityNotifications />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;