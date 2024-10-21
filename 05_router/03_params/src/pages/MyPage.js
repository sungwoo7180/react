import { Navigate } from 'react-router-dom';

function MyPage() {

    const isLogin = false;

    if (!isLogin) {

        return <Navigate to="/login" />
    }

    return (
        <div>
            <h1>마이페이지</h1>
        </div>
    );
}

export default MyPage;