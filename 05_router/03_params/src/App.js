import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';
import MenuDetails from './pages/MenuDetails';
import MenuSearchResult from './pages/MenuSearchResult';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="menu">
            <Route index element={<Menu />} />
            <Route path=":menuCode" element={<MenuDetails />} />
            <Route path="search" element={<MenuSearchResult />} />
          </Route>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;