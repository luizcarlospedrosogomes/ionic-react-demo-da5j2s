import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App';

render(<App />, document.getElementById('root'));
