import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
import SearchPage from './page/SearchPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/train' element={<SearchPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
