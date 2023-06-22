import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BooksContextProvider from './context/BooksContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider domain={import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_AUTH_KEY}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <BooksContextProvider>
          <App />
        </BooksContextProvider>
      </Auth0Provider>

    </BrowserRouter>

  </React.StrictMode>,
)
