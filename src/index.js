import React, { StrictMode } from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);