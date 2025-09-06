import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import HackerPage from './components/HackerPage';
import './styles/App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={FeedbackForm} />
                <Route path="/hacker" component={HackerPage} />
            </Switch>
        </Router>
    );
}

export default App;