import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
