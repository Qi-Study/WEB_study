import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
