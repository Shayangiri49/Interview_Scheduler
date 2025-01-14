# Interview Scheduler

## Overview
The Interview Scheduler is a web application designed to streamline the process of scheduling, managing, and rescheduling interviews. It features a big calendar interface, time zone support, and mock notification integration.

---

## Setup Instructions

### Prerequisites
- **Node.js**: Ensure Node.js (v14 or higher) is installed on your system.
- **Package Manager**: npm or yarn (npm is used in this guide).

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/interview-scheduler.git
   cd interview-scheduler
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173` to view the application in your browser.

4. **Build for Production**
   To create a production-ready build:
   ```bash
   npm run build
   ```
   The optimized build files will be located in the `build/` directory.

5. **Environment Variables** (Optional)
   To configure environment-specific variables (e.g., time zone), create a `.env` file in the root directory:
   ```env
   REACT_APP_TIMEZONE=America/New_York
   ```

---

## Design Decisions

1. **Component-Based Structure**:
   - The application uses React's component-driven approach to ensure reusability and maintainability.
   - Key components include:
     - `CalendarView`: Displays the interview schedule with drag-and-drop functionality.
     - `InterviewForm`: Handles adding and editing interviews.
     - `InterviewList`: Displays a list of upcoming interviews.

2. **Library Selection**:
   - **`react-big-calendar`**: Chosen for its robust support for calendar views and drag-and-drop scheduling.
   - **`react-toastify`**: Provides non-intrusive notifications for user actions.
   - **`date-fns` and `date-fns-tz`**: Simplifies date formatting and time zone handling.

3. **Responsive Design**:
   - Tailwind CSS was used for a responsive and modern UI design.
   - Ensured proper scaling and layout adjustments for mobile, tablet, and desktop views.

4. **State Management**:
   - Leveraged React's `useState` and `useEffect` hooks for local state management.
   - LocalStorage is used to persist interview data.

---

## Assumptions

1. **Mock Data**:
   - Candidate and interviewer names are predefined for simplicity.
   - Events are stored locally without backend integration.

2. **Time Zone Handling**:
   - The app defaults to a predefined time zone (`America/New_York`), which can be configured.
   - No user-specific time zone customization is implemented.

3. **Drag-and-Drop Behavior**:
   - Events are resized or rescheduled by directly manipulating the calendar view.
   - Validations for overlapping events are not implemented.

---

## Challenges Faced

1. **Time Zone Compatibility**:
   - Ensuring consistent time zone conversion required using `date-fns-tz` for accurate formatting and manipulation.

2. **Responsive UI**:
   - Adapting complex calendar components for smaller screens while retaining functionality was challenging, but Tailwind CSS simplified the process.

3. **Local Storage Persistence**:
   - Managing data persistence without a backend posed limitations in scalability and reliability for larger datasets.

---

## Future Improvements

1. **Backend Integration**:
   - Add support for cloud-based storage and APIs to manage interviews.
2. **User Authentication**:
   - Implement user roles and permissions.
3. **Conflict Resolution**:
   - Add checks for scheduling conflicts or overlapping events.
4. **Custom Time Zones**:
   - Allow users to configure their preferred time zones dynamically.

---

## License
This project is licensed under the MIT License.
