# Feedback Website

This project is a simple feedback collection website built with React. It allows users to submit their feedback about a session, including their name, registration number, a score indicating how much they liked the session, and additional comments. Upon submission, users are redirected to a hacker-themed page that displays a humorous message.

## Project Structure

```
feedback-website
├── src
│   ├── components
│   │   ├── FeedbackForm.jsx      # Component for the feedback form
│   │   ├── HackerPage.jsx        # Component for the hacker-themed page
│   │   └── ScoreBar.jsx          # Component for the scoring bar
│   ├── styles
│   │   ├── FeedbackForm.css       # Styles for the feedback form
│   │   ├── HackerPage.css         # Styles for the hacker-themed page
│   │   └── App.css                # Global styles for the application
│   ├── App.jsx                    # Main application component
│   └── index.js                   # Entry point of the application
├── public
│   └── index.html                 # Main HTML file for the React application
├── package.json                   # Configuration file for npm
└── README.md                      # Documentation for the project
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd feedback-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- User-friendly feedback form with input fields for name and registration.
- Scoring bar to capture user satisfaction.
- Text area for additional comments.
- Redirects to a humorous hacker-themed page upon submission.

## Technologies Used

- React
- React Router
- CSS for styling

## License

This project is licensed under the MIT License.