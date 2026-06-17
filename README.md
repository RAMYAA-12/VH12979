# Stage 1 - Priority Inbox Notification Service

## Overview

This project implements a Priority Inbox Notification Service that fetches notifications from the Affordmed Notification API, prioritizes them, and displays the Top 10 notifications based on priority and recency.

The project also integrates the Affordmed Logging Middleware to record application events and errors.

---

## Features

* Fetch notifications from the Notification API
* Prioritize notifications based on notification type
* Sort notifications by:

  * Priority (Placement > Result > Event)
  * Recency (latest notifications first)
* Display Top 10 notifications
* Logging integration using Affordmed Logging API
* Error handling and monitoring

---

## Project Structure

```text
VH12979/
│
├── logger.js
├── stage1.js
├── Notification_System_Design.md
├── README.md
├── package.json
└── .gitignore
```

---

## Priority Rules

| Notification Type | Priority |
| ----------------- | -------- |
| Placement         | 3        |
| Result            | 2        |
| Event             | 1        |

Notifications are sorted in descending order of priority. If two notifications have the same priority, the most recent notification is ranked higher.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/RAMYAA-12/VH12979.git
cd VH12979
```

Install dependencies:

```bash
npm install
```

---

## Configuration

Update the access token inside:

```javascript
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";
```

in:

* logger.js
* stage1.js

---

## Running the Application

```bash
node stage1.js
```

---

## Logging

The application uses the Affordmed Logging API to record:

* Notification fetch operations
* Successful processing events
* Application errors
* Priority inbox generation events

---

## Design Approach

1. Fetch notifications from the API.
2. Assign priority based on notification type.
3. Sort notifications by priority and timestamp.
4. Select the Top 10 notifications.
5. Display results.
6. Log all important events.

Detailed design information is available in:

```text
Notification_System_Design.md
```

---

## Complexity Analysis

Sorting notifications:

```text
O(n log n)
```

Selecting Top 10 notifications:

```text
O(10)
```

Overall complexity:

```text
O(n log n)
```

---

## Author

Ramyaa M

Roll Number: VH12979
