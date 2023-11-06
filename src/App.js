import Login from './components/Login/Login'; 
import Main from './components/Main/Main';
import MainWrite from './components/Main/MainWrite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/write' element={<MainWrite />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
