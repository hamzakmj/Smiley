import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/Nav';


createRoot(document.getElementById('nav')).render(
  <Nav />);
createRoot(document.getElementById('root')).render(
    <App />
);
