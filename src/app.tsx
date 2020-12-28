import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Login from './containers/auth/login';
import Registration from './containers/auth/registration';
import ResetPassword from './containers/auth/reset-password';
import Restore from './containers/auth/restore';

import Language from './containers/init/language';
import Themes from './containers/init/themes';
import Personalizing from './containers/init/personalizing';

import Suggestions from './containers/pages/suggestions';
import Coursepage from './containers/pages/coursepage';
import HomePage from './containers/homepage';

import './app.css';

const App = () => (
    <BrowserRouter basename='/frontera'>
        <HomePage/>
    </BrowserRouter>
);

export default App;