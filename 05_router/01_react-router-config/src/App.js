import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  /*
    [ 라우팅 ] - 중계기
    어떤 요청을 어디로 안내 및 매핑할 것인지를 정하는 것으로,
    리액트에서는 url 요청에 따라 요청에 매핑된 컴포넌트를 렌더링 한다.

    - BrowserRouter: 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
    - Routes: Route 들을 묶어주는 단위(컴포넌트)
    - Route: url 요청 주소와 컴포넌트를 매핑해 주는 단위(컴포넌트)

    [ <Route> 컴포넌트 attribute ]
    - 첫 번째 <Route>는 /의 경로를 가지며 Layout 컴포넌트를 렌더링한다.
    - <Route>는 중첩될 수 있으며, 중첩된 <Route>는 상위 경로를 상속하고 추가한다. 
    - 홈 구성 요소 경로에는 경로가 없지만 index attribute 가 있다. (경로가 /인 상위 경로의 기본 경로로 지정됨)
    - 경로를 *로 설정하면 정의되지 않은 URL 에 대한 포괄적인 역할을 한다. (404 오류 페이지에 적합)
*/
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 인덱스는 최상위 경로를 의미함. root 경로를 가르키는데 인덱스 */}
          <Route index element={<Main />} />
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;