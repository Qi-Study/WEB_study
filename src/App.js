import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
