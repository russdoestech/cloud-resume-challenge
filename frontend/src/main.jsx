import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router';
import 'css/style.css'
import App from './App.jsx'

createRoot(document.querySelector('main')).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
