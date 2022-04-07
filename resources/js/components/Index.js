import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tutorial from './Tutorial';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Tutorial} exact/>
            </Switch>
        </main>
    )
}

if (document.getElementById('mainView')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('mainView'));
}
